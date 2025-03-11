import * as SQLite from 'expo-sqlite';
import {
  fetchBitcoinHistory,
  fetchBitcoinLineData,
  fetchBitcoinLivePrice,
  fetchBitcoinPercentageGain,
  fetchEthereumHistory,
  fetchEthereumLineData,
  fetchEthereumLivePrice,
  fetchEthereumPercentageGain,
  fetchXRPHistory,
  fetchXRPLineData,
  fetchXRPLivePrice,
  fetchXRPPercentageGain,
} from '../../external/BinanceAPI';
import { IC_Bitcoin, IC_Ethereum, IC_Xrp, IconsProps } from '../../../constants/Icons';

export interface CryptoData {
  name: string;
  symbol: string;
  price: number | null;
  change: number | null;
  bgColor: string;
  lineData: LineData[] | string;
  historyData: History[] | string;
  icon?: ({ className }: IconsProps) => React.JSX.Element;
}

export interface LineData {
  time: string;
  price: number;
}

export interface History {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export async function handleSQLiteIInsert() {
  // Fetching all the data
  const [btcHistory, ethHistory, xrpHistory] = await Promise.all([
    fetchBitcoinHistory(),
    fetchEthereumHistory(),
    fetchXRPHistory(),
  ]);

  const [btcLine, ethLine, xrpLine] = await Promise.all([
    fetchBitcoinLineData(),
    fetchEthereumLineData(),
    fetchXRPLineData(),
  ]);

  const [btcPrice, ethPrice, xrpPrice] = await Promise.all([
    fetchBitcoinLivePrice(),
    fetchEthereumLivePrice(),
    fetchXRPLivePrice(),
  ]);

  const [btcChange, ethChange, xrpChange] = await Promise.all([
    fetchBitcoinPercentageGain(),
    fetchEthereumPercentageGain(),
    fetchXRPPercentageGain(),
  ]);

  // Saving all thw data
  const newData: CryptoData[] = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: IC_Bitcoin,
      price: btcPrice,
      change: btcChange,
      lineData: btcLine,
      bgColor: 'bg-[hsl(7_91%_60%/0.1)]',
      historyData: btcHistory,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: IC_Ethereum,
      price: ethPrice,
      change: ethChange,
      lineData: ethLine,
      bgColor: 'bg-[hsl(169_44%_58%/0.1)]',
      historyData: ethHistory,
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      icon: IC_Xrp,
      price: xrpPrice,
      change: xrpChange,
      lineData: xrpLine,
      bgColor: 'bg-[hsl(223_99%_69%/0.1)]',
      historyData: xrpHistory,
    },
  ];

  // Creating/Opening the SQLite db server
  const db = await SQLite.openDatabaseAsync('cryptoData');
  await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS crypto (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  symbol TEXT NOT NULL,
  price REAL,
  change REAL,
  bgColor TEXT,
  lineData TEXT, -- Store JSON array
  historyData TEXT -- Store JSON array
);
        `);

  // Clear the table from before to avoid duplicates
  await db.execAsync('DELETE FROM crypto');

  //   Inserting the data
  for (const crypto of newData) {
    await db.runAsync(
      `INSERT INTO crypto (name, symbol, price, change, bgColor, lineData, historyData) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        crypto.name,
        crypto.symbol,
        crypto.price,
        crypto.change,
        crypto.bgColor,
        JSON.stringify(crypto.lineData),
        JSON.stringify(crypto.historyData),
      ]
    );
  }
}

export async function handleSQLiteSelect(coinsNames: string[]) {
  // Open the SQLite db server
  const db = await SQLite.openDatabaseAsync('cryptoData');

  // For each coin, Fetching the row that match the coin name in a promise
  const promisedResult = coinsNames.map((currentCoin) => {
    return db.getFirstAsync('SELECT * FROM crypto WHERE name=?', [
      currentCoin,
    ]) as Promise<CryptoData>;
  });

  // Fulfilling all the promises
  const fulfilledResult = await Promise.all(promisedResult);

  // Parsing all the JSON felids into raw values
  const finalResult = fulfilledResult.map((currentRow) => {
    return {
      ...currentRow,
      lineData: JSON.parse(currentRow.lineData as string),
      historyData: JSON.parse(currentRow.historyData as string),
    };
  });

  return finalResult;
}
