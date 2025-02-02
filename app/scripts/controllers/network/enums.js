// export const ROPSTEN = 'ropsten'
// export const RINKEBY = 'rinkeby'
// export const KOVAN = 'kovan'
export const MAINNET = 'wanchain'
export const MAINNETCHINA = 'wanchainchina'
// export const GOERLI = 'goerli'
export const LOCALHOST = 'localhost'
export const TESTNET = 'wanchaintestnet'

export const MAINNET_NETWORK_ID = '1'
export const TESTNET_NETWORK_ID = '3'
// export const ROPSTEN_NETWORK_ID = '3'
// export const RINKEBY_NETWORK_ID = '4'
// export const GOERLI_NETWORK_ID = '5'
// export const KOVAN_NETWORK_ID = '42'

export const MAINNET_CHAIN_ID = '0x1'
export const TESTNET_CHAIN_ID = '0x3'
// export const ROPSTEN_CHAIN_ID = '0x3'
// export const RINKEBY_CHAIN_ID = '0x4'
// export const GOERLI_CHAIN_ID = '0x5'
// export const KOVAN_CHAIN_ID = '0x2a'

// export const ROPSTEN_DISPLAY_NAME = 'Ropsten'
// export const RINKEBY_DISPLAY_NAME = 'Rinkeby'
// export const KOVAN_DISPLAY_NAME = 'Kovan'
// export const MAINNET_DISPLAY_NAME = 'Main Ethereum Network'
// export const GOERLI_DISPLAY_NAME = 'Goerli'
export const MAINNET_DISPLAY_NAME = 'Mainnet Global'
export const TESTNET_DISPLAY_NAME = 'Testnet Global'

export const MAINNET_CHINA_DISPLAY_NAME = 'Mainnet China'

export const INFURA_PROVIDER_TYPES = [
  // ROPSTEN,
  // RINKEBY,
  // KOVAN,
  // MAINNET,
  // GOERLI,
  // MAINNET,
  // TESTNET
]

export const NETWORK_TYPE_TO_ID_MAP = {
  // [ROPSTEN]: { networkId: ROPSTEN_NETWORK_ID, chainId: ROPSTEN_CHAIN_ID },
  // [RINKEBY]: { networkId: RINKEBY_NETWORK_ID, chainId: RINKEBY_CHAIN_ID },
  // [KOVAN]: { networkId: KOVAN_NETWORK_ID, chainId: KOVAN_CHAIN_ID },
  // [GOERLI]: { networkId: GOERLI_NETWORK_ID, chainId: GOERLI_CHAIN_ID },
  [MAINNET]: { networkId: MAINNET_NETWORK_ID, chainId: MAINNET_CHAIN_ID },
  [TESTNET]: { networkId: TESTNET_NETWORK_ID, chainId: TESTNET_CHAIN_ID },
  [MAINNETCHINA]: { networkId: MAINNET_NETWORK_ID, chainId: MAINNET_CHAIN_ID },
}

export const NETWORK_TO_NAME_MAP = {
  // [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  // [RINKEBY]: RINKEBY_DISPLAY_NAME,
  // [KOVAN]: KOVAN_DISPLAY_NAME,
  // [MAINNET]: MAINNET_DISPLAY_NAME,
  // [GOERLI]: GOERLI_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [TESTNET]: TESTNET_DISPLAY_NAME,
  [MAINNETCHINA]: MAINNET_CHINA_DISPLAY_NAME,

  // [ROPSTEN_NETWORK_ID]: ROPSTEN_DISPLAY_NAME,
  // [RINKEBY_NETWORK_ID]: RINKEBY_DISPLAY_NAME,
  // [KOVAN_NETWORK_ID]: KOVAN_DISPLAY_NAME,
  // [GOERLI_NETWORK_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_NETWORK_ID]: MAINNET_DISPLAY_NAME,
  [TESTNET_NETWORK_ID]: TESTNET_DISPLAY_NAME,

  // [ROPSTEN_CHAIN_ID]: ROPSTEN_DISPLAY_NAME,
  // [RINKEBY_CHAIN_ID]: RINKEBY_DISPLAY_NAME,
  // [KOVAN_CHAIN_ID]: KOVAN_DISPLAY_NAME,
  // [GOERLI_CHAIN_ID]: GOERLI_DISPLAY_NAME,
  [MAINNET_CHAIN_ID]: MAINNET_DISPLAY_NAME,
  [TESTNET_CHAIN_ID]: TESTNET_DISPLAY_NAME,
}
