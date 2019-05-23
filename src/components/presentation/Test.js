import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import getAllRecipes from '../../services/getAllRecipes'

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount() {
    // getAllRecipes()
    //   .then(responseJson => {
    //     this.setState({
    //       isLoading: false,
    //       dataSource: responseJson
    //     })
    //   })
    //   .then(alert(this.state.dataSource))
    fetch('https://jsonplaceholder.typicode.com/posts')
      // fetch('http://www.recipepuppy.com/api/')
      .then(response => response.json())
      .then(responseJson => {
        alert(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
      .catch(err => alert(err))
  }
  _renderItem = ({ item }) => (<Text>{item.title}</Text>)

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <View>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      )
    }
  }
}
