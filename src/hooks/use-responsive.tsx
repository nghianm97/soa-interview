'use client'

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode
} from 'react'

interface ResponsiveContextType {
  isMobile: boolean
  isTabletVertical: boolean
  isTabletHorizontal: boolean
  isDesktop: boolean
  // isLargeDesktop: boolean
}

const ResponsiveContext = createContext<ResponsiveContextType>({
  isMobile: false,
  isTabletVertical: false,
  isTabletHorizontal: false,
  isDesktop: false
  // isLargeDesktop: false
})

export const ResponsiveProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTabletVertical, setIsTabletVertical] = useState(false)
  const [isTabletHorizontal, setIsTabletHorizontal] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  // const [isLargeDesktop, setIsLargeDesktop] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkMobile = window.matchMedia('(max-width: 640px)')
    const checkTabletVertical = window.matchMedia(
      '(min-width: 641px) and (max-width: 991px)'
    )
    const checkTabletHorizontal = window.matchMedia(
      '(min-width: 992px) and (max-width: 1366px)'
    )
    const checkDesktop = window.matchMedia('(min-width: 1367px)')
    // const checkLargeDesktop = window.matchMedia("(min-width: 1920px)")

    const updateMediaQueries = () => {
      setIsMobile(checkMobile.matches)
      setIsTabletVertical(checkTabletVertical.matches)
      setIsTabletHorizontal(checkTabletHorizontal.matches)
      setIsDesktop(checkDesktop.matches)
      // setIsLargeDesktop(checkLargeDesktop.matches)
    }

    // Khởi tạo giá trị ban đầu
    updateMediaQueries()

    // Thêm event listeners
    checkMobile.addEventListener('change', updateMediaQueries)
    checkTabletVertical.addEventListener('change', updateMediaQueries)
    checkTabletHorizontal.addEventListener('change', updateMediaQueries)
    checkDesktop.addEventListener('change', updateMediaQueries)
    // checkLargeDesktop.addEventListener("change", updateMediaQueries)

    // Cleanup
    return () => {
      checkMobile.removeEventListener('change', updateMediaQueries)
      checkTabletVertical.removeEventListener('change', updateMediaQueries)
      checkTabletHorizontal.removeEventListener('change', updateMediaQueries)
      checkDesktop.removeEventListener('change', updateMediaQueries)
      // checkLargeDesktop.removeEventListener("change", updateMediaQueries)
    }
  }, [])

  return (
    <ResponsiveContext.Provider
      value={{
        isMobile,
        isTabletVertical,
        isTabletHorizontal,
        isDesktop
        // isLargeDesktop
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  )
}

export const useResponsive = () => useContext(ResponsiveContext)
