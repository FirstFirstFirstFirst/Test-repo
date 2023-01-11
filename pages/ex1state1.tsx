import { useState } from "react"
import { useEffect } from "react";


function Example1() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            (async() => {
                const url = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
    
            })();
        }   catch(error) {
            setError(error);
        }   finally {
            setLoading(false);
        }

    }, []);

    if (loading) {
        return (
            <div>wait a sec</div>
        )
    }

    if (error) {
        return (
            <div>{error.message}</div>
        )
    }

    
    return (
        <div>
           <p>{data?.mins}</p>
           <p>{data?.price}</p>
        </div>
        
    )

}
export default Example1;