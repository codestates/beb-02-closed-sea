//react-bootstrap
import ListGroup from 'react-bootstrap/ListGroup'


export default function ConnectWallet({connectWallet}) {
    return (
        <div>
            <div className="walletListGroup">
                <br /><br />
                <h1>Connect your wallet</h1>
                <p>Connect with one of our available wallet providers or create a new one.</p>
            </div>

            <ListGroup className="walletListGroup">
                <ListGroup.Item action onClick={() => { connectWallet() }}>
                    <img src="metamask-alternative.webp" style={{ width: "1.5rem" }} alt="metamaskimg" />&nbsp;&nbsp;&nbsp;<b>MetaMask</b>
                </ListGroup.Item>
                <ListGroup.Item action onClick={() => { connectWallet() }}>
                    <img src="kaikas-alternative.png" style={{ width: "1.5rem" }} alt="kaikasimg" />&nbsp;&nbsp;&nbsp;<b>Kaikas</b>
                </ListGroup.Item>
            </ListGroup>

            <br /><br />
        </div>
    )
}


