import React, { useState } from "react";
import { ScrollView, Animated, Text, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import NotificationCard from "@/components/NotificationCard";
import { Box } from "@/components/ui/box";
import { useTheme } from "@/utils/Themes/ThemeProvider";
import BackHeader from "@/components/BackHeader";
import MyLinearGradient from "@/components/gradient/MyLinearGradient";
import CardUpRounded from "@/components/CardUpRounded";

const initialNotifications = [
  {
    id: 1,
    title: "Order Waiting for approval",
    message: "Your order has been received and will be checked soon by our team",
    timeAgo: "5 mins ago",
  },
  {
    id: 2,
    title: "Order Shipped",
    message: "Your order is on the way!",
    timeAgo: "10 mins ago",
  },
  {
    id: 3,
    title: "Payment Successful",
    message: "Your payment was received successfully.",
    timeAgo: "5 hours ago",
  },
];

const NotificationsScreen = () => {
  const { appliedTheme } = useTheme();
  const [notifications, setNotifications] = useState(initialNotifications);

  // ✅ Remove notification function
  const handleRemoveNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  // ✅ Render delete button behind the notification
  const renderRightActions = (progress: Animated.AnimatedInterpolation<number>, id: number) => (
    <TouchableOpacity
      onPress={() => handleRemoveNotification(id)}
      className="bg-red-600 justify-center items-center w-20 rounded-lg"
    >
      <Text className="text-white font-semibold">Remove</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Header with Gradient */}
      <MyLinearGradient type="background" color={appliedTheme === "dark" ? "blue" : "purple"} className="h-1/6 p-4">
        <BackHeader title="Notifications" colorScheme="alwaysWhite" />
      </MyLinearGradient>

      {/* Notification List inside Styled Card */}
      <CardUpRounded className={`bg-background-${appliedTheme} h-full p-4 gap-2 space-y-4`}>
        {notifications.map((notification) => (
          <Swipeable
            key={notification.id}
            renderRightActions={(progress) => renderRightActions(progress, notification.id)}
          >
            <NotificationCard
              title={notification.title}
              message={notification.message}
              timeAgo={notification.timeAgo}
            />
          </Swipeable>
        ))}
      </CardUpRounded>
    </ScrollView>
  );
};

export default NotificationsScreen;
