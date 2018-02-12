import sketch1 from './images/sketch1.jpg';

const DeepLearningImage = 'https://cdn-images-1.medium.com/max/2000/1*1mpE6fsq5LNxH31xeTWi5w.jpeg';
const BlockchainImage = 'https://kryptomoney.com/wp-content/uploads/2017/11/KryptoMoney.com-Blockchain-Technology-in-Crime.jpeg';
const EnergyWater = 'https://energy.gov/sites/prod/files/2015/09/f26/Energy%20Water%20Flow%20Diagram.png';
const SongVisualizer = 'https://briancort.com/wp/wp-content/uploads/2017/02/songViz.jpg';
const CriticalMaterials = 'https://www.llnl.gov/sites/default/files/media/2017/10/criticalstrategies300px.jpg';
const Music = 'https://www.martinguitar.com/media/4887/33-martin-generic-images.jpg';


const projects = [{
  id: '1',
  title: 'Deep Learning',
  image: DeepLearningImage,
  desc: 'I trained a Jetson TX1 to recongnize hand written images',

}, {
  id: '2',
  title: 'Blockchain',
  image: BlockchainImage,
  desc: 'I worked with Hyperledger to build a permissioned distributed ledger',
}, {
  id: '3',
  title: 'Energy-Water Nexus',
  image: EnergyWater,
  desc: 'I created the energy-water flow diagram featured on Wikipedia',
}, {
  id: '4',
  title: 'Song Visualizer',
  image: SongVisualizer,
  desc: 'I built a song visualizer using the Million Song Database',
}, {
  id: '6',
  title: 'Critical Materials',
  image: CriticalMaterials,
  desc: 'Critical Materials are used in many high tech applications. I helped write the Department of Energys 2018 update to the Critical Materials Strategy',
}, {
  id: '5',
  title: 'Sketches',
  image: sketch1,
  desc: 'I enjoy sketching. Here is some of my work',
}, {
  id: '7',
  title: 'Music',
  image: Music,
  desc: 'I enjoy playing and writing music. Below are links to some of my music',
},


];

export default projects;
