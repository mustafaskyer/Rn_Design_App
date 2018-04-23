import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import { Content, Card, CardItem, Body, Text, } from 'native-base'
import styles from './Styles/FavoritesStyle'

export default class Favorites extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <View style={{ width:90, height:90, borderRadius:90/2, borderColor:'red', borderWidth:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:36, color:'red' }}>!</Text>
      </View>
      <Text style={{ paddingVertical:19, color:'red' }}>No Favorites found</Text>
      </View>
    )
  }
}
