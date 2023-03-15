import { GetServerSideProps } from "next";
import { useState } from "react"
// import { useEffect } from "react";

function hey() {
    const [data, setData] = useState({bids: [], asks: []});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const getServerSideProps: GetServerSideProps = async() => {
      try {
        const url = 'https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol=BTC-USDT';
        const res = await fetch(url);
        const {bids, asks} = await res.json();
        
        setData({bids, asks});
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
      console.log(data);
      
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
      console.log(data);
      return (
          <div>
              <p>hye</p>
              
          </div>
          
      )

    }
}
export default hey;