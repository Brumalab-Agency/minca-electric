import React from 'react'

export const Loading = () => {
  return (
    <div className='text-[34px] font-bold grid place-items-center bg-[#111] w-screen h-screen'>
      <img className='w-[300px] h-auto' src="/loader/Precarga web - Minca Electric.gif" alt="loading..."/>
    </div>
  )
}

export default Loading