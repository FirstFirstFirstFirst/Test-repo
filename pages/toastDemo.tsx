import React, { use } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react';

const toastDemo = () => {
    
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
    
    const [userInput, setUserInput] = useState("");
    const [answer, setAnswer] = useState(0);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    

    useEffect(() => {
        setAnswer(a+b);
    }, [a,b])
    
    return (
    <div>
        <div>
            
            <div className='flex py-5'>
                Question = {a} + {b}
            </div>
            <button className='border rounded-xl border-red mx-10 p-4'
                onClick = { () => {
                    setA(getRandomInt(5));
                    setB(getRandomInt(5));
                }}
            >
                re-Question
            </button>
        </div>
        
        <input type="number" className='bg-red-400' onChange={(e) => {
            setUserInput(e.target.value);
        }} />

        <button className='border rounded-xl border-red mx-10 p-4'
            onClick={ () => {
                
                if (+userInput == +answer) {
                    toast.success("Good job")
                }
                else {
                    toast.error("Keep it up");
                }
                
            }}
        > 
            <div>
                check
            </div>
        </button>
        
        <div>
            Show user input : {userInput}
            Show answer : {answer}
        </div>

        <ToastContainer
            position ='top-right'
            autoClose =  {1000}
            theme = "dark"
        />

    </div>
  )
}

export default toastDemo;
