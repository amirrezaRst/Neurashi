import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const navigation = [
        { name: 'Use Cases', href: '#', current: false },
        { name: 'Developers', href: '#', current: false },
        { name: 'Learn', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure as="nav" className="container pt-2 mb-[40px]">
            {({ open }) => (
                <>
                    <div className="mx-auto">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <i class="fa-regular fa-xmark"></i>
                                    ) : (
                                        <i class="fa fa-bars"></i>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/" className='relative'>
                                        <img
                                            className="h-8 w-auto"
                                            src="/images/logo-w-1.png"
                                            alt="Your Company"
                                        />
                                        {/* <span className='text-white bg-[#7B59C5] rounded-full px-[3px] py-[0px] text-[.7rem] absolute right-[-6px] top-[-2px]'>Chat</span> */}
                                    </Link>
                                </div>

                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-100',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name} <i class="fa-solid fa-caret-down"></i>
                                            </Link>
                                        ))}
                                        <button className='rounded-full border border-[#7b59c5] text-[#7b59c5] text-[15px] px-5 hover:text-white hover:bg-[#503390] transition-all'><i class="fa-solid fa-handshake mr-2"></i> Partnership</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;