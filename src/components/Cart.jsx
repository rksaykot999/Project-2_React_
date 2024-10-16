import React, { useState } from 'react'
import User from './Users'

export default function Cart() {
    const [value, setValue] = useState(10)

    const handleIncrease =() =>{
        setValue(value+1)
    }
     const handleDecrease =() =>{
        setValue(value-1)
    }
    
  return (
    <div>
      <h1 className='text-2xl'>This is cart component</h1>
      <h2 className='text-2xl mt-2'>The number is {value} </h2>
      <div className='mt-4'>
      <button onClick={handleIncrease} className='btn btn-primary text-white'>Increase</button>
      <button onClick={handleDecrease} className='btn btn-secondary ml-8 text-white'>Decrease</button>
      </div>
    </div>
  )
}
