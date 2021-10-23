import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  MoonIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Logo } from '../images/Wohnvollogo'

const home = [
  {
    name: 'Delightful',
    href: '#',
  },
  {
    name: 'Joyful',
    href: '#',
  },
  { 
    name: 'Meaningful', 
    href: '#' 
  },
  {
    name: 'Resourceful',
    href: '#',
  },
  {
    name: 'Trustful',
    href: '#',
  },
]
const company = [
  {
    name: 'Vision',
    href: '#',
  },
  {
    name: 'Scalability',
    href: '#',
  },
  { 
    name: 'Sustainability', 
    href: '#' 
  },
  {
    name: 'Technology',
    href: '#',
  },
  {
    name: 'Team',
    href: '#',
  },
]
const career = [
  {
    name: 'Vacancies'  
  }
]
const classNames = (...classes) => classes.filter(Boolean).join(' ');
const PopOverItem = (title, items) => {
  return (<Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-green-900' : 'text-green-500',
                      'group bg-white rounded-md inline-flex items-center text-base hover:text-green-900'
                    )}
                  >
                    <span>{title}</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-green-600' : 'text-green-400',
                        'ml-2 h-5 w-5 group-hover:text-green-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-2 sm:p-8">
                          {items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-green-50"
                            >
                              <div className="ml-4">
                                <p className="text-base">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>)
}

const Header = () => {
  return (
    <Popover className="relative bg-white text-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <Logo className="h-50 w-50 sm:h-10 m-10" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-green-400 hover:text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {PopOverItem('Home', home)}
            {PopOverItem('Company', company)}
            {PopOverItem('Career', career)}

            <a href="#" className="text-base  text-green-500 hover:text-green-900">
              Apply
            </a>
            <a href="#" className="text-base  text-green-500 hover:text-green-900">
              Contact
            </a>
            <a href="#" className="flex flex-row text-base text-green-500 hover:text-green-900">
              <MoonIcon className="h-5 w-5"/> EN
            </a>
          </Popover.Group>
        </div>
      </div>
/*
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-green-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-green-400 hover:text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {home.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-green-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base  text-green-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base  text-green-900 hover:text-green-700">
                  Pricing
                </a>

                <a href="#" className="text-base  text-green-900 hover:text-green-700">
                  Docs
                </a>
                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base  text-green-900 hover:text-green-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base  text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base  text-green-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition> */
    </Popover> 
  )
}

export { Header }