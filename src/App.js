import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts)
    setAccount(accounts[0]);
  };

  const getBalance = async (address) => {
    web3.eth.getBalance(address)
    .then((result)=>{
      setBalance(result)
    })
  }


  return (
    <div className="App">      
      <button className="metaConnect" onClick={()=>{connectWallet()}}>
        connect to MetaMask
      </button>
      <button className="metaConnect" onClick={()=>{getBalance(account)}}>
        getBalance
      </button>
      {/* 연결된 계정 주소를 화면에 출력합니다 */}
      <div className="userInfo">주소: {account}</div>  
      <div className="userInfo">Balance: {balance}</div>  
    </div>
  );
}

export default App;