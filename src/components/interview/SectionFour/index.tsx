'use client'

import type React from 'react'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Paperclip } from 'lucide-react'
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parseISO
} from 'date-fns'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useResponsive } from '@/hooks/use-responsive'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Types for our calendar data
type CalendarDay = {
  date: Date
  status: 'libre' | 'occupé'
}

type MonthData = {
  month: Date
  days: CalendarDay[]
}

// Mock API function - replace with actual API call
const fetchMonthData = async (date: Date): Promise<MonthData> => {
  // In a real implementation, this would be an API call
  // For now, we'll generate mock data
  const start = startOfMonth(date)
  const end = endOfMonth(date)
  const daysInMonth = eachDayOfInterval({ start, end })

  // Busy dates from requirements
  const busyDates = ['2025-01-28', '2025-01-29', '2025-04-02']

  const days = daysInMonth.map((day) => {
    // Check if this day is in our busy dates
    const isBusy = busyDates.some((busyDate) =>
      isSameDay(day, parseISO(busyDate))
    )

    return {
      date: day,
      status: isBusy ? ('occupé' as const) : ('libre' as const)
    }
  })

  return {
    month: date,
    days
  }
}

// Get days of previous and next month to fill the calendar grid
const getCalendarDays = (monthData: MonthData) => {
  const firstDayOfMonth = startOfMonth(monthData.month)
  // const lastDayOfMonth = endOfMonth(monthData.month)

  // Get the day of the week for the first day (0 = Sunday, 1 = Monday, etc.)
  // Adjust for Monday as first day of week
  let firstDayOfWeek = firstDayOfMonth.getDay() - 1
  if (firstDayOfWeek === -1) firstDayOfWeek = 6 // Sunday becomes last day

  // Get days from previous month to fill the first row
  const daysFromPreviousMonth = []
  const previousMonth = subMonths(monthData.month, 1)
  const lastDayOfPreviousMonth = endOfMonth(previousMonth)

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const day = new Date(lastDayOfPreviousMonth)
    day.setDate(lastDayOfPreviousMonth.getDate() - i)
    daysFromPreviousMonth.push({
      date: day,
      status: 'occupé' as const
    })
  }

  // Get days from next month to fill the last row
  const daysFromNextMonth = []
  const nextMonth = addMonths(monthData.month, 1)
  const firstDayOfNextMonth = startOfMonth(nextMonth)

  const totalDaysToShow = 42 // 6 rows of 7 days
  const daysToAdd =
    totalDaysToShow - (daysFromPreviousMonth.length + monthData.days.length)

  for (let i = 0; i < daysToAdd; i++) {
    const day = new Date(firstDayOfNextMonth)
    day.setDate(firstDayOfNextMonth.getDate() + i)
    daysFromNextMonth.push({
      date: day,
      status: 'occupé' as const
    })
  }

  return [...daysFromPreviousMonth, ...monthData.days, ...daysFromNextMonth]
}

// Rich text editor toolbar buttons
const ToolbarButton = ({
  icon,
  onClick
}: {
  icon: React.ReactNode
  onClick?: () => void
}) => (
  <button
    className="p-1 hover:bg-gray-100 rounded text-greenArrow text-[16px]"
    onClick={onClick}
  >
    {icon}
  </button>
)

export default function SectionFour() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [monthData, setMonthData] = useState<MonthData | null>(null)
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  )
  const [fileName, setFileName] = useState('')

  const { isMobile, isTabletHorizontal, isDesktop } = useResponsive()
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const [lineWidth, setLineWidth] = useState(0)

  // Update line width when container width changes
  useEffect(() => {
    const updateLineWidth = () => {
      if (cardsContainerRef.current) {
        setLineWidth(cardsContainerRef.current.offsetWidth)
      }
    }

    // Initial update
    updateLineWidth()

    // Update on resize
    window.addEventListener('resize', updateLineWidth)
    return () => window.removeEventListener('resize', updateLineWidth)
  }, [])

  // Fetch month data when current date changes
  useEffect(() => {
    const getMonthData = async () => {
      setLoading(true)
      try {
        const data = await fetchMonthData(currentDate)
        setMonthData(data)
        setCalendarDays(getCalendarDays(data))
      } catch (error) {
        console.error('Error fetching month data:', error)
      } finally {
        setLoading(false)
      }
    }

    getMonthData()
  }, [currentDate])

  // Handle month navigation
  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, email, message, fileName })
    // Reset form
    handleClearAll()
  }

  // Handle clear all
  const handleClearAll = () => {
    setName('')
    setEmail('')
    setMessage('')
    setFileName('')
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target?.files?.[0]?.name ?? '')
    }
  }

  // Days of the week
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <section className={`w-full mx-auto py-20 px-4 md:px-8`}>
      <div className="container max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center w-full mb-10">
          <div
            className="absolute h-[2px] bg-gray-300"
            style={{
              left: isMobile ? '0vw' : 'calc(50% - ${lineWidth / 2}px)',
              width: isMobile ? lineWidth : lineWidth - 300,
              top: '50%'
            }}
          />
          <motion.h2
            // className="text-secondaryButton text-3xl font-bold relative z-10 bg-white px-8"
            className={`text-secondaryButton z-20 bg-white font-semibold px-8 ${isDesktop ? 'text-[52px]' : isMobile ? 'text-[24px]' : isTabletHorizontal ? 'text-[40px]' : 'text-[32px]'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NOS ACTIVITÉS
          </motion.h2>
        </div>

        <div
          className="bg-white rounded-2xl shadow-lg shadow-shadowPink p-6 mb-8 border"
          ref={cardsContainerRef}
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={goToPreviousMonth}
              className="p-2 text-gray-500 hover:text-secondaryButton"
              aria-label="Previous month"
            >
              <ChevronLeft size={20} />
            </button>

            <h3 className="text-lg font-medium mx-4">
              {monthData && format(monthData.month, 'MMMM yyyy')}
            </h3>

            <button
              onClick={goToNextMonth}
              className="p-2 text-gray-500 hover:text-secondaryButton"
              aria-label="Next month"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Days of the week */}
            {daysOfWeek.map((day) => (
              <div key={day} className={`text-center font-medium py-2`}>
                {day}
              </div>
            ))}

            {/* Calendar days */}
            {loading ? (
              <div className="col-span-7 py-8 text-center">
                Loading calendar...
              </div>
            ) : (
              calendarDays.map((day, index) => {
                const isCurrentMonth = monthData
                  ? isSameMonth(day.date, monthData.month)
                  : false

                return (
                  <div
                    key={index}
                    className={`
                    border rounded-md p-2 flex flex-col ${isMobile ? 'justify-center h-auto' : 'h-16'} items-center
                    ${!isCurrentMonth ? 'bg-gray-100 text-gray-400 ' : day.status === 'libre' ? 'bg-orange-50 justify-center' : 'text-gray-400 justify-center'}
                    ${day.status === 'libre' && isCurrentMonth ? 'border-secondaryButton text-mainColor' : ''}
                  `}
                  >
                    <span className={`${isMobile ? 'text-[14px]' : 'text-xl'}`}>
                      {format(day.date, 'd')}
                    </span>
                    {isCurrentMonth && !isMobile && (
                      <span className={`text-lg `}>
                        {day.status === 'libre' ? 'Libre' : 'Occupé'}
                      </span>
                    )}
                  </div>
                )
              })
            )}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className={`flex justify-center ${isMobile ? '' : 'items-center'} gap-[70px]`}
          >
            <label
              htmlFor="name"
              className="block text-2xl font-medium mb-1 text-mainColor"
            >
              Nom:
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrez votre nom"
              className="w-full rounded-full h-[40px] shadow-lg shadow-shadowPink"
            />
          </div>

          <div className="flex justify-center items-center gap-[60px]">
            <label
              htmlFor="email"
              className="block text-2xl font-medium mb-1 text-mainColor"
            >
              Email:
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre e-mail"
              className="w-full  rounded-full h-[40px] shadow-lg shadow-shadowPink"
            />
          </div>

          <div className={`flex justify-left gap-[25px]`}>
            <label
              htmlFor="message"
              className="block text-2xl font-medium mb-1 text-mainColor"
            >
              Message:
            </label>
            <div
              className={`border ${isMobile ? '' : 'rounded-2xl'} w-full shadow-lg shadow-shadowPink ${isMobile ? 'overflow-auto h-[296px]' : ''}`}
            >
              {/* Rich Text Editor Toolbar */}
              <div className="flex items-center p-2 border-b">
                <ToolbarButton icon={<span className="font-bold">B</span>} />
                <ToolbarButton icon={<span className="italic">I</span>} />
                <ToolbarButton icon={<span className="underline">U</span>} />
                <div className="h-4 w-px bg-gray-300 mx-2" />
                <ToolbarButton icon={<span>H6</span>} />
                <div className="h-4 w-px bg-gray-300 mx-2" />
                <ToolbarButton icon={<span>≡</span>} />
                <ToolbarButton icon={<span>≡</span>} />
                <ToolbarButton icon={<span>≡</span>} />
                <div className="h-4 w-px bg-gray-300 mx-2" />
                <ToolbarButton icon={<span>1.</span>} />
                <ToolbarButton icon={<span>•</span>} />
                <div className="h-4 w-px bg-gray-300 mx-2" />
                <ToolbarButton icon={<span>⊞</span>} />
                <ToolbarButton icon={<span>⊞</span>} />
              </div>

              {/* Text Editor */}
              <div className="p-2 h-full">
                <div className="mb-2">
                  <h6 className="font-bold text-mainColor">Heading 6</h6>
                </div>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
                  className="w-full h-full border-none resize-none focus-visible:ring-0 p-0 text-mainColor"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div
            className={`flex justify-left  gap-[45px] ${isMobile ? '' : 'items-center'}`}
          >
            <label
              htmlFor="file"
              className="block text-2xl font-medium mb-1 text-mainColor"
            >
              Fichier:
            </label>
            <div className="flex items-center">
              <label htmlFor="file" className="flex items-center">
                <div
                  className={`${isMobile ? 'flex flex-col items-start gap-2 justify-center' : 'flex items-center  gap-4'} `}
                >
                  <span className="text-[20px] text-secondaryButton flex justify-center !items-center cursor-pointer">
                    {' '}
                    <Paperclip size={16} className="mr-1" />
                    Pièce jointe
                  </span>
                  <span className="text-[18px] text-blueColor">
                    (*fichiers pdf uniquement)
                  </span>
                </div>
                <input
                  id="file"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {fileName && (
                <span className="ml-2 text-md text-gray-500">*{fileName}</span>
              )}
            </div>
          </div>

          <div
            className={`flex ${isMobile ? 'justify-center' : 'justify-end'} space-x-4 pt-4`}
          >
            <Button
              type="button"
              variant="outline"
              onClick={handleClearAll}
              className="text-mainColor rounded-full px-10 py-[16px] !text-lg"
            >
              Clear All
            </Button>

            <Button
              type="submit"
              className="bg-secondaryButton hover:bg-secondaryButton text-white rounded-full px-10 py-[16px] !text-lg"
            >
              Envoyer
              <Image
                src="/assets/send-2.svg"
                alt="sent-2"
                width={20}
                height={20}
              />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
