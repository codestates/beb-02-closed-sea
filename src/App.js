import './App.css';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import erc721Abi from './erc721Abi';
import TokenList from "./components/TokenList";

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [newErc721addr, setNewErc721Addr] = useState();
  const [erc721list, setErc721list] = useState([]);  // 자신의 NFT 정보를 저장할 토큰

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
      .then((result) => {
        setBalance(result)
      })
  }

  const addNewErc721Token = async () => { 
    
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr);
    
    console.log("하하1",newErc721addr)
    console.log(tokenContract)
    
    const name = await tokenContract.methods.name().call()
    console.log("하하2",name)
	  const symbol = await tokenContract.methods.symbol().call();
    console.log("하하3",symbol)
	  const totalSupply = await tokenContract.methods.totalSupply().call();
    console.log("하하4",totalSupply)

    let arr = []
    for (let i=1; i <= totalSupply; i++){
      arr.push(i)
    }
    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call()
      if (String(tokenOwner).toLowerCase() === account) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call()
        setErc721list((prevState) => {
          return [...prevState, {name, symbol, tokenId, tokenURI}]
        })
        
      }
    }
    
  }

  return (
    <div className="App">
      <button className="metaConnect" onClick={() => { connectWallet() }}>
        connect to MetaMask
      </button>
      <button className="metaConnect" onClick={() => { getBalance(account) }}>
        getBalance
      </button>
      {/* 연결된 계정 주소를 화면에 출력합니다 */}
      <div className="userInfo">주소: {account}</div>
      <div className="userInfo">Balance: {balance}</div>

      <div className="newErc721">
        {/* // 입력받을 때마다 newErc721addr 갱신 */}
        <input type="text" onChange={(e) => { setNewErc721Addr(e.target.value);}}>
          
        </input>
        <button onClick={addNewErc721Token}>add new erc721</button>
      </div>

      <TokenList erc721list={erc721list} />

    </div>

  );
}

export default App;