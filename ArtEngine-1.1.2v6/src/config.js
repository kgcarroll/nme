const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// Cross platform metadata
const namePrefix = "NME";
const description = "We are the NME.";
const baseUri = "ipfs://NewUriToReplace";

// Metadata for Solana
const solanaMetadata = {
  symbol: "NME",
  seller_fee_basis_points: 1000, // Define royalty % from secondary market sales. (1000 = 10%)
  external_url: "https://www.yourworstnme.com/",
  creators: [
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 40, }, // NME Project Wallet
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 10, }, // Blind Wallet
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 10, }, // kevin.c Wallet
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 10, }, // meiling Wallet
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 10, }, // Okami Wallet
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 10, }, // imdiegc Wallet
    { address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC", share: 10, }  // FishinThemWhales Wallet
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: "Background" },
      { name: "Body" },
      { name: "Skin Accessory" },
      { name: "Eyes" },
      { name: "Mouth" },
      { name: "Clothing" },
      { name: "Hair" },
      { name: "Head Accessory" },
      { name: "Accessory" },
      { name: "Particle Overlay" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 750,
  height: 750,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  "collection": {
    "name": "NME beta",
    "family": "NME"
  },
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
