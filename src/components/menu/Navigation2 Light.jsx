import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mi', href: '/acerca-de-mi/' },
  { name: 'Experiencia', href: '/experiencia/' },
  { name: 'Proyectos', href: '/proyectos/' }
]

export default function Navigation({ currentPage }) {

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-5 sm:py-2">
            <div className="relative flex h-16 items-center justify-between border-b-2">
              {/* Logo / Image */}
              <div className="flex items-center gap-x-5">
              <p className='font-semibold bg-zinc-900 text-zinc-500 py-1 px-6 rounded-md hover:text-emerald-600'>jeantp.dev</p>
              </div>

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden gap-x-5">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-900 hover:bg-gray-700 hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              

              {/* Menu items */}
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-2 py-1 font-semibold ${currentPage === item.href ? 'text-zinc-300 bg-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
                      aria-current={currentPage === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Responsive menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${currentPage === item.href ? 'bg-zinc-900 text-white' : 'text-zinc-900 hover:bg-zinc-900 hover:text-white'}`}
                  aria-current={currentPage === item.href ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>

          {/* Aquí debes colocar el segundo Disclosure.Panel */}
          <Disclosure.Panel className="sm:hidden">
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
