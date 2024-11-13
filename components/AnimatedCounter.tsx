"use client"

import React from 'react'
import {formatAmount} from '../lib/utils' ;
import CountUp from 'react-countup' ;

type Props = {}

const AnimatedCounter = ({amount}:{amount : number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            end={amount}
            decimal="," 
            prefix='&#8377;'
        />
    </div>
  )
}

export default AnimatedCounter ;