import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useState, useEffect } from 'react'
type StateType = {
    bears: number;
    increase: Function;
    users: {};
    fetchUser: Function;

}

// === Create store ===
const store = persist( 
    (set: Function) => (
    {
     bears: 10,
     increase: () => set( (state : StateType) => ( {bears : state.bears+1} )),
     users: {},
     mesg:  "",
     setMesg: (mesg: string) => set({ mesg }),
     fetchUser: async (url: string) => {
        const res = await fetch(url);
        set({ users: (await res.json()).results[0] });
    },
    }), {
        name: 'bear-storage'
    }
)

const useBearStore = create(store)

export default function Zustand() {

   // ===  Use store ===
   const bears = useBearStore(state => state.bears);
   const increase = useBearStore(state => state.increase);
   const users = useBearStore(state => state.users)
   const fetchUser = useBearStore(state => state.fetchUser)
   const mesg = useBearStore(state => state.mesg)
   const setMesg = useBearStore(state => state.setMesg)

   const [isHydated, setIsHydrated] = useState(false)


   useEffect(() => {
       setIsHydrated(true)
   }, []);

   return (

       <>
            {isHydated ?
                <div>
                    <h1>Zustand demo</h1>
                    <h2>Use store {bears} </h2>
                    <button className='border border-red-400 p-4' onClick={increase} >
                        Click to increase bears
                    </button>


                    <button className='border-2 border-black'
                    onClick={() => {
                        fetchUser(`https://randomuser.me/api/`);
                        JSON.stringify(users) !== '{}' && console.log("Users: ", users);
                    }}
                    >
                    fetchUser
                    </button>


                    Input: 
                    <input
                    className='border-2 border-black'
                    type="text"
                    value={mesg}
                    onChange={(e) => {
                        const message = e.target.value
                        console.log("value: ", message)
                        setMesg(message);
                    }} />
                </div> : <div>Loading...</div>}
       </>
   )
}
