import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, use, useEffect, useState } from "react";

function Example3() {
    const [data, setData] = useState({bids: {}, asks: {}});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async()=> {
            try {
                const url = "https://api1.binance.com/api/v3/depth?symbol=BTCUSDT";
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
            }   catch(error) {
                setError(error);
            }   finally {
                setLoading(false);
            }
        })();  
    }, []);

    if(loading) {
        return <div>loading</div>
    };

    if(error) {
        return <div>{error.message}</div>
    };
    
    return (
        <div>
            <div>
            {data?.bids.map((item: { [x: string]: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: string | number) => (
                <div key = {index[index]}>
                    {item[index]}
                </div>
                ))}
            </div>

            <div>
            {data?.asks.map((item: { [x: string]: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: string | number) => (
                <div key = {index[index]}>
                    {item[index]}
                </div>
                ))}
            </div>
        </div>
    )
}



export default Example3;