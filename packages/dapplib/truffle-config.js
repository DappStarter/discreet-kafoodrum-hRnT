require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remember history grid kiwi suit tornado'; 
let testAccounts = [
"0x8128244b54b910c8b98d990f9bae43b6e4a5029b8dc7cb72dd7506201d076988",
"0x3e055037b51cb1458854d9efbbbc7810530ff30baf8dbd52ee02b25e0c5a26ec",
"0xff8e24e75e0d49ab629be6d91652b7d3084ad16208d971af23a20a0f2082e71e",
"0x108d9b65295b1f1295818efbe62f6c3032c851feeaeaf7ec99d104e50e8eacde",
"0x740f1a17092356e3d104e294aa746a8205704b5bc981b2ad42e141dd9da7b771",
"0x27a03c2f9402f9c733384add4631d80a45eb71982f0c52b572f40f98453476df",
"0xf03542694139ee6a1de339f7832afdd0a181748527c92ea3e8e4e265cc596724",
"0x2591fef859d80b712271cce99ab959861a5b510e6ecadbe2fa8f96f0b9ed20c7",
"0xca72c4f53e083daea41373b8de5fb130969db0c5d19883b6ed748f69f191b3c4",
"0x05ea1330cc9be414154dc4c17d43868a618dd7f00181dca917c2c4b34b4d2996"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

