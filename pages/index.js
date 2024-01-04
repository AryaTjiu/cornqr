import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import { Fragment } from 'react'
import Generator from '@/components/home/Generator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`font-sans bg-slate-100 w-full min-h-screen pb-10`}>
      <Navbar/>
      <Generator/>
    </div>
  )
}
