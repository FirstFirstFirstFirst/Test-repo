import React from 'react'
import B from "../components/B";


const A = () => {
    
    return (
        <div>
            <div className=' bg-red-500 text-xl text-red-50'>
                <div className='p-4 m-4'>
                    Hello I'm component A    
                </div>
            </div>
            <div>
                <B />
            </div>
        </div>
        
    )
}

export default A;