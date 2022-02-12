require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe stomach radar scrub equip inner kangaroo army gate'; 
let testAccounts = [
"0x1f93051bc7856964faaae1b5a40c811f914578ec65257cfeb51c619ab2e1b67f",
"0x831454b512fdba616431cd5a6916b9370a67bba0a974c62715e73cb22bd2bca3",
"0x945fac9f666c741e000e8064c70a53172cbca7aad07bf2e1215e12f1d1fed3cb",
"0xd77a04e514be4b921c9157fb61d637af14e54209dc1a760dce45f0975f0e9c6c",
"0x7ec46ae5572e10a2d6a7f2c2ea4da88110cbea384827bc61ce7f10c01ee2e544",
"0x4e5042c1956ced5bc812d0425f1b6da57dc4142b74dc9b6a313bdb9cc2090d34",
"0x77aa3aa7ed0a27a3a5252cfd9d12bffffb2b850c3224fa4db0341e579aaa2c8f",
"0x9efde93132d95d7d53cdd2cd31c755ccdf4ede6eca45e3b988452d1099a23c61",
"0x381ee9ca7f5fb410afab14451cca521ea62fb86cda5430c892ca7f980e64febf",
"0x15bc584d784c3230c2c3e56d35343e22cd980247d21e92ceca31690b217f8b49"
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

