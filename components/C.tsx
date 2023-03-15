import React from 'react'
import { useNumStore } from '../pages/Yzustand';

const C = () => {
    const num = useNumStore(state => state.num);
    const setSecNum = useNumStore(state => state.setSecNum);
    
    return (
        <div>
            <div className=' bg-yellow-500 text-xl text-red-50'>
                <div className='p-4 m-4'>
                    Hello I'm component C
                </div>
            </div>
            <div className='border-gray-400 border p-4 m-4 text-xl'>
                <button onClick = {() => setSecNum(num)}>
                    Button set number from C
                </button>
            </div>
            <div className='border border-green-500 p-2 m-4'>
                    Component C number = {num}
            </div>
            
        </div>
    )
}

export default C