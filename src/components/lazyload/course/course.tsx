'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { PlusIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { IconSearch } from '@tabler/icons-react'
import Image from 'next/image'
import { ThemeSwitch } from '@/components/base/theme-switch'
// import { Search } from '@/components/base/search'
import { ProfileDropdown } from '@/components/base/profile-dropdown'

export default function Courses() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        {/* <Search /> */}
        <div className="ml-auto flex items-center gap-4">
          <Button className="bg-buttonPrimary">
            <PlusIcon /> Tạo học hiệu
          </Button>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      {/* ===== Main ===== */}
      <Main>
        <div className="bg-[url('/img-bg-home.png')] bg-no-repeat bg-cover h-[20rem] flex flex-col justify-center items-center text-center w-full bg-zinc-50 mb-5 shadow-lg">
          <div className="flex flex-col justify-center items-center text-center w-full">
            <p className="text-4xl lg:text-4xl xl:text-6xl font-bold mt-6">
              Kho học liệu
            </p>
            <p className="text-1xl lg:text-1xl xl:text-2xl mt-4 text-secondaryTextColor">
              Thư viện cung cấp nguồn tài nguyên học tập đa dạng và chất lượng
              cao
            </p>
            <div className="relative flex rounded-sm mt-5">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <IconSearch size={18} />
              </div>
              <Input
                type="text"
                placeholder="Nhập từ khoá để tìm kiếm"
                id="hs-trailing-button-add-on-with-icon-and-button"
                name="hs-trailing-button-add-on-with-icon-and-button"
                className="w-[250px] md:w-[300px] lg:w-[500px] py-3 px-4 ps-11 block bg-white border-gray-200 shadow-sm rounded-s-lg rounded-e-none text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
              <Button
                type="button"
                className="py-3 px-4 inline-flex whitespace-nowrap justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md rounded-s-none border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-10 md:col-span-10 lg:col-span-5 xl:col-span-7">
            <div className="font-semibold leading-none tracking-tight mb-3 mt-5">
              Nội dung liên quan
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0 mb-4">
                  <Image
                    src="/bg-item.png"
                    alt="Card Image"
                    width={400}
                    height={200}
                    className="w-full rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <h2 className="text-base font-bold mb-2">Card Title</h2>
                  <p className="text-gray-700 text-sm">
                    This is a description inside the card body. It provides more
                    details about the content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="col-span-10 md:col-span-10 lg:col-span-5 xl:col-span-3 pl-4 border-l">
            <div className="font-semibold leading-none tracking-tight mb-3 mt-5">
              Hoạt động gần đây
            </div>
            <div className="flex flex-col gap-4">
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-10 gap">
                    <div className="col-span-5">
                      <Image
                        src="/bg-item.png"
                        alt="Card Image"
                        width={400}
                        height={200}
                        className="w-full rounded-l-lg h-full"
                      />
                    </div>
                    <div className="col-span-5 p-3">
                      <h2 className="text-base font-bold mb-2">Card Title</h2>
                      <p className="text-gray-700 text-sm">
                        This is a description inside the card body. It provides
                        more details about the content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-10 gap">
                    <div className="col-span-5">
                      <Image
                        src="/bg-item.png"
                        alt="Card Image"
                        width={400}
                        height={200}
                        className="w-full rounded-l-lg h-full"
                      />
                    </div>
                    <div className="col-span-5 p-3">
                      <h2 className="text-base font-bold mb-2">Card Title</h2>
                      <p className="text-gray-700 text-sm">
                        This is a description inside the card body. It provides
                        more details about the content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-10 gap">
                    <div className="col-span-5">
                      <Image
                        src="/bg-item.png"
                        alt="Card Image"
                        width={400}
                        height={200}
                        className="w-full rounded-l-lg h-full"
                      />
                    </div>
                    <div className="col-span-5 p-3">
                      <h2 className="text-base font-bold mb-2">Card Title</h2>
                      <p className="text-gray-700 text-sm">
                        This is a description inside the card body. It provides
                        more details about the content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-10 gap">
                    <div className="col-span-5">
                      <Image
                        src="/bg-item.png"
                        alt="Card Image"
                        width={400}
                        height={200}
                        className="w-full rounded-l-lg h-full"
                      />
                    </div>
                    <div className="col-span-5 p-3">
                      <h2 className="text-base font-bold mb-2">Card Title</h2>
                      <p className="text-gray-700 text-sm">
                        This is a description inside the card body. It provides
                        more details about the content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-10 gap">
                    <div className="col-span-5">
                      <Image
                        src="/bg-item.png"
                        alt="Card Image"
                        width={400}
                        height={200}
                        className="w-full rounded-l-lg h-full"
                      />
                    </div>
                    <div className="col-span-5 p-3">
                      <h2 className="text-base font-bold mb-2">Card Title</h2>
                      <p className="text-gray-700 text-sm">
                        This is a description inside the card body. It provides
                        more details about the content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-10 gap">
                    <div className="col-span-5">
                      <Image
                        src="/bg-item.png"
                        alt="Card Image"
                        width={400}
                        height={200}
                        className="w-full rounded-l-lg h-full"
                      />
                    </div>
                    <div className="col-span-5 p-3">
                      <h2 className="text-base font-bold mb-2">Card Title</h2>
                      <p className="text-gray-700 text-sm">
                        This is a description inside the card body. It provides
                        more details about the content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}
