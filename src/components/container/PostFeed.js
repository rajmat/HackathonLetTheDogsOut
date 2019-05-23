import React, { Component } from 'react';
import { Post } from '../presentation';
import { FlatList } from 'react-native';

class PostFeed extends Component {

  _renderPost({ item }) {
    return <Post />
  }
  _returnKey(item) {
    return item.toString()

  }

  render() {
    return (
      <FlatList data={[1]}
        keyExtractor={this._returnKey}
        renderItem={this._renderPost} />
    )
  }
}

export default PostFeed