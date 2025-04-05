import Link from 'next/link'
import Image from 'next/image'
import { useResponsive } from '@/hooks/use-responsive'
import { motion } from 'framer-motion'

export function Footer() {
  const { isMobile, isDesktop } = useResponsive()

  const renderIcon = ['fb', 'ig', 'yt'].map((icon) => (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 }
      }}
      key={icon}
    >
      <Link
        href="#"
        className="bg-secondaryButton rounded-full p-2 inline-flex"
      >
        <Image
          src={`/assets/${icon}.svg`}
          alt="fb-icon"
          width={18}
          height={18}
          className=""
        />
        <span className="sr-only">{icon}</span>
      </Link>
    </motion.div>
  ))

  return (
    <footer className="bg-mainColor text-white py-10">
      <div className={`max-w-7xl mx-auto ${isDesktop ? '' : 'px-8'}`}>
        {/* Main content */}
        <div
          className={`flex ${isMobile ? 'flex-col gap-0 pt-20' : ' gap-8'} justify-between`}
        >
          {/* Company Info - Always visible */}
          <div
            className={`space-y-2 ${isMobile ? 'text-center' : 'text-left'} mb-6 md:mb-0`}
          >
            <h2 className="font-medium">BASIC</h2>
            <p className="text-sm">(514) 904-6789</p>
            <p className="text-sm md:hidden">Quebec, 3100 Boulevard</p>
            <p className="text-sm md:hidden">de la Côte-Vertu</p>
            <p className="text-sm hidden md:block">
              Quebec, 3100 Boulevard de la Côte-Vertu
            </p>
          </div>

          {/* Activities - Desktop only */}
          <div className="hidden md:block space-y-2 text-white/60">
            <Link href="#" className="block text-sm hover:underline">
              Activité 1
            </Link>
            <Link href="#" className="block text-sm hover:underline">
              Activité 2
            </Link>
            <Link href="#" className="block text-sm hover:underline">
              Activité 3
            </Link>
          </div>

          {/* Titles - Different on mobile and desktop */}
          <div className="space-y-3 md:space-y-2 text-center md:text-left mb-6 md:mb-0 text-white/60">
            <Link href="#" className="block text-sm hover:underline">
              Titre 1
            </Link>
            <Link href="#" className="block text-sm hover:underline">
              Titre 2
            </Link>
            <Link href="#" className="block text-sm hover:underline">
              Titre 3
            </Link>
            {isMobile && (
              <>
                <Link
                  href="#"
                  className="block text-sm hover:underline md:hidden"
                >
                  Titre 4
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:underline md:hidden"
                >
                  Titre 5
                </Link>
                <Link
                  href="#"
                  className="block text-sm hover:underline md:hidden"
                >
                  Titre 6
                </Link>
              </>
            )}
          </div>

          {/* Blog & Contact */}
          <div className="space-y-3 md:space-y-2 text-center md:text-left mb-6 md:mb-0 text-white/60">
            <Link href="#" className="block text-sm hover:underline ">
              Blog
            </Link>
            <Link href="#" className="block text-sm hover:underline">
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Divider - Desktop only */}
        <div className="md:block border-t border-brownColor/90 my-8"></div>

        {/* Social media icons - Different position on mobile vs desktop */}
        <div
          className={`flex ${isMobile ? 'flex-col' : ''} md:flex-row justify-between items-center`}
        >
          {/* Copyright - Order changes between mobile and desktop */}
          <div
            className={`${isMobile ? 'order-2' : 'order-1'} text-sm mt-6 md:mt-0`}
          >
            © BASIC 2024
          </div>

          {/* Social icons */}

          <div className="order-1 md:order-2 flex space-x-4">{renderIcon}</div>
        </div>
      </div>
    </footer>
  )
}
