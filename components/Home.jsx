import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Home</Text>
        <Text style={styles.address}>300N Washington Street, Gettysburg, PA 17325</Text>
      </View>

      <View style={styles.utilityContainer}>
        <View>
          <Text>Energy</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
            <Text>Bills</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Devices')}>
            <Text>Devices</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Stats')}>
          <Text>Electricity Advisor</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },

  titleContainer: {

  },

  title: {
    // fontFamily: 'Sofia Pro',
    fontWeight: 'bold',
    fontSize: 24,
  },

  address: {

  },

  utilityContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default Home;
