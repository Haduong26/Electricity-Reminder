import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function Header() {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
                <AntDesign name="menu-fold" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Text style={{...styles.titleText, color: '#FDD600'}}>Energy</Text>
                <Text style={{...styles.titleText, color: '#66C498'}}>Advisor</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 30,
        backgroundColor: 'white',
        marginTop: 20,
        justifyContent: 'space-between',
        boxShadow: '0px 5px 6px -1px #58585838',
    },
    menuButton: {
        marginRight: 10
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        margin: 0,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Header;