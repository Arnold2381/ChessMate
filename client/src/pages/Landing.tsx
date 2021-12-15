import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Homepage.css';
import Logo from '../logos/logo_home.svg';
import king from '../assets/king.svg';
import { ethers } from 'ethers';
import { useStateValue } from '../store/stateProvidet';
import Web3 from 'web3';
const Landing = () => {
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [defaultAccount, setDefaultAccount] = useState<any>(null);
  const [userBalance, setUserBalance] = useState<any>(null);
  const [connButtonText, setConnButtonText] = useState<any>(false);

  const history = useHistory();

  const [{ id, balance }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(defaultAccount, userBalance);

    dispatch({
      type: 'SET_USER',
      id: defaultAccount,
      balance: userBalance,
    });
  }, [defaultAccount, userBalance]);

  const connectWalletHandler = async () => {
    if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
      console.log('MetaMask Here!');

      await (window as any).ethereum
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
  const accountChangedHandler = async (newAccount: { toString: () => any }) => {
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
      <div className='ellipse'></div>
      <img src={Logo} className='logo' />
      {/* <div className='headline'>Play Like Never Before</div>
      <div
        className='submit'
        onClick={() => {
          connectWalletHandler();
        }}
      >
        <span className='submittext'>Play Now</span>
      </div> */}
      <div className='h-screen w-full flex items-center  justify-center'>
        <div className='flex items-center gap-36 px-40'>
          <div className='text-white'>
            <div className='my-auto'>
              <h1 className='text-7xl font-semibold'>Play like a king</h1>
              <p className='text-xl my-8 opacity-80'>
                ChessMate aims to increase the excitement of the chess game by
                making it more exciting and competitive with winner takes all
                matches.
                {defaultAccount}
              </p>
              <div className='mt-14'>
                <span
                  onClick={async () => {
                    await connectWalletHandler();
                    console.log(defaultAccount, userBalance);

                    history.push('/dash');
                  }}
                  className='rounded-xl transform  py-4 px-6 font-semibold cursor-pointer landingCTA text-lg'
                >
                  Start Playing
                </span>
              </div>
            </div>
          </div>

          <img src={king} className='' alt='' />
        </div>
      </div>
    </div>
  );
};
export default Landing;
