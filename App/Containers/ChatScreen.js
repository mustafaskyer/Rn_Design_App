import React, { Component } from 'react'
import { BackHandler, View, ScrollView, Keyboard } from 'react-native'
import { Content, Left, Right, Button, Text, Icon, Item, Input, Thumbnail  } from 'native-base'
import _ from 'lodash'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ChatScreenStyle'

class ChatScreen extends Component {
  constructor(){
    super()
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.clearInput.bind(this))
    this.state = {
      messages: [
        {image:'https://tse1.mm.bing.net/th?id=OIP.t4cBC4l7id_RhUV-eI8fmQHaGr&pid=15.1&P=0&w=182&h=165',name:'Ahmed',position:'Developer', message:'Hi ,',type:'r'},
        {name:'Mustafa',position:'Developer', message:'Hi ,Ahmed',type:'s'},
        {image:'https://tse1.mm.bing.net/th?id=OIP.t4cBC4l7id_RhUV-eI8fmQHaGr&pid=15.1&P=0&w=182&h=165',name:'Ahmed',position:'Developer', message:'How r u ?',type:'r'},
        {name:'Mustafa',position:'Developer', message:'Better , thanks Ahmed',type:'s'},
      ],
      message:''
    }
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
  }

  handleAddMessage(){
    if(this.state.message.length > 3){
      this.setState(state => ({ messages: [...state.messages, { message:this.state.message, type:'s', position:'Developer', name:'Mustafa'  }] }),this.clearInput())
    }
  }

  clearInput(){
    this.setState({ message:'' })
    this.list.scrollToEnd()
  }

  renderMessages(){
    if(this.state.messages){
      return (
        _.map(this.state.messages,(msg,i) => {
          if(msg.type === 'r'){
            return(
              <View key={i}>
            <View style={{ flex:1, flexDirection:'row', paddingVertical:10, margin:10 }}>
            <Thumbnail source={{uri: 'https://tse1.mm.bing.net/th?id=OIP.t4cBC4l7id_RhUV-eI8fmQHaGr&pid=15.1&P=0&w=182&h=165'}} />
            <View style={{ flex:1, paddingHorizontal:19 }}>
            <Text>{msg.name}</Text>
            <Text note>{msg.position}</Text>
            </View>
            </View>
            <View style={{ alignItems:'flex-start', paddingLeft:15 }}>
              <Text>{msg.message}</Text>
            </View>
          </View>
            )
          }
          if(msg.type === 's'){
            return(
              <View key={i} style={{ alignItems:'flex-end' }}>
              <View style={{ flex:1, flexDirection:'row', paddingVertical:10, margin:10,justifyContent:'flex-end' }}>
              <View style={{ flex:1, paddingHorizontal:19, alignItems:'flex-end' }}>
              <Text>{msg.name}</Text>
              <Text note>{msg.position}</Text>
              </View>
              <Thumbnail style={{ alignSelf:'flex-end', }} source={require('../Images/skyer.jpeg')} />
              </View>
              <View style={{ alignItems:'flex-start', paddingRight:15 }}>
                <Text>{msg.message}</Text>
              </View>
            </View>
            )
          }
        }
      )
      )
    }

    return null;
  }
  render () {
    return (
        <View style={{ flex:1, justifyContent:'space-between' }}>
        <ScrollView ref={(list) => {this.list = list}} style={{ flex:0 }}>
        
        {this.renderMessages()}

        </ScrollView>
        <View style={{ flex:0, flexDirection:'row',borderBottomWidth:1, alignItems:'center' }}>
            <Input value={this.state.message} onChangeText={(message) => this.setState({ message })} placeholder='your message'/>
            <Button onPress={() => this.handleAddMessage()} transparent>
              <Icon name='ios-send-outline' />
            </Button>
        </View>
        </View>
    )
  }
}

export default ChatScreen