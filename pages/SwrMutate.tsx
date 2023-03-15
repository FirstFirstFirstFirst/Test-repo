import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json());

const SwrMutate = () => {
    const options = {
        revalidateOnFocus: false,
        refreshInterval: 0,
    }
    const { data, error, isLoading, mutate } = useSWR(`https://randomuser.me/api`, fetcher, options);
    
    if (error) return "Error";
    if (isLoading) return "Still loading....";
    

    return (
        <div>
            SwrMutate {JSON.stringify(data.results[0].gender)}
            <div>
                <button className='border-2 border-black mt-4 p-3 rounded-full bg-red-300' onClick = {() => {
                    const gender = data.results[0].gender.toUpperCase();
                    mutate({...data, results: [{ gender }]})
                }}>
                    Mutate
                </button>
            </div>
        </div>
    )
}

export default SwrMutate;