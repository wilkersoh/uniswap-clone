import React, { useState, useEffect } from 'react';
import { contractABI, contractAddress } from '../libs/constant'
import { ethers } from 'ethers';

export const TransactionContext = React.createContext();

let eth;

if (typeof window !== 'undefined') {
  eth = window.ethereum;
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(eth)
  const signer = provider.getSigner();
  console.log('signer::  :>> ', signer);
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionContract;
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: '', 
    amount: ''
  });

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  const connectWallet = async (metamask = eth) => {
    try {
      if(!metamask) return alert('Please install metamask')
  
      const accounts = await metamask.request({ method: 'eth_requestAccounts' });
      
      setCurrentAccount( accounts[0] )
    } catch (error) {
      console.error(error);
      throw new Error('No Ethereum Object')
    }  
  }

  const checkIfWalletIsConnected = async (metamask = eth ) => {
    try {
      if(!metamask) return alert('Please install metamask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' });

      if( accounts.length ) setCurrentAccount( accounts[0] );
    } catch (error) {
      console.error(error)
      throw new Error('No Ethereum Object')
    }
  }

  const sendTransaction = async (metamask = eth, connectedAccount = currentAccount) => {
    try {
      if(!metamask) return alert('Please install metamask')
      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract()

      const parsedAmount = ethers.utils.parseEther(amount);

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: '0x7EF40', // S20000 Gwei
            value: parsedAmount._hex
          }
        ]
      })

      const transactionHash = await transactionContract.publishTransaction( 
        addressTo, 
        parsedAmount, 
        `Transferring ETH ${parsedAmount} to ${addressTo}`,
        `TRANSFER`  // 這些是 Transactions.sol 裡的 params
      )

      setIsLoading(true)
      
      await transactionHash.wait();

      // DB
      // await saveTransaction(
      //   transactionHash.hash,
      //   amount,
      //   connectedAccount,
      //   addressTo
      // )

      setIsLoading(false)

    } catch (error) {
      console.error(error); 
    }
  }

  const handleChange = (e, name) => {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
  }

  return (
    <TransactionContext.Provider
      value={{ 
        currentAccount, 
        connectWallet,
        sendTransaction,
        handleChange,
        formData
      }}
    >
      { children }
    </TransactionContext.Provider>
  )
}



