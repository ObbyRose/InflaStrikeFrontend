import * as SQLite from 'expo-sqlite';
import {
  fetchAllCoinsTicker,
  fetchBitcoinHistory,
  fetchBitcoinLineData,
  fetchBitcoinLivePrice,
  fetchBitcoinPercentageGain,
  fetchCandlestickData,
  fetchEthereumHistory,
  fetchEthereumLineData,
  fetchEthereumLivePrice,
  fetchEthereumPercentageGain,
  fetchLineData,
  fetchLivePrice,
  fetchPercentageGain,
  fetchXRPHistory,
  fetchXRPLineData,
  fetchXRPLivePrice,
  fetchXRPPercentageGain,
} from '../../external/BinanceAPI';

export interface CryptoData {
  symbol: string;
  price: string | null;
  change: string | null;
  lineData: LineData[];
  historyData: History[];
}

export type tickerData = {
  symbol: string,
  percentage: string,
  price: string,
}

export interface LineData {
  time: string;
  price: string;
}

export interface History {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

let db: Awaited<ReturnType<typeof SQLite.openDatabaseAsync>> | null = null;

async function getDatabase() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('cryptoData');
  }
  return db;
}

const popularCurrencies = [
  'BTCUSDT', // Bitcoin  
  'ETHUSDT', // Ethereum  
  'XRPUSDT', // XRP  
  'BNBUSDT', // Binance Coin  
  'ADAUSDT', // Cardano  
  'DOGEUSDT', // Dogecoin  
  'SOLUSDT', // Solana  
  'TONUSDT', // Toncoin  
  'DOTUSDT', // Polkadot  
  'MATICUSDT' // Polygon  
];


export async function handleSQLiteIInsert() {
  // Fetching all the data
  const historyArr = await Promise.all(
    popularCurrencies.map((curr) => fetchCandlestickData(curr))
    );

  const lineDataArr = await Promise.all(
    popularCurrencies.map((curr) => fetchLineData(curr))
  );
  
  const tickerData = await fetchAllCoinsTicker();

  // Saving all thw data
  const newData: CryptoData[] = [];

  for(let i=0; i< historyArr.length; i++) {
    newData.push({
      symbol: tickerData[i].symbol,
      price: tickerData[i].price,
      change: tickerData[i].percentage,
      lineData: lineDataArr[i],
      historyData: historyArr[i],
    })
  }

  

  // Creating/Opening the SQLite db server
  const db = await getDatabase();
  await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS crypto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        symbol TEXT NOT NULL,
        price TEXT,
        change TEXT,
        lineData TEXT,
        historyData TEXT
      );
      `);

  // Clear the table from before to avoid duplicates
  await db.execAsync('DELETE FROM crypto');

  //   Inserting the data
  for (const crypto of newData) {
    await db.runAsync(
      `INSERT INTO crypto (symbol, price, change, lineData, historyData) VALUES (?, ?, ?, ?, ?)`,
      [
        crypto.symbol,
        crypto.price,
        crypto.change,
        JSON.stringify(crypto.lineData),
        JSON.stringify(crypto.historyData),
      ]
    );
  }
}

export async function handleSQLiteSelect(coinsSymbols: string[]) {
  // Open the SQLite db server
  const db = await getDatabase();

  let query = 'SELECT * FROM crypto';
  let params: any[] = [];

  if (coinsSymbols.length > 0) {
    query += ' WHERE symbol IN (' + coinsSymbols.map(() => '?').join(', ') + ')';
    params = coinsSymbols;
  }

  // Execute the query
  const result = await db.getAllAsync(query, params);

  // Parsing all the JSON fields into raw values
  const finalResult = result.map((currentRow: any) => {
    return {
      ...currentRow,
      lineData: JSON.parse(currentRow.lineData as string),
      historyData: JSON.parse(currentRow.historyData as string),
    };
  });

  return finalResult;
}
