import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  state = {
    people: [],
    loading: true,
    page: 1,
  };

  componentDidMount() {
    this.getPeople();
  }

  getPeople = () => {
    this.setState({ loading: true });
    fetch(`https://swapi.co/api/people?page=${this.state.page}`)
      .then(res => res.json())
      .then(res => {
        alert(res.results)
        this.setState(state => ({
          people: [...state.people, ...res.results],
          loading: false,
        }));
      });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.people}
          keyExtractor={item => item.url}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          ListFooterComponent={
            this.state.loading ? (
              <ActivityIndicator />
            ) : (
                <Button
                  title="Load More"
                  onPress={() => {
                    this.setState(
                      state => ({ page: state.page + 1 }),
                      this.getPeople
                    );
                  }}
                />
              )
          }
        />
      </SafeAreaView>
    );
  }
}