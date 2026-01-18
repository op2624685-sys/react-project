import React from 'react'
import { House, CirclePlus, History } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex w-full justify-around text-xl items-center h-[8vh] text-100xl'>
      <button  id="history" className='bg-amber-50 text-black uppercase font-bold px-3 py-3 rounded'><House/></button>
      <button id="addtodo" className='bg-amber-50 text-black uppercase font-bold px-3 py-3 rounded'><CirclePlus /></button>
      <button id="history" className='bg-amber-50 text-black uppercase font-bold px-3 py-3 rounded'><History /></button>
    </div>
  )
}

export default Navbar
