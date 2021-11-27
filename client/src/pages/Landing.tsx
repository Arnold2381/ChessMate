import React from 'react';
import { useState } from 'react';
import '../css/Homepage.css';
import Logo from '../logos/logo_home.svg';
import King from '../logos/kings.svg';
import { ethers } from 'ethers';

const Landing = () => {
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [defaultAccount, setDefaultAccount] = useState<any>(null);
  const [userBalance, setUserBalance] = useState<any>(null);
  const [connButtonText, setConnButtonText] = useState<any>(false);

  const connectWalletHandler = () => {
    if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
      console.log('MetaMask Here!');

      (window as any).ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result: any[]) => {
          accountChangedHandler(result[0]);
          setConnButtonText(true);
          getAccountBalance(result[0]);
          console.log(defaultAccount);
          console.log(userBalance);
        })
        .catch((error: { message: any }) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension to interact');
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount: { toString: () => any }) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account: any) => {
    (window as any).ethereum
      .request({ method: 'eth_getBalance', params: [account, 'latest'] })
      .then((balance: ethers.BigNumberish) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error: { message: any }) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  (window as any).ethereum.on('accountsChanged', accountChangedHandler);

  (window as any).ethereum.on('chainChanged', chainChangedHandler);
  return (
    <div>
      <div className="ellipse"></div>
      <img src={Logo} className="logo" />
      <div className="headline">Play Like Never Before</div>
      <div
        className="submit"
        onClick={() => {
          connectWalletHandler();
        }}
      >
        <span className="submittext">Play Now</span>
      </div>

      <div className="card">
        <img src={King} className="king"></img>
      </div>
    </div>
  );
};
export default Landing;
