import * as React from 'react';

interface Props {
  mins: number;
  avgPrice: number;
  
}

const BinanceAPI: React.FunctionComponent<Props> = ({ mins, avgPrice}) => {
  return (
    <div>
      <h1>Average BTC/USDT Price on Binance</h1>
      <p>{mins}</p>
      <p>{avgPrice}</p>
    </div>
  );
};

BinanceAPI.getInitialProps = async () => {
// BinanceAPI = async () => {
  const res = await fetch('https://api1.binance.com/api/v3/avgPrice?symbol=BTCUSDT');
  const json = await res.json();
  return { 
    
    avgPrice: json.price,
    mins: json.mins
    
    
  };

};

export default BinanceAPI;