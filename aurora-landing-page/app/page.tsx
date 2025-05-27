import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-black'>
      <div className='text-center space-y-5 max-w-2xl z-10'>
        <p className='py-1 px-2 bg-zinc-900/40 backdrop-blur-sm font-light
        rounded-full text-white inline-block'>Join 10,000+ Users</p>
        <div className='space-y-3'>
          <h1 className='text-7xl tracking-tight bg-clip-text bg-gradient-to-r
          from-pink-500 via-purple-400 to-blue-500 text-transparent h-20
          font-semibold'>Modern UI Library</h1>
          <h3 className='text-7xl tracking-tight bg-clip-text bg-gradient-to-r
          from-pink-500 via-purple-400 to-blue-500 text-transparent h-20
          font-semibold'>For Web Developers</h3>

          <p className='text-gray-400 text-lg text-pretty'>
            100+ <span className='bg-clip-text bg-gradient-to-r
          from-purple-400 to-rose-500 text-transparent h-20
          font-semibold'>free</span> and <span className='bg-clip-text bg-gradient-to-r
          to-rose-500 from-purple-400  text-transparent h-20
          font-semibold'>open-source</span> modern ui components made with React,
            TailwindCSS and Framer Motion. Perfect for easily designing modern web apps.
          </p>

          <div className='space-x-3'>
            <Button variant="default" className="rounded-lg">Browse Components</Button>
            <Button variant="secondary" className="rounded-lg">Unlock All Access</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
