import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const roomsData = [
    {
        name: 'Bedroom',
        devices: ['Television', 'Light', 'Fan', 'Lock'],
    },
    {
        name: 'Laundry',
        devices: ['Washing Machine', 'Dryer'],
    },
    {
        name: 'Living Room',
        devices: ['Television', 'Light'],
    },
    // Add more rooms and devices as needed
];

function Devices({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.devicesTitle}>Devices</Text>
            {roomsData.map((room, roomIndex) => (
                <View key={roomIndex} style={styles.roomContainer}>
                    <Text style={styles.roomTitle}>{room.name}</Text>
                    <View style={styles.devicesContainer}>
                        {room.devices.map((device, deviceIndex) => (
                            <View key={deviceIndex} style={styles.deviceBox}>
                                <Text style={styles.deviceName}>{device}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            ))}
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    devicesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    roomContainer: {
        marginBottom: 20,
    },
    roomTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    devicesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    deviceBox: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        marginRight: 10,
        marginBottom: 10,
    },
    deviceName: {
        fontSize: 16,
    },
});

export default Devices;
