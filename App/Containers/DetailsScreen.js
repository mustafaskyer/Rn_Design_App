import React, { Component } from 'react'
import { BackHandler, View, Alert } from 'react-native'
import {  Content, List, ListItem, Text, Separator, Button, Icon } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DetailsScreenStyle'

class DetailsScreen extends Component {
  constructor(){
    super();
    this.state = {
      purchased:false,
    }
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }

  checkApply(){
    if(this.state.purchased)
      return this.applyJob()

    return Alert.alert(
      ' ! ',
      'You need To Purchase First ..',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Purchase', onPress: () => this.setState({ purchased:true }, this.applyJob())},
      ],
      { cancelable: false }
    )
  }
  applyJob(){
    Alert.alert(
      'Success',
      'You Application Sent to Job Annoncer \n thanks for choosing our App \n Hr Team',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render () {
    return (
      <Content>
         <Separator bordered>
          <View style={{ flexDirection:'row', justifyContent:'space-around', alignItems:'center' }}>
            <Button disabled={this.state.purchased ? true : false} onPress={() => this.checkApply()} transparent>
              <Text style={{ color: this.state.purchased ? '#bbb' : '#000' }}>{this.state.purchased ? 'Applied' : 'Apply'}</Text>
              <Icon style={{ color: this.state.purchased ? '#bbb' : '#000' }} name='md-done-all' />
            </Button>
            <Button transparent>
              <Text>save </Text>
              <Icon name='md-star' />
            </Button>
          </View>
        </Separator>
        <Separator bordered>
          <Text>Job Description</Text>
        </Separator>
       <View style={{ flex:1, alignItems:'center', padding:10 }}>
         <Text style={{ fontSize:14, paddingHorizontal:15, textAlign:'center', lineHeight:22 }}>
         Crowd Analyzer -a technical startup- is the leading Arabic social media listening tool in the MENA region and worldwide. We work with clients from different sectors and industries to enhance their social media marketing strategies and business objectives. We support Arabic sentiment analysis with different dialects using Proprietary Machine Learning, Artificial Intelligence and Natural Language Processing.
We are currently looking for Frontend Developers who will be responsible for building our web applications 
         </Text>
       </View>
        <Separator bordered>
          <Text>Requriments</Text>
        </Separator>
        <List style={{ paddingHorizontal:10 }}>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Ensure the technical feasibility of UI/UX designs
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Optimize application for maximum speed and scalability
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Deliver best-in-class HTML5/CSS3/Javascript front-end code
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Develop new user-facing features
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Build reusable code and libraries for future use
            </Text>
            </ListItem>
        </List>

        <Separator bordered>
          <Text>Skills</Text>
        </Separator>
        <List style={{ paddingHorizontal:10 }}>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Proficiency level in HTML, CSS
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Experience in JavaScript Frameworks (Angular, React)
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Good problem-solving skills
            </Text>
            </ListItem>
          <ListItem>
            <Text style={{ fontSize:14, lineHeight:22 }}>
            Excellent analytical and multitasking skills with an ability to perform well in a dynamic environment
            </Text>
            </ListItem>
        </List>

        <Separator bordered>
          <Text>Others Info</Text>
        </Separator>
        <View>

          <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10 }}>
          <Icon style={{ fontSize:16,width:25, textAlign:'left', paddingLeft:10 }} name='md-pin' />
          <Text>Riyadh ,Saudi Arabia Kingdom</Text>
          </View>

          <View style={{ flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10 }}>
          <Icon style={{ fontSize:16,width:25, textAlign:'left',paddingLeft:10 }} name='md-pricetag' />
          <Text>Information Technology</Text>
          </View>

         

        </View>
      </Content>
    )
  }
}

export default DetailsScreen