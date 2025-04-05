export interface CryptoCurrency {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  sparkline: string;
  rank: number;
}

export const cryptocurrencies: CryptoCurrency[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    logo: "https://ext.same-assets.com/2471043683/828357574.png",
    price: 83457.82,
    percentChange1h: 0.24,
    percentChange24h: 0.95,
    percentChange7d: 1.21,
    marketCap: 1655715276576,
    volume24h: 23775303215,
    circulatingSupply: 19830000,
    sparkline: "https://ext.same-assets.com/1396799218/3170366622.svg+xml",
    rank: 1
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    logo: "https://ext.same-assets.com/3794288839/855419534.png",
    price: 1981.82,
    percentChange1h: 1.93,
    percentChange24h: 4.73,
    percentChange7d: 4.00,
    marketCap: 239061230726,
    volume24h: 11632440823,
    circulatingSupply: 120620000,
    sparkline: "https://ext.same-assets.com/178968541/3745266943.svg+xml",
    rank: 2
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    logo: "https://ext.same-assets.com/248128107/2897784907.png",
    price: 0.9998,
    percentChange1h: 0.00,
    percentChange24h: 0.01,
    percentChange7d: 0.00,
    marketCap: 143423966872,
    volume24h: 55346902544,
    circulatingSupply: 143430000000,
    sparkline: "https://ext.same-assets.com/549241562/3067911821.svg+xml",
    rank: 3
  },
  {
    id: 4,
    name: "XRP",
    symbol: "XRP",
    logo: "https://ext.same-assets.com/3783011357/3201259854.png",
    price: 2.31,
    percentChange1h: 0.03,
    percentChange24h: 1.81,
    percentChange7d: 5.69,
    marketCap: 134265798466,
    volume24h: 3013654404,
    circulatingSupply: 58100000000,
    sparkline: "https://ext.same-assets.com/2285576603/3040008976.svg+xml",
    rank: 4
  },
  {
    id: 5,
    name: "BNB",
    symbol: "BNB",
    logo: "https://ext.same-assets.com/3712311156/1929177387.png",
    price: 615.93,
    percentChange1h: 0.35,
    percentChange24h: 3.01,
    percentChange7d: 10.12,
    marketCap: 87754489270,
    volume24h: 1913960649,
    circulatingSupply: 142470000,
    sparkline: "https://ext.same-assets.com/4151781724/956706490.svg+xml",
    rank: 5
  },
  {
    id: 6,
    name: "Solana",
    symbol: "SOL",
    logo: "https://ext.same-assets.com/564946896/1267919168.png",
    price: 126.51,
    percentChange1h: 0.35,
    percentChange24h: 1.75,
    percentChange7d: 1.19,
    marketCap: 64526948780,
    volume24h: 2074390408,
    circulatingSupply: 510030000,
    sparkline: "https://ext.same-assets.com/2094283410/1234578074.svg+xml",
    rank: 6
  },
  {
    id: 7,
    name: "USDC",
    symbol: "USDC",
    logo: "https://ext.same-assets.com/1011520070/4138444921.png",
    price: 0.9999,
    percentChange1h: 0.00,
    percentChange24h: 0.00,
    percentChange7d: 0.00,
    marketCap: 58814662916,
    volume24h: 7600756008,
    circulatingSupply: 58820000000,
    sparkline: "https://ext.same-assets.com/1042965923/2906741573.svg+xml",
    rank: 7
  },
  {
    id: 8,
    name: "Cardano",
    symbol: "ADA",
    logo: "https://ext.same-assets.com/170281384/3581958279.png",
    price: 0.7162,
    percentChange1h: 0.35,
    percentChange24h: 1.73,
    percentChange7d: 2.81,
    marketCap: 25235585189,
    volume24h: 685647849,
    circulatingSupply: 35230000000,
    sparkline: "https://ext.same-assets.com/3790979173/297661312.svg+xml",
    rank: 8
  },
  {
    id: 9,
    name: "Dogecoin",
    symbol: "DOGE",
    logo: "https://ext.same-assets.com/823800410/3566338088.png",
    price: 0.1681,
    percentChange1h: 0.39,
    percentChange24h: 0.86,
    percentChange7d: 0.59,
    marketCap: 24971828189,
    volume24h: 794380705,
    circulatingSupply: 148490000000,
    sparkline: "https://ext.same-assets.com/3345984024/1105463088.svg+xml",
    rank: 9
  },
  {
    id: 10,
    name: "TRON",
    symbol: "TRX",
    logo: "https://ext.same-assets.com/1492606353/594844498.png",
    price: 0.2298,
    percentChange1h: 0.06,
    percentChange24h: 2.88,
    percentChange7d: 3.95,
    marketCap: 21839947489,
    volume24h: 1232063065,
    circulatingSupply: 95010000000,
    sparkline: "https://ext.same-assets.com/3776270061/4132367350.svg+xml",
    rank: 10
  },
  {
    id: 11,
    name: "Chainlink",
    symbol: "LINK",
    logo: "https://ext.same-assets.com/4286290162/749687957.png",
    price: 14.18,
    percentChange1h: 1.10,
    percentChange24h: 2.00,
    percentChange7d: 7.77,
    marketCap: 9323440215,
    volume24h: 341032300,
    circulatingSupply: 657090000,
    sparkline: "https://ext.same-assets.com/3743576195/3756065173.svg+xml",
    rank: 11
  },
  {
    id: 12,
    name: "UNUS SED LEO",
    symbol: "LEO",
    logo: "https://ext.same-assets.com/412760975/3331332773.png",
    price: 9.80,
    percentChange1h: 0.23,
    percentChange24h: 0.18,
    percentChange7d: 1.03,
    marketCap: 9057089045,
    volume24h: 2283107,
    circulatingSupply: 923900000,
    sparkline: "https://ext.same-assets.com/2508010006/2344355339.svg+xml",
    rank: 12
  },
  {
    id: 13,
    name: "Toncoin",
    symbol: "TON",
    logo: "https://ext.same-assets.com/2806018430/3078521822.png",
    price: 3.57,
    percentChange1h: 0.34,
    percentChange24h: 1.44,
    percentChange7d: 32.28,
    marketCap: 8870511738,
    volume24h: 307937219,
    circulatingSupply: 2480000000,
    sparkline: "https://ext.same-assets.com/733019474/1921598892.svg+xml",
    rank: 13
  },
  {
    id: 14,
    name: "Stellar",
    symbol: "XLM",
    logo: "https://ext.same-assets.com/2237260446/2761562429.png",
    price: 0.2807,
    percentChange1h: 1.20,
    percentChange24h: 3.98,
    percentChange7d: 10.99,
    marketCap: 8635279767,
    volume24h: 226506950,
    circulatingSupply: 30750000000,
    sparkline: "https://ext.same-assets.com/2129220204/849881361.svg+xml",
    rank: 14
  },
  {
    id: 15,
    name: "Hedera",
    symbol: "HBAR",
    logo: "https://ext.same-assets.com/3090660626/420736955.png",
    price: 0.1897,
    percentChange1h: 0.31,
    percentChange24h: 1.62,
    percentChange7d: 5.81,
    marketCap: 8011016332,
    volume24h: 184360765,
    circulatingSupply: 42210000000,
    sparkline: "https://ext.same-assets.com/2328818517/1551019117.svg+xml",
    rank: 15
  }
];

