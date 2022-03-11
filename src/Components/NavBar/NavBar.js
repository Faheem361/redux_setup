import React, { useEffect } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  metaMaskConnect,
} from "../../Redux/counter/actions";
import {
  increaseUserCounter,
  decreaseUserCounter,
} from "../../Redux/user/actions";

import "./navBar.css";
// const Web3Modal = window.Web3Modal.default();
export default function NavBar() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  let { result } = useSelector((state) => state.counter);
  let { acc } = useSelector((state) => state.counter);
  let { countUser } = useSelector((state) => state.user);
  console.log(result, "result");

  // const getAccount = async () => {
  //     if (acc == "No Wallet") {
  //         setBtTxt("No Wallet")
  //     }
  //     else if (acc == "Wrong Network") {
  //         setBtTxt("Wrong Network")
  //     } else {
  //         setBtTxt(acc);
  //     }
  // }
  // useEffect(() => {
  //     // setTimeout(() => {
  //     //     getAccount();
  //     // }, 1000);
  //     getAccount();
  // }, [acc]);

  const handleConnectWallet = () => {
    dispatch(metaMaskConnect());
  };
  const handleClickCountPlus = () => {
    dispatch(increaseCounter());
  };
  const handleClickCountMinus = () => {
    dispatch(decreaseCounter());
  };
  const handleUserCountPlus = () => {
    dispatch(increaseUserCounter());
  };
  const handleUserCountMinus = () => {
    dispatch(decreaseUserCounter());
  };
  return (
    <div>
      <Navbar className="mynavbg">
        <div className="container">
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button className="mybutn" onClick={handleConnectWallet}>
                {acc}
              </Button>
              <Button className="mybutn" onClick={handleClickCountPlus}>
                Count +
              </Button>
              <Button className="mybutn2" onClick={handleClickCountMinus}>
                Count -
              </Button>
              <span>{count}</span>

              <Button className="mybutn" onClick={handleUserCountPlus}>
                User Count +
              </Button>
              <Button className="mybutn2" onClick={handleUserCountMinus}>
                User Count -
              </Button>
              <span>User counter {countUser}</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
