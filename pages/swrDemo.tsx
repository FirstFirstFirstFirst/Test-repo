import React from 'react'
import useSWR from 'swr'


const fetcher = (url: string) => fetch(url).then(res => res.json());

const swrDemo = () => {

    const URL = 'https://api.github.com/repos/vercel/swr';
    const { data, error, isLoading } = useSWR(URL, fetcher);

    if (error) return "Error";
    if (isLoading) return "Still loading....";


    return (
        <div className='bg-red-500'>
            swrDemo {data.name} {data.full_name}
            <div>
            </div>
        </div>
    )
}

export default swrDemo;