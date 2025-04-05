'use client'

import type React from 'react'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  MapPin,
  ShoppingBag,
  Coffee,
  Utensils,
  Car,
  Plane,
  PenIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'
import { useResponsive } from '@/hooks/use-responsive'

// List of available icons for additional points (4 and 5)
const additionalIcons = [
  { icon: ShoppingBag, name: 'Shop' },
  { icon: Coffee, name: 'Cafe' },
  { icon: Utensils, name: 'Restaurant' },
  { icon: Car, name: 'Transport' },
  { icon: Plane, name: 'Airport' }
]

interface MapPoint {
  id: string
  x: number
  y: number
  name: string
  isEditing: boolean
  isSelected: boolean
  iconIndex: number
  isInitial: boolean // Flag to identify initial points
  initialPointNumber?: number // For initial points 1, 2, 3
}

export function SectionThree() {
  const [points, setPoints] = useState<MapPoint[]>([])
  const { isMobile, isTabletHorizontal, isDesktop } = useResponsive()

  const [activeTab, setActiveTab] = useState('activity-1')
  const [tab, setTab] = useState('0')
  const mapRef = useRef<HTMLDivElement>(null)
  const [usedIconIndices, setUsedIconIndices] = useState<number[]>([])

  const [lineWidth, setLineWidth] = useState(0)

  // Update line width when container width changes
  useEffect(() => {
    const updateLineWidth = () => {
      if (mapRef.current) {
        setLineWidth(mapRef.current.offsetWidth)
      }
    }

    // Initial update
    updateLineWidth()

    // Update on resize
    window.addEventListener('resize', updateLineWidth)
    return () => window.removeEventListener('resize', updateLineWidth)
  }, [])

  // Generate 3 random points on component mount, positioned more centrally
  useEffect(() => {
    // Generate exactly 3 random points on component mount, positioned more centrally
    const initialPoints: MapPoint[] = [
      {
        id: `initial-0`,
        // Position more toward center (30-70% range instead of 0-100%)
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
        name: `Activité 1`,
        isEditing: false,
        isSelected: false,
        iconIndex: 0,
        isInitial: true,
        initialPointNumber: 1
      },
      {
        id: `initial-1`,
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
        name: `Activité 2`,
        isEditing: false,
        isSelected: false,
        iconIndex: 0,
        isInitial: true,
        initialPointNumber: 2
      },
      {
        id: `initial-2`,
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
        name: `Activité 3`,
        isEditing: false,
        isSelected: false,
        iconIndex: 0,
        isInitial: true,
        initialPointNumber: 3
      }
    ]

    setPoints(initialPoints)
  }, [])

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (points.length >= 5) return

    const mapRect = mapRef.current?.getBoundingClientRect()
    if (!mapRect) return

    const x = ((e.clientX - mapRect.left) / mapRect.width) * 100
    const y = ((e.clientY - mapRect.top) / mapRect.height) * 100

    // Find an icon index that hasn't been used yet for additional points
    let newIconIndex = 0
    const nonInitialPoints = points.filter((p) => !p.isInitial)

    if (nonInitialPoints.length > 0) {
      // Get all icon indices currently in use by non-initial points
      const usedIndices = nonInitialPoints.map((p) => p.iconIndex)

      // Find an index that's not in use
      for (let i = 0; i < additionalIcons.length; i++) {
        if (!usedIndices.includes(i)) {
          newIconIndex = i
          break
        }
      }
    }

    const newPoint: MapPoint = {
      id: `point-${Date.now()}`,
      x,
      y,
      name: `Activité ${points.length + 1}`,
      isEditing: false,
      isSelected: false,
      iconIndex: newIconIndex,
      isInitial: false // Not an initial point
    }

    setPoints([...points, newPoint])
    setUsedIconIndices([...usedIconIndices, newIconIndex])
  }

  const togglePointSelection = (id: string) => {
    setPoints(
      points.map((point) => ({
        ...point,
        isSelected: point.id === id ? !point.isSelected : false,
        isEditing: false
      }))
    )
  }

  const handleButtonClick = (id: string) => {
    setPoints(
      points.map((point) => ({
        ...point,
        isSelected: point.id === id,
        isEditing: false
      }))
    )
    setTab(id)
  }

  const startEditing = (id: string) => {
    setPoints(
      points.map((point) => ({
        ...point,
        isEditing: point.id === id,
        isSelected: point.id === id
      }))
    )
  }

  const updatePointName = (id: string, name: string) => {
    setPoints(
      points.map((point) => (point.id === id ? { ...point, name } : point))
    )
  }

  const deletePoint = (id: string) => {
    // Only allow deletion of non-initial points
    setPoints(points.filter((point) => point.id !== id || point.isInitial))
  }

  // Function to change the icon of a point (only for non-initial points)
  const changePointIcon = (id: string) => {
    setPoints(
      points.map((point) => {
        if (point.id === id && !point.isInitial) {
          // Get all icon indices currently in use by non-initial points except this one
          const otherNonInitialPoints = points.filter(
            (p) => !p.isInitial && p.id !== id
          )
          const usedIndices = otherNonInitialPoints.map((p) => p.iconIndex)

          // Find the next available icon index that's not in use
          let newIconIndex = (point.iconIndex + 1) % additionalIcons.length
          while (usedIndices.includes(newIconIndex)) {
            newIconIndex = (newIconIndex + 1) % additionalIcons.length
          }

          return { ...point, iconIndex: newIconIndex }
        }
        return point
      })
    )
  }

  // Function to render the appropriate icon for a point
  const renderPointIcon = (point: MapPoint) => {
    if (point.isInitial && point.initialPointNumber) {
      // For initial points, use custom icons
      return (
        <div className="">
          <Image
            src={`/assets/icon-1${point.initialPointNumber}.svg`}
            alt={`Icon ${point.initialPointNumber}`}
            width={40}
            height={40}
          />
        </div>
      )
    } else {
      // For additional points, use Lucide icons
      const IconComponent = additionalIcons[point.iconIndex]?.icon
      return (
        <div className="bg-white rounded-full p-1 shadow-md">
          {IconComponent && (
            <IconComponent className="h-5 w-5 text-secondaryButton cursor-pointer" />
          )}
        </div>
      )
    }
  }

  // Function to render the appropriate icon for buttons
  const renderButtonIcon = (point: MapPoint) => {
    if (point.isInitial && point.initialPointNumber) {
      // For initial points, use custom icons
      return (
        <Image
          src={`/assets/icon-${point.initialPointNumber}.svg`}
          alt={`Icon ${point.initialPointNumber}`}
          width={16}
          height={16}
          className="mr-1"
        />
      )
    } else {
      // For additional points, use Lucide icons
      const IconComponent = additionalIcons[point.iconIndex]?.icon
      return IconComponent && <IconComponent className="h-4 w-4 mr-1" />
    }
  }

  return (
    <section
      className={`w-full ${isMobile ? 'py-10' : 'py-20'} px-4 md:px-8 relative bg-[#fff7f7]`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="relative flex items-center justify-center w-full mb-2">
          <div
            className="absolute h-[2px] bg-gray-300"
            style={{
              left: `calc(50% - ${lineWidth / 2}px)`,
              width: lineWidth,
              top: '50%'
            }}
          />
          <motion.h2
            // className="text-secondaryButton text-3xl font-bold relative z-10 bg-white px-8"
            className={`text-secondaryButton z-20 bg-[#fff7f7] font-semibold px-8 ${isDesktop ? 'text-[52px]' : isMobile ? 'text-[24px]' : isTabletHorizontal ? 'text-[40px]' : 'text-[32px]'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            TITRE BLOC 2
          </motion.h2>
        </div>

        <Tabs
          defaultValue="activity-1"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-8"
        >
          {/* Add buttons corresponding to each point */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {points.map((point) => (
              <Button
                key={point.id}
                variant={point.isSelected ? 'default' : 'outline'}
                className={`${point.isSelected ? 'bg-secondaryButton hover:bg-secondaryButton' : ''}
                border-secondaryButton text-mainColor rounded-full shadow-lg hover:bg-orange-100
                ${Number(tab) === Number(point.id) ? 'bg-secondaryButton !text-white' : ''}`}
                onClick={() => handleButtonClick(point.id)}
              >
                {renderButtonIcon(point)}
                <p className="text-[20px] py-[16px]">{point.name}</p>
              </Button>
            ))}
          </div>

          <TabsContent value="activity-1" className="mt-6">
            <div
              ref={mapRef}
              className={`relative w-full ${isMobile ? 'h-[600px]' : 'h-[698px]'} rounded-xl overflow-hidden cursor-pointer`}
              onClick={handleMapClick}
            >
              <div className="absolute top-3 left-3 bg-white/90 rounded-md px-2 py-1 text-sm flex items-center z-10">
                <MapPin className="h-4 w-4 mr-1 text-secondaryButton" />
                <span className="text-[18px] text-mainColor">Emplacement</span>
              </div>

              <Image
                src="/assets/map-image.png"
                alt="Map"
                className="w-full h-full object-cover"
                width={1240}
                height={698}
              />
              <AnimatePresence>
                {points.map((point) => (
                  <motion.div
                    key={point.id}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: point.isSelected ? 1.5 : 1,
                      zIndex: point.isSelected ? 20 : 10
                    }}
                    exit={{ scale: 0 }}
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePointSelection(point.id)
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.07 }}
                    >
                      {renderPointIcon(point)}

                      {point.isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-md rounded-md p-1.5 min-w-[100px] z-30 text-xs"
                        >
                          {point.isEditing ? (
                            <div className="flex items-center">
                              <Input
                                value={point.name}
                                onChange={(e) =>
                                  updatePointName(point.id, e.target.value)
                                }
                                className="text-xs h-5 py-0 px-1"
                                autoFocus
                                onBlur={() => {
                                  setPoints(
                                    points.map((p) =>
                                      p.id === point.id
                                        ? { ...p, isEditing: false }
                                        : p
                                    )
                                  )
                                }}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          ) : (
                            <div className="flex flex-col gap-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium">
                                  {point.name}
                                </span>
                                <div className="flex space-x-1">
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-4 w-4"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      startEditing(point.id)
                                    }}
                                  >
                                    <PenIcon className="!w-[15px] h-1" />
                                  </Button>

                                  {/* Only show delete button for non-initial points */}
                                  {!point.isInitial && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-4 w-4 text-red-500"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        deletePoint(point.id)
                                      }}
                                    >
                                      <X className="h-2.5 w-2.5" />
                                    </Button>
                                  )}
                                </div>
                              </div>

                              {/* Only show change icon button for non-initial points */}
                              {!point.isInitial && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-[10px] h-5 py-0"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    changePointIcon(point.id)
                                  }}
                                >
                                  Change Icon
                                </Button>
                              )}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {points.length >= 5 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-3 right-3 bg-white/90 rounded-md px-3 py-1 text-sm text-red-500"
                >
                  Maximum 5 points
                </motion.div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="activity-2">
            <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
              <p className="text-gray-500">Activité 2 content</p>
            </div>
          </TabsContent>

          <TabsContent value="activity-3">
            <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-xl">
              <p className="text-gray-500">Activité 3 content</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
