import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View } from 'react-native'
import { Content, Card, CardItem, Body, Text, } from 'native-base'
import styles from './Styles/MyJobsStyle'

export default class MyJobs extends Component {
  render () {
    return (
      <Content padder>
      <Card transparent>
        <CardItem style={{ borderBottomWidth:1 }}>
          <Body>
            <Text style={{ lineHeight:22, paddingVertical:7 }}>
              Htc Company
            </Text>
            <View style={{ flex:1, justifyContent:'space-around', alignItems:'center', flexDirection:'row' }}>
            <Text note style={{ flex:1, lineHeight:22 }}>Front End Developer</Text>
            <Text style={{ color:'green' }}>Applied</Text>
            </View>
          </Body>
        </CardItem>

         <CardItem style={{ borderBottomWidth:1 }}>
          <Body>
          <Text style={{ lineHeight:22, paddingVertical:7 }}>
              Mobily Co
            </Text>
            <View style={{ flex:1, justifyContent:'space-around', alignItems:'center', flexDirection:'row' }}>
            <Text note style={{ flex:1 }}>Front End Developer</Text>
            <Text style={{ color:'red' }}>Rejected</Text>
            </View>
          </Body>
        </CardItem>

         <CardItem style={{ borderBottomWidth:1 }}>
          <Body>
          <Text style={{ lineHeight:22, paddingVertical:7 }}>
              Sto Co
            </Text>
            <View style={{ flex:1, justifyContent:'space-around', alignItems:'center', flexDirection:'row' }}>
            <Text note style={{ flex:1 }}>Front End Developer</Text>
            <Text style={{ color:'orange' }}>waiting</Text>
            </View>
          </Body>
        </CardItem>
        
      </Card>
    </Content>
    )
  }
}
