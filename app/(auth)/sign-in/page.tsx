import React from 'react'
import Image from 'next/image'

type Props = {}

const Page = (props: Props) => {
  return (
    <section className='flex justify-center items-center w-full h-screen'>
      <div className='flex w-3/4 h-3/4 bg-bankGradient rounded-md justify-between'>
        <div className='flex justify-center align-baseline'>
          {/* Image will be there */}
          hello hello
        </div>
        <div>
          
        </div>
      </div>
    </section>


  )
}

export default Page