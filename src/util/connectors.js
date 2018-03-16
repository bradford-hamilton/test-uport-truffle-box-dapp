import { Connect, SimpleSigner } from 'uport-connect';

export let uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: '2oygNhwkQNS7xykffmJC7ctQ351y7Ygf4if',
  network: 'rinkeby or ropsten or kovan',
  signer: SimpleSigner('such a neat key'),
});

export const web3 = uport.getWeb3();
