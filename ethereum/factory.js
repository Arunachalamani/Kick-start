import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x1F623473D89E61833FC5E3275F6Bc1f205674D83'
);

export default instance;
