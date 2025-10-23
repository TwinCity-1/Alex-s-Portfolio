import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { SiNextdotjs } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiElixir } from 'react-icons/si'
import { SiPhoenixframework } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiTrpc } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiPrisma } from 'react-icons/si'
import { SiFlutter } from 'react-icons/si'
import { SiKotlin } from 'react-icons/si'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
          <SiNextdotjs className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4 '>
          <RiReactjsFill className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTypescript className='text-7xl text-blue-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss className='text-7xl text-cyan-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiJavascript className='text-7xl text-yellow-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMysql className='text-7xl text-blue-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiElixir className='text-7xl text-purple-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPhoenixframework className='text-7xl text-orange-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className='text-7xl text-red-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className='text-7xl text-blue-500' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTrpc className='text-7xl text-blue-600' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPostgresql className='text-7xl text-blue-700' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPrisma className='text-7xl text-gray-800' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiFlutter className='text-7xl text-blue-400' />
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiKotlin className='text-7xl text-purple-600' />
        </div>
      </div>
    </div>
  )
}

export default Technologies