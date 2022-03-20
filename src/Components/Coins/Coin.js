import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, FormControl, Spinner } from "react-bootstrap";
import "./Coin.css";
import { useNavigate } from "react-router-dom";
import { CoinList } from "./../../config/api";
import { CryptoState } from "../../CryptoContext";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function Coin(hide) {
  const { currency, symbol } = CryptoState();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="Wallet task">
      <div className="WalletNavbar d-flex justify-content-between">
        <h2 className="text-center"> Crypto Prices by MarketCap</h2>
        <Form Form className="d-flex">
          <FormControl
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search A Coin"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>

      <div className="table-top">
        <Table>
          <thead>
            <tr className="WalletTableHeader">
              <th>Coin</th>
              <th>Price</th>
              <th>24hr Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <tbody className="WalletTableAddresses">
              {handleSearch().map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <tr
                    onClick={() => Navigate(`/coins/${row.id}`)}
                    key={row.name}
                  >
                    <td style={{ paddingLeft: "20" }}>
                      {" "}
                      <img src={row?.image} alt={row.name} height="50" />
                      <span>{row.name}</span>
                    </td>
                    <td>
                      {symbol} {numberWithCommas(row.current_price.toFixed(2))}
                    </td>
                    <td>
                      {" "}
                      <span
                        style={{
                          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        }}
                      >
                        {" "}
                        {profit && "+"}
                        {row?.price_change_percentage_24h?.toFixed(2)}
                      </span>
                    </td>
                    <td>{symbol} {numberWithCommas(row.market_cap.toString().slice(0, -6))} M</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </Table>
      </div>
    </div>
  );
}
//
//               <tbody className="WalletTableAddresses">

// <tr>
//               <td>0x85f5e5E7bc3485b79eD010f48814644519989a17</td>
//               <td>0.06 ETH</td>
//               <td>Noah’s Wallet</td>
//               <td className="Green">SUCCESS: Block #14116094</td>
//           </tr>

//           </tbody>
