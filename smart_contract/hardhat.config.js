require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Oal25wUmv3jnP2j3OaOckKlI7agnwRZ0', // alchemyapi.io -> the app -> view key
      accounts: [
        'd327d072f35f91bc2173de63a6b16e5723a8a371e89da3d1b9d17f31a8809027'  // private key in metamask -> account details -> export private key (must make sure that have eth in that wallet )
      ]
    }
  },
};
