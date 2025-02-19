import React from "react";
import { ScrollView } from "react-native";
import NotificationCard from "@/components/NotificationCard";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";

const notifications = [
  {
    title: "Order Waiting for approval",
    message: "Your order has been received and will be checked soon by our team",
    timeAgo: "5 mins ago",
  },
  {
    title: "Order Waiting for approval",
    message: "Your order has been received and will be checked soon by our team",
    timeAgo: "5 mins ago",
  },
  {
    title: "Order Waiting for approval",
    message: "Your order has been received and will be checked soon by our team",
    timeAgo: "10 mins ago",
  },
  {
    title: "Order Waiting for approval",
    message: "Your order has been received and will be checked soon by our team",
    timeAgo: "5 hours ago",
  },
];

const NotificationsScreen = () => {
  const { appliedTheme } = useTheme();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box className={`bg-background-${appliedTheme} p-4 gap-2 space-y-4`}>
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            message={notification.message}
            timeAgo={notification.timeAgo}
          />
        ))}
      </Box>
    </ScrollView>
  );
};

export default NotificationsScreen;
