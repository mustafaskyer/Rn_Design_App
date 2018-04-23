import React, { Component } from 'react'
import { BackHandler, View } from 'react-native'
import { Content, Left, Right, Body, Text, Icon, Thumbnail, Card, CardItem, Separator, List, ListItem } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }
  render () {
    return (
      

        <Content padder>
          <View style={{  flex:1,justifyContent:'center', alignItems:'center' }}>
          <Thumbnail style={{ width:150, height:150, borderRadius:150/2 }} source={ require('../Images/skyer.jpeg') } />
          <Text style={{ padding:10, fontWeight:'700' }}>Mustafa Skyer</Text>
          <Text>Full Stack Developer</Text>
          </View>
          <View style={{ flex:3 }}>
          <Content padder>
          <Card transparent>
            <CardItem style={{ backgroundColor:'#ccc' }}>
              <Body>
                <Text style={{ textAlign:'center', lineHeight:22 }}>
                  Experience web Developer & Mobile Application Developer For More than 3 years
                </Text>
              </Body>
            </CardItem>                        
          </Card>
        </Content>
        <Separator bordered>
          <Text>Skills</Text>
        </Separator>
        <List style={{ paddingHorizontal:10 }}>
            <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={{ fontSize:14, lineHeight:22, paddingLeft:15 }}> Software Engineering </Text>
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>Intermediate</Text>
            </ListItem>

            <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={{ fontSize:14, lineHeight:22, paddingLeft:15 }}> FrontEnd </Text>
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>Expert</Text>
            </ListItem>

            <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={{ fontSize:14, lineHeight:22, paddingLeft:15 }}> Database Design </Text>
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>Advanced</Text>
            </ListItem>

            <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={{ fontSize:14, lineHeight:22, paddingLeft:15 }}> Problem Solving </Text>
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>Interesting</Text>
            </ListItem>
          
        </List>

        <Separator bordered>
          <Text>Social Links</Text>
        </Separator>
        <List style={{ paddingHorizontal:10 }}>
            <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Icon name='logo-facebook' style={{  }} />
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>/fb</Text>
            </ListItem>

             <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Icon name='logo-twitter' style={{  }} />
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>/skirmustafa</Text>
            </ListItem>

            <ListItem style={{ flex:1, flexDirection:'row', justifyContent:'space-between' }}>
            <Icon name='logo-linkedin' style={{  }} />
            <Text style={{ fontSize:14, lineHeight:22, paddingRight:'10%' }}>/in</Text>
            </ListItem>
          
          
        </List>
          </View>
        </Content>
    )
  }
}

export default ProfileScreen