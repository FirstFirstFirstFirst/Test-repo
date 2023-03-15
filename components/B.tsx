import React from 'react'
import C from "../components/C";


const B = () => {

    return (
        <div>
            <div className=' bg-blue-500 text-xl text-red-50'>
                <div className='p-4 m-4'>
                    Hello I'm component B
                    
                </div>
            </div>
            <div>
                <C />
            </div>
        </div>
    )
}

export default B