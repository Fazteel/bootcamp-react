import React from 'react'
import CekKhodam from '../components/cekKhodam'
import Clock from '../components/Clock'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <div className='w-full my-24 flex flex-col justify-center'>
        <h1 className='text-center font-bold'>Home Page</h1>    
      <Clock />
      <Counter/>
      <CekKhodam/>
    </div>
  )
}
