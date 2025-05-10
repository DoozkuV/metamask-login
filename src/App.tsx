import { DiscoverWalletProviders } from "./components/WalletProviders";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4">
      <header className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
           Wallet Connector
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Connect to your favorite Ethereum wallet using the new EIP-6963 standard
        </p>
      </header>
      
      <main className="max-w-4xl mx-auto">
        <DiscoverWalletProviders />
      </main>
      
      <footer className="max-w-4xl mx-auto mt-20 text-center text-gray-500 text-sm">
        <p>Built with EIP-6963 wallet detection standard</p>
      </footer>
    </div>
  );
}

export default App;

