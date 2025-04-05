'use client'

import { useResponsive } from '@/hooks/use-responsive'
import { Shield, HandHeart, Palette, Settings, SmilePlus } from 'lucide-react'
import Image from 'next/image'

export function SectionSix() {
  const { isMobile, isTabletHorizontal, isTabletVertical, isDesktop } =
    useResponsive()

  return (
    <section
      className={`w-full py-8 ${isTabletVertical || isTabletHorizontal ? 'px-8' : ''} md:my-20 max-w-7xl mx-auto`}
    >
      {isMobile ? (
        // Mobile layout
        <>
          <div className="bg-yellowColor p-6 relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
              <Image
                src="/assets/icecream-img.png"
                alt=""
                width={503}
                height={574}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 bg-white/60 p-4 rounded-2xl">
              {/* Heading */}
              <div className="mb-6">
                <h2 className="text-[24px] font-bold">
                  <div className="text-mainTextBlur">DES EXPÉRIENCES</div>
                  <div className="text-mainTextBlur">INOUBLIABLES</div>
                  <div className="text-secondTextBlur">LOREN IPSUM TRUC</div>
                </h2>
              </div>

              {/* Subheading */}
              <div className="mb-4">
                <h3 className="text-lg font-medium text-mainColor border-l-[2px] pl-2 border-gray-400">
                  À Propos De BASIC
                </h3>
              </div>

              {/* Text */}
              <p className="text-sm text-mainColor mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              {/* Icons in specific layout */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 justify-items-center mt-10 mb-8 text-mainColor">
            {/* First row - 2 icons */}
            <div className="flex flex-col items-center text-center ">
              <div className="w-12 h-12 rounded-full bg-greenButtonColor flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium  text-sm mb-0.5">Authenticité</h4>
              <p className="text-xs ">Sous-titre</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-greenButtonColor flex items-center justify-center mb-2">
                <HandHeart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium  text-sm mb-0.5">Respect</h4>
              <p className="text-xs ">Sous-titre</p>
            </div>

            {/* Second row - 2 icons */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-greenButtonColor flex items-center justify-center mb-2">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium  text-sm mb-0.5">Diversité</h4>
              <p className="text-xs ">Sous-titre</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-greenButtonColor flex items-center justify-center mb-2">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium  text-sm mb-0.5">Personnalisation</h4>
              <p className="text-xs ">Sous-titre</p>
            </div>

            {/* Third row - 1 centered icon */}
            <div className="flex flex-col items-center text-center col-span-2">
              <div className="w-12 h-12 rounded-full bg-[#0D9488] flex items-center justify-center mb-2">
                <SmilePlus className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-medium  text-sm mb-0.5">Confort</h4>
              <p className="text-xs ">Sous-titre</p>
            </div>
          </div>
        </>
      ) : (
        // Desktop layout
        <>
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div>
                <h2
                  className={`${isMobile ? 'text-[24px]' : isDesktop ? 'text-[48px] leading-[60px]' : isTabletHorizontal ? 'text-[40px] leading-[56px]' : 'text-[32px] leading-[42px]'}  font-bold`}
                >
                  <span className="text-mainTextBlur">
                    DES EXPÉRIENCES INOUBLIABLES
                  </span>{' '}
                  <span className="text-secondTextBlur">LOREM IPSUM TRUC</span>
                </h2>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-[1px] bg-gray-300 mr-4"></div>
                <h3
                  className={`font-medium text-mainColor ${isDesktop ? 'text-[28px]' : isTabletHorizontal ? 'text-[24px]' : 'text-[20px]'}`}
                >
                  À Propos De BASIC
                </h3>
              </div>

              <p
                className={`text-mainColor ${isDesktop ? 'text-[18px] pl-[64px]' : isTabletHorizontal ? 'text-[16px] pl-[64px]' : 'text-[16px]'} leading-[26px]`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className={`flex justify-end`}>
              <div className="rounded-lg overflow-hidden w-full max-w-md">
                <Image
                  src="/assets/icecream-img.png"
                  alt=""
                  width={503}
                  height={isDesktop ? 574 : isTabletHorizontal ? 412 : 524}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`grid ${isTabletVertical ? 'grid-cols-2 gap-x-16 gap-y-6 justify-items-center' : 'grid-cols-5'} gap-4 mt-20`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-greenButtonColor flex items-center justify-center mb-3">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-medium text-gray-800 mb-0.5">Authenticité</h4>
              <p className="text-xs text-gray-500">Sous-titre</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-greenButtonColor flex items-center justify-center mb-3">
                <HandHeart className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-medium text-gray-800 mb-0.5">Respect</h4>
              <p className="text-xs text-gray-500">Sous-titre</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-greenButtonColor flex items-center justify-center mb-3">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-medium text-gray-800 mb-0.5">Diversité</h4>
              <p className="text-xs text-gray-500">Sous-titre</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-greenButtonColor flex items-center justify-center mb-3">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-medium text-gray-800 mb-0.5">
                Personnalisation
              </h4>
              <p className="text-xs text-gray-500">Sous-titre</p>
            </div>

            <div
              className={`flex flex-col items-center text-center ${isTabletVertical ? 'col-span-2' : ''}`}
            >
              <div className="w-14 h-14 rounded-full bg-greenButtonColor flex items-center justify-center mb-3">
                <SmilePlus className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-medium text-gray-800 mb-0.5">Confort</h4>
              <p className="text-xs text-gray-500">Sous-titre</p>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
