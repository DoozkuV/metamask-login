import { useState } from "react"
import { useSyncProviders } from "../hooks/useSyncProviders"
import { formatAddress } from "../utils"

export const DiscoverWalletProviders = () => {
	const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()
	const [userAccount, setUserAccount] = useState<string>("")
	const providers = useSyncProviders();

	const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
		const accounts: string[] | undefined =
			await (
				providerWithInfo.provider
					.request({ method: "eth_requestAccounts" })
					.catch(console.error)
			) as string[] | undefined;

		if (accounts?.[0]) {
			setSelectedWallet(providerWithInfo)
			setUserAccount(accounts?.[0])
		}
	}

	return (
		<div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-4 text-purple-400">Wallets Detected:</h2>
      <div className="grid grid-cols-3 gap-3 mb-6">
				{
					providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (
            <button 
              key={provider.info.uuid} 
              onClick={() => handleConnect(provider)}
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-all duration-200 border border-gray-700 hover:border-purple-500 flex items-center justify-center"
            >
							<img 
                src={provider.info.icon} 
                alt={provider.info.name} 
                className="w-10 h-10"
              />
            </button>
					)) :
						<div className="col-span-3 text-center py-4 bg-gray-800 rounded-lg border border-gray-700">
							No Announced Wallet Providers
          </div>
				}
      </div>
			<hr className="border-gray-700 my-6" />

      <h2 className="text-2xl font-bold mb-4 text-purple-400">{userAccount ? "" : "No "} Wallet Selected</h2>
			{userAccount &&
        <div className="bg-gray-800 p-4 rounded-lg border border-purple-500">
            <div className="flex items-center space-x-4">
              <img 
                src={selectedWallet?.info.icon} 
                alt={selectedWallet?.info.name} 
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <div className="font-semibold text-lg">{selectedWallet?.info.name}</div>
                <div className="text-green-400 text-sm font-mono">({formatAddress(userAccount)})</div>
              </div>
            </div>
        </div>
			}
		</div>
	);
}

