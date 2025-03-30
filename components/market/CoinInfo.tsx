import { useEffect, useState } from "react";
import { Box } from "../ui/box";
import { Text } from "../ui/text";
import axios from "axios";
import { Linking, Pressable } from "react-native";
import { IC_Envelope } from "@/utils/constants/Icons";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { useTranslation } from "react-i18next";

interface CoinInfoTextroTexts {
	symbol?: string;
}

interface CoinDetails {
	name: string;
	symbol: string;
	description: string;
	market_cap: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	website: string;
}

function CoinInfo({ symbol = "BTCUSDT" }: CoinInfoTextroTexts) {
	const { appliedTheme } = useTheme();
	const { t } = useTranslation();
	const [coinDetails, setCoinDetails] = useState<CoinDetails | null>(null);

	useEffect(() => {
		const fetchCoinDetails = async () => {
			try {
				const response = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin");
				const data = response.data;

				const details: CoinDetails = {
					name: data.name,
					symbol: data.symbol,
					description: data.description.en,
					market_cap: data.market_data.market_cap.usd,
					circulating_supply: data.market_data.circulating_supply,
					total_supply: data.market_data.total_supply,
					max_supply: data.market_data.max_supply,
					website: data.links.homepage[0],
				};

				setCoinDetails(details);
			} catch (error) {
				console.error("Error fetching Bitcoin data:", error);
			}
		};

		fetchCoinDetails();
	}, []);

	return (
		<Box className={`relative bg-card-${appliedTheme} p-4 rounded-lg m-5 gap-4`}>
			{coinDetails ? (
				<>
					<Text className={`font-bold text-xl text-text-${appliedTheme}`}>
						{t("coinInfo.about")} {coinDetails.name}
					</Text>
					<Text className={`absolute top-4 right-4 font-bold text-link-${appliedTheme}`}>
						{t("coinInfo.read_more")}
					</Text>
					<Text className={`text-text-${appliedTheme}`}>
						<Text className={`font-bold text-text-${appliedTheme}`}>
							{t("coinInfo.description")}:
						</Text>{" "}
						{coinDetails.description.slice(0, 100) + "..."}
					</Text>

					<Box className="gap-3">
						<Box className="flex-row justify-between">
							<Box className="flex-row gap-3 items-center">
								<IC_Envelope className="w-5 h-5" />
								<Text className={`font-bold text-text-${appliedTheme}`}>{t("coinInfo.market_cap")}:</Text>
							</Box>
							<Text className={`text-text-${appliedTheme}`}>${coinDetails.market_cap.toLocaleString()}</Text>
						</Box>

						<Box className="flex-row justify-between">
							<Box className="flex-row gap-3">
								<IC_Envelope className="w-5 h-5" />
								<Text className={`font-bold text-text-${appliedTheme}`}>
									{t("coinInfo.circulating_supply")}
								</Text>
							</Box>
							<Text className={`text-text-${appliedTheme}`}>{coinDetails.circulating_supply.toLocaleString()}</Text>
						</Box>

						<Box className="flex-row justify-between">
							<Box className="flex-row gap-3">
								<IC_Envelope className="w-5 h-5" />
								<Text className={`font-bold text-text-${appliedTheme}`}>{t("coinInfo.total_supply")}:</Text>
							</Box>
							<Text className={`text-text-${appliedTheme}`}>{coinDetails.total_supply.toLocaleString()}</Text>
						</Box>

						<Box className="flex-row justify-between">
							<Box className="flex-row gap-3">
								<IC_Envelope className="w-5 h-5" />
								<Text className={`font-bold text-text-${appliedTheme}`}>{t("coinInfo.max_supply")}:</Text>
							</Box>
							<Text className={`text-text-${appliedTheme}`}>{coinDetails.max_supply.toLocaleString()}</Text>
						</Box>

						<Pressable onPress={() => Linking.openURL(coinDetails.website)}>
							<Box className="flex-row justify-between">
								<Box className="flex-row gap-3">
									<IC_Envelope className="w-5 h-5" />
									<Text className={`font-bold text-text-${appliedTheme}`}>{t("coinInfo.website")}:</Text>
								</Box>
								<Text className={`text-text-${appliedTheme}`}>{coinDetails.website}</Text>
							</Box>
						</Pressable>
					</Box>
				</>
			) : (
				<Text className={`text-text-${appliedTheme}`}>{t("coinInfo.loading")}</Text>
			)}
		</Box>
	);
}

export default CoinInfo;
