import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import {
  tokenAddress,
  tokenAbi,
  flafelTokenAdd,
  flafeltokenAbi,
} from "../../Constants/Constants";
import { loadWeb3 } from "../Api/Api";
import Web3 from "web3";
import "./home.css";

export default function Home() {
  const [balance, setBalance] = useState(0);
  let [tokenBal, setTokenBal] = useState(0);
  const webSupply = new Web3("https://bsc-dataseed1.binance.org/");

  const getBalance = async () => {
    let acc = await loadWeb3();
    try {
      const web3 = window.web3;
      let tokenContractOf = new web3.eth.Contract(tokenAbi, tokenAddress);
      let myBalance = await tokenContractOf.methods.balanceOf(acc).call();
      let mintPrice = await tokenContractOf.methods.MinitngPrice().call();
      console.log("mintPrice get balance", mintPrice);
      myBalance = web3.utils.fromWei(myBalance);
      setBalance(myBalance);
    } catch (e) {
      console.log("Error :", e);
    }
  };
  const getContractBalance = async () => {
    let tokenContractOf = new webSupply.eth.Contract(
      flafeltokenAbi,
      flafelTokenAdd
    );
    let balanceoftoken = await tokenContractOf.methods
      .balanceOf("0xa972645F14e5F01D1aE1D05798a06B9069202623")
      .call();
    balanceoftoken = balanceoftoken / 1000000000;
    // balanceoftoken = parseFloat(balanceoftoken).toFixed(3);
    setTokenBal(balanceoftoken);
    // let mintPrice = await tokenContractOf.methods.MintingPrice().call();
    // console.log("mintPrice", mintPrice);
  };
  useEffect(() => {
    getBalance();
    getContractBalance();
  }, []);
  return (
    <div className="homeContainer">
      <NavBar />
      <div className="home">
        <div className="row">
          <div
            className="col d-flex"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div className="col-6">
              <h4>My Balance</h4>
            </div>
            <div className="col-6">
              <h4>{balance}</h4>
            </div>
          </div>
          <div
            className="col-12 "
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div className="col-6">
              <h4>My Token Balance &nbsp;</h4>
            </div>
            <div className="col-6">
              <h4>{tokenBal}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
