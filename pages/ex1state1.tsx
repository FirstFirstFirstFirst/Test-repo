import { useState } from "react"
import { useEffect } from "react";

function Example1() {
    interface Data {
        mins: Number,
        price: Number,
    }
    const [data, setData] = useState({mins: 0, price: 0});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            (async() => {
                const url = 'https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT';
                const res = await fetch(url);
                const {mins, price} = await res.json();
                setData({mins , price});
    
            })();
        }   catch(error){
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