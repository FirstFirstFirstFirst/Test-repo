import { useState, useEffect } from 'react';

function Example2() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const res = await fetch('https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT');
    //     const data = await res.json();
    //     setData(data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // fetchData();


    (async () => {
      try {
        const res = await fetch('https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT');
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();


  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  
  return (
    <div>
      {data.map((item:number | string, index:number) => (
        <div key={index}>
          {item.map((innerItem:number | string, innerIndex:number) => (
            <p key={innerIndex}>
              {innerItem}
            </p>
          ))}
        <br /></div>
      ))}
    </div>

  );
}

export default Example2;
