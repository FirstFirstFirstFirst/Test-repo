import { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api1.binance.com/api/v3/klines?interval=1h&symbol=BTCUSDT');
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  console.log(data);
  
  return (
   <div>
    <ul>
      {data?.map((item:any, index:number) => (
        <li key={index}>
          {Object.values(item).join(', ')}
        </li>
      ))}
    </ul>
   </div>
    
  );
}

export default Example;