export const globalStats = {
  totalMarketCap: 2740000000000,
  totalMarketCapChange24h: 1.15,
  total24hVolume: 71080000000,
  total24hVolumeChange: -4.53,
  btcDominance: 60.5,
  ethDominance: 8.7,
  fearAndGreedIndex: 23,
  fearAndGreedLabel: "Fear"
};

export const trendingCoins = [
  {
    id: 101,
    name: "EOS",
    symbol: "EOS",
    logo: "https://ext.same-assets.com/1971111120/1185654506.png",
    price: 0.5824,
    percentChange24h: 18.93
  },
  {
    id: 102,
    name: "TRX",
    symbol: "TRX",
    logo: "https://ext.same-assets.com/1492606353/594844498.png",
    price: 0.2298,
    percentChange24h: 2.88
  },
  {
    id: 103,
    name: "ETH",
    symbol: "ETH",
    logo: "https://ext.same-assets.com/3794288839/855419534.png",
    price: 1981.82,
    percentChange24h: 4.75
  },
  {
    id: 104,
    name: "BMT",
    symbol: "BMT",
    logo: "https://ext.same-assets.com/3070652522/482472312.png",
    price: 0.2262,
    percentChange24h: 18.74
  },
  {
    id: 105,
    name: "RAY",
    symbol: "RAY",
    logo: "https://ext.same-assets.com/780735513/2083842698.png",
    price: 1.83,
    percentChange24h: 9.69
  }
];

export const trendingDexPairs = [
  {
    id: 201,
    name: "mubarak/WBNB",
    token1Logo: "https://ext.same-assets.com/1773129943/2011488895.png",
    token2Logo: "https://ext.same-assets.com/3712311156/1929177387.png",
    price: 0.1554,
    percentChange24h: 14.19
  },
  {
    id: 202,
    name: "TUT/WBNB",
    token1Logo: "https://ext.same-assets.com/2006102466/4040174911.png",
    token2Logo: "https://ext.same-assets.com/3712311156/1929177387.png",
    price: 0.02984,
    percentChange24h: 2.09
  },
  {
    id: 203,
    name: "BRAT/WETH",
    token1Logo: "https://ext.same-assets.com/3764013287/1030984931.png",
    token2Logo: "https://ext.same-assets.com/2830033090/1108604671.png",
    price: 0.004679,
    percentChange24h: 3.12
  },
  {
    id: 204,
    name: "FORTKNOX/WETH",
    token1Logo: "https://ext.same-assets.com/3574640241/3259648858.png",
    token2Logo: "https://ext.same-assets.com/3794288839/855419534.png",
    price: 0.0004448,
    percentChange24h: 14.67
  },
  {
    id: 205,
    name: "TAG/WBNB",
    token1Logo: "https://ext.same-assets.com/3190119597/3891284460.png",
    token2Logo: "https://ext.same-assets.com/3712311156/1929177387.png",
    price: 0.00004313,
    percentChange24h: 25.61
  }
];
