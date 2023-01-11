import { useState, useEffect } from "react";

function Example1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(()=> {
        (async()=> {
            try {
                const url = 'https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol=BTC-USDT';
                const res = await fetch(url); 
                const data = await res.json();
                setData(data);
                
            }   catch(error) {
                setError(error);
            }   finally {
                setLoading(false);
            }d


        })()
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
            hello wat zup
        </div>
    )
}
export default Example1;
