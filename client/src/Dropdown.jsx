
import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    return (
        <Menu id='dropdown-nav' as="div" className="justify-self-end relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-self-end gap-x-1.5 px-3 py-2 text-sm font-semibold shadow-sm opacity-80">
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L20 18" stroke="#707070" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 12L20 12" stroke="#707070" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 6L20 6" stroke="#707070" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </MenuButton>
            </div>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-5 w-32 origin-top-right bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'text-gray-300' : 'text-gray-300',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Home
                                </a>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#projects"
                                    className={classNames(
                                        focus ? ' text-gray-300' : 'text-gray-300',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Projects
                                </a>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="mailto:noahmartineau8@gmail.com"
                                    className={classNames(
                                        focus ? ' text-gray-300' : 'text-gray-300',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Email
                                </a>
                            )}
                        </MenuItem>
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    )
}

