import React, { Component } from 'react'
import { BackHandler, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, Footer, FooterTab, Badge, Thumbnail } from "native-base"
import _ from 'lodash'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import Details from './DetailsScreen'
import Profile from './ProfileScreen'
import Activity from './ActivityScreen'
import Chat from './ChatScreen'
const items = [
  {logo:'https://tse3.mm.bing.net/th?id=OIP.aOUznwTkzyW4mErdhDHnLQHaEY&pid=15.1&P=0&w=302&h=179',position:'Frontend',experience:'3-5',date:'2 days',},
  {logo:'https://tse2.mm.bing.net/th?id=OIP.koXuVtX82h5Qop_x8a8nRQHaEK&pid=15.1&P=0&w=289&h=163',position:'Backend',experience:'1-3',date:'3 hours',},
  {logo:'https://tse3.mm.bing.net/th?id=OIP.mcNYxyVFNA_QVQjQIQsewQHaFP&pid=15.1&P=0&w=244&h=173',position:'Graphic',experience:'0-5',date:'1 hour',},
  {logo:'https://tse1.mm.bing.net/th?id=OIP.90jeokgkQKOCFT3_47k9VAHaD5&pid=15.1&P=0&w=380&h=200',position:'Full Stack',experience:'1-3',date:'30 min',},
]
class HomeScreen extends Component {
  constructor(){
    super();
    this.state = {
      selectedTab:'home'
    }
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }

  renderItems(){
    return _.map(items,(item,i) => {
      return (
        <Card key={i}>
          <CardItem header bordered>
            <View style={{ flex:1,flexDirection:'row', alignItems:'center', justifyContent:'center', alignSelf:'center' }}>
             <Thumbnail source={{ uri:item.logo }} style={{ resizeMode:'contain' }} />
              </View>
              
          </CardItem>
          <CardItem bordered>
            <Body>
            <View style={{ flexDirection:'row', alignItems:'center', flex:1 }}>
            <Icon name='md-expand' style={{ fontSize:18 }} />
            <Text style={{ paddingHorizontal:5, fontWeight:'bold' }}>Position</Text>
            <Text style={{ flex:1,alignSelf:'flex-end', textAlign:'right' }}>
                {item.position}
              </Text>
            </View>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
            <Icon name='md-bowtie' style={{ fontSize:18 }} />
            <Text style={{ paddingHorizontal:5, fontWeight:'bold' }}>Experience</Text>
            <Text style={{ flex:1,alignSelf:'flex-end', textAlign:'right' }}>
               {item.experience} years
              </Text>
            </View>
            <View style={{ flex:1, flexDirection:'row', justifyContent:'space-around', marginTop:15, paddingTop:5 }}>
            <View style={{ flex:1, flexDirection:'row', alignItems:'center' }}>
            <Icon name='md-time' style={{ fontSize:18 }} />
            <Text style={{ paddingHorizontal:5, fontWeight:'bold' }}>Published</Text>
            <Text style={{ flex:1,alignSelf:'flex-end', textAlign:'right' }}>{item.date} Ago</Text>
            </View>
            </View>
            </Body>
          </CardItem>
          <CardItem>
           <TouchableOpacity onPress={() => this.setState({ selectedTab:'details' })} style={{ flex:1 }}>
           <Text style={{ alignSelf:'flex-end', flex:1, textAlign:'right' }} note>
              Read Description ...
            </Text>
           </TouchableOpacity>
          </CardItem>
        </Card>
      )
    })
  }

  renderTabs(){
    switch(this.state.selectedTab){
      case 'home':
       return (
        <Content padder>
        {this.renderItems()}
      </Content>
       )

       case 'details':
        return <Details />

        case 'profile':
          return <Profile />

        case 'activity':
          return <Activity />

        case 'chat':
          return <Chat />
      default:
        return null;
    }
  }
  render () {
    return (
      <Container>
     <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
        </Header>

        {this.renderTabs()}

      <Footer>
          <FooterTab>
            <Button active={this.state.selectedTab === 'home' ? true : false} onPress={() => this.setState({ selectedTab:'home' })} badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.selectedTab === 'activity' ? true : false} onPress={() => this.setState({ selectedTab:'activity' })} vertical>
              <Icon name="md-git-network" />
              <Text>Activity</Text>
            </Button>
            <Button active={this.state.selectedTab === 'chat' ? true : false} onPress={() => this.setState({ selectedTab:'chat' })} badge vertical>
              <Badge ><Text>11</Text></Badge>
              <Icon name="md-chatboxes" />
              <Text>Chat</Text>
            </Button>
            <Button active={this.state.selectedTab === 'profile' ? true : false} onPress={() => this.setState({ selectedTab:'profile' })} vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    )
  }
}

export default HomeScreen