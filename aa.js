import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
    const [objectIndex, setObjectIndex] = useState(0);
    const [notificationContent, setNotificationContent] = useState('');

    useEffect(() => {
    const deck1741 = [
        { kanji: 'Kanji1' },
        { kanji: 'Kanji2' },
        { kanji: 'Kanji3' },
        { kanji: 'Kanji4' },
        { kanji: 'Kanji5' },
        { kanji: 'Kanji6' },
        { kanji: 'Kanji7' },
    ];

    setNotificationContent(deck1741[objectIndex].kanji);

    const scheduleNotifications = async () => {
        await Notifications.scheduleNotificationAsync({
        content: { title: deck1741[objectIndex].kanji },
        trigger: { seconds: 5 },});};

    scheduleNotifications();
    }, [objectIndex]);

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{notificationContent}</Text>
    </View>
);
}
