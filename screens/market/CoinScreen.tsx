import React, { useEffect, useState, useRef } from 'react';
import { ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { RouteProp, useRoute } from '@react-navigation/native';
import BackHeader from '@/components/BackHeader';
import { useTheme } from '@/utils/Themes/ThemeProvider';
import ButtonsTrain from '@/components/ButtonsTrain';
import { formatNumber, formatSymbol } from '@/utils/functions/help';
import CandleChartComponent from '@/components/market/CandleChart';
import { Divider } from '@/components/ui/divider';
import CoinOrderHistory from '@/components/market/CoinOrderHistory';
import DepthChartComponent from '@/components/market/DepthChart';
import CoinInfo from '@/components/market/CoinInfo';
import MyLinearGradient from '@/components/gradient/MyLinearGradient';
import BuySellSheet from './BuySellSheet';
import { CryptoData } from '@/utils/api/internal/sql/handleSQLite';
import { useTranslation } from 'react-i18next';

const getWebSocketUrl = (symbol: string) =>
	`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth@1000ms`;

type RootStackParamList = {
	CoinScreen: { coin: any };
};

type CoinScreenRouteProp = RouteProp<RootStackParamList, 'CoinScreen'>;

function CoinScreen() {
	const route = useRoute<CoinScreenRouteProp>();
	const coin = route.params?.coin as CryptoData;

	const { appliedTheme } = useTheme();
	const { t } = useTranslation();

	const [isSheetOpen, setIsSheetOpen] = useState(false);
	const [category, setCategory] = useState(t('coinScreen.tabs.price'));

	const [orderBook, setOrderBook] = useState<{ bids: any[]; asks: any[] }>({ bids: [], asks: [] });
	const ws = useRef<WebSocket | null>(null);
	const isMounted = useRef<boolean>(true);

	useEffect(() => {
		isMounted.current = true;
		ws.current = new WebSocket(getWebSocketUrl(coin.symbol));

		ws.current.onopen = () => {
			console.log("✅ Connected to Binance WebSocket");
		};

		ws.current.onmessage = (event: MessageEvent) => {
			if (!isMounted.current) return;

			const data = JSON.parse(event.data);
			if (data.b && data.a) {
				const updatedBids = mergeOrderBook(data.b, "bids");
				const updatedAsks = mergeOrderBook(data.a, "asks");

				setOrderBook({ bids: updatedBids, asks: updatedAsks });
			}
		};

		ws.current.onerror = (error) => {
			console.error("🚨 WebSocket Error:", error);
		};

		ws.current.onclose = () => {
			console.log("🔴 WebSocket Disconnected.");
		};

		return () => {
			isMounted.current = false;
			ws.current?.close();
		};
	}, []);

	const mergeOrderBook = (updates: [string, string][], type: "bids" | "asks") => {
		const updatedOrders = updates
			.map(([price, amount]) => ({ price: parseFloat(price), amount: parseFloat(amount) }))
			.filter(order => order.amount > 0);

		return updatedOrders
			.sort((a, b) => (type === "bids" ? b.price - a.price : a.price - b.price))
			.slice(0, 6);
	};

	return (
		<>
			<BuySellSheet coinData={coin} orderBook={orderBook} isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
			<MyLinearGradient type="background" color={appliedTheme === "dark" ? "dark" : "light-blue"} className="h-full">
				<ScrollView className="flex-1">
					<Box className="flex-1 p-1">
						<Box className="p-3">
							<BackHeader title={formatSymbol(coin.symbol)} colorScheme="themeBased" />
						</Box>

						<Box className="p-5 gap-6">
							<Box className="flex-row justify-between">
								<Box className="gap-3">
									<Text className={`text-subText-${appliedTheme}`}>{formatSymbol(coin.symbol)}</Text>
									<Text className={`text-3xl font-extrabold text-text-${appliedTheme}`}>
										{formatNumber(parseFloat(coin.price || ""), 2)}
									</Text>
								</Box>
								<Box className="justify-end">
									<Text className={`${Number(coin.change) > 0 ? "text-green-500" : "text-red-500"}`}>
										({Number(coin.change) > 0 ? "+" : ""} {coin.change}%)
									</Text>
								</Box>
							</Box>

							<ButtonsTrain
								activeButton={category}
								buttons={[
									t('coinScreen.tabs.price'),
									t('coinScreen.tabs.depth'),
									t('coinScreen.tabs.info')
								]}
								handlePress={setCategory}
							/>
						</Box>

						{category === t('coinScreen.tabs.price') && <CandleChartComponent symbol={coin.symbol} />}
						{category === t('coinScreen.tabs.depth') && <DepthChartComponent symbol={coin.symbol} />}
						{category === t('coinScreen.tabs.info') && <CoinInfo symbol={coin.symbol} />}

						<Box className="p-1">
							<CoinOrderHistory orderBook={orderBook} onPress={() => setIsSheetOpen(true)} />
						</Box>
					</Box>
				</ScrollView>
			</MyLinearGradient>
		</>
	);
}

export default React.memo(CoinScreen);
