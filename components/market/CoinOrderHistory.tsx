import React, { useState } from "react";
import { Box } from "../ui/box";
import { Button, ButtonText } from "../ui/button";
import { Text } from "../ui/text";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import { Divider } from "../ui/divider";
import OrderBook from "../OrderBook";
import { useTranslation } from "react-i18next";

interface CoinOrderHistoryProps {
	orderBook: { bids: any[]; asks: any[] };
	onPress: () => void;
}

const CoinOrderHistory: React.FC<CoinOrderHistoryProps> = ({ orderBook, onPress }) => {
	const { appliedTheme } = useTheme();
	const { t } = useTranslation();

	const [selectedCategory, setSelectedCategory] = useState<"orderBook" | "tradeHistory">("orderBook");

	const categories: { key: "orderBook" | "tradeHistory"; label: string }[] = [
		{ key: "orderBook", label: t("coinOrderHistory.order_book") },
		{ key: "tradeHistory", label: t("coinOrderHistory.trade_history") },
	];

	return (
		<Box className={`relative rounded-lg bg-card-${appliedTheme} p-3 w-full`}>
			<Box className="relative flex-row pt-2 gap-4">
				{categories.map(({ key, label }) => (
					<Text
						key={key}
						onPress={() => setSelectedCategory(key)}
						className={`${
							key === selectedCategory
								? `text-text-${appliedTheme} font-semibold border-b-4 border-indigo-500 z-10`
								: `text-gray-${appliedTheme}`
						}`}
					>
						{label}
					</Text>
				))}
				<Divider className="absolute bottom-[0.1px]" />
			</Box>

			<OrderBook orderBook={orderBook} />

			<Box className="flex-row mt-3 gap-3">
				<Button className="bg-green-500 px-6 py-3 rounded-full flex-1 h-fit" onPress={onPress}>
					<ButtonText className="text-white font-semibold">{t("coinOrderHistory.buy")}</ButtonText>
				</Button>
				<Button className="bg-red-500 px-6 py-3 rounded-full flex-1 h-fit" onPress={onPress}>
					<ButtonText className="text-white font-semibold">{t("coinOrderHistory.sell")}</ButtonText>
				</Button>
			</Box>
		</Box>
	);
};

export default React.memo(CoinOrderHistory);
