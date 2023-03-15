import { GetServerSideProps } from 'next';

interface OrderbookData {
  bids: [[string,string]],
  asks: [[string,string]],
}

interface Props {
  data: OrderbookData;
}

const Orderbook: React.FC<Props> = ({ data }) => {
    console.log(data.asks);
    return (
      <div>
        hey
      </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch('https://api.kucoin.com/api/v1/market/orderbook/level2_20?symbol=BTC-USDT');
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};

export default Orderbook;
