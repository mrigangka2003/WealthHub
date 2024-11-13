import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { sidebarLinks } from '@/constants'

type Props = {}

const SideBar = ({user}:SiderbarProps) => {
  return (
    <section className='sidebar'>
        <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2" >
                <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="WealthHub"
                className="size-[24px] max-xl:size-14"
                />
                <h1 className="sidebar-logo">WealthHub
                </h1>
            </Link>
            
        </nav>
    </section>
  )
}

export default SideBar