import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
// import config from './config'
import { PostFeed } from './components/container'
import Test from './components/presentation/Test'
import Test2 from './components/presentation/Test2'
import Test3 from './components/presentation/Test3'


class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
        <View style={styles.tempNav}>
          <Text> Instagram </Text>
        </View>
        {/* <PostFeed /> */}
        {/* <Test /> */}
        {/* <Test2 /> */}
        <Test3 />
      </ View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 56,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default InstaClone