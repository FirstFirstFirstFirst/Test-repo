import React, { useState } from 'react';
import A from '../components/A';
import { create } from 'zustand';
const Yzustand = () => {
    const num = useNumStore(state => state.num);
    const setNum = useNumStore(state => state.setNum);
    const secNum = useNumStore(state => state.secNum)
    return (
        <div className='flex flex-column items-center justify-center p-10'>
            <div>
                <div className='border border-red-500 p-2 m-4'>
                    <input placeholder="Input here" type="number" onChange={ (e) => setNum(+e.target.value)} />
                </div>
                {/* <div className='border border-blue-500 p-2 m-4'>
                    <button onClick = {} >
                        Set Number
                    </button>
                </div> */}
                <div className='border border-green-500 p-2 m-4'>
                    A number = {num}
                </div>
                <div className='border border-green-500 p-2 m-4'>
                    Set from C = {secNum}
                </div>
                
            </div>
            <div>
                <A />
            </div>
        </div>
    )
}

type Store = {
    num: number;
    secNum: number,
    setNum: (numInput: number) => void,
    // setSecNum: (numInput: number) => React.MouseEventHandler<HTMLButtonElement> | undefined,
    setSecNum: Function;
}

// const store = (set: Function) => (
//     {
//      num: 10,
//      setter: (numInput:number) => set( (state : Function) => ( {numInput} )),
//     }
// )

export const useNumStore = create<Store>( (set: Function) => ({
    num: 0,
    secNum: 0,
    setNum: (numInput: number) => {
        set((state : any) => ({
            num: numInput
        }))
    },
    setSecNum: (numInput: number) => {
        set((state: any) => ({
            secNum: numInput
        }))
    },
}));





export default Yzustand;