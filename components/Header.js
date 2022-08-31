import { ConnectButton } from "web3uikit"

export default function Header() {
  return (
    <div className="border-b-2">
      <h2>Decentralized lottery</h2>
      <ConnectButton moralisAuth={false} />
    </div>
  )
}
