import React, { Component } from 'react'
import { BackHandler, View, I18nManager } from 'react-native'
import { Content, Container, Header, Right, Body, Button, Text, Title, Icon, Footer, FooterTab, Thumbnail } from 'native-base'
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/RegisterScreenStyle'

import Icons from '../Themes'
import Input from '../Components/InputsComponent'

class RegisterScreen extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true
    })
  }
  render () {
    return (
      <Container>
        <Header style={{ backgroundColor: '#eee' }}>
          <Body>
            <Title style={{ color: '#000', paddingTop:5 }}>{I18n.t('register')}</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <View style={{ flex:1, justifyContent: 'flex-start', alignItems:'center' }}>
          <Thumbnail style={{ width:150,height:150, borderRadius: 150/2 }} source={ require('../Images/logo.jpeg') } />
        </View>
            
            <View style={ styles.centerView }>
            <Input label={I18n.t('name')} labelColor="#ccc" inputColor="#000" iconName="ios-cafe-outline" iconColor="red" iconSize={18} />
              <Input label={I18n.t('email')} labelColor="#ccc" inputColor="#000" iconName="ios-cafe-outline" iconColor="red" iconSize={18} />
              <Input label={I18n.t('username')} labelColor="#ccc" inputColor="#000" iconName="ios-cafe-outline" iconColor="red" iconSize={18} />
              <Input label={I18n.t('phone')} labelColor="#ccc" inputColor="#000" iconName="ios-cafe-outline" iconColor="red" iconSize={18} />
              <Input secureTextEntry={true} label={I18n.t('password')} labelColor="#ccc" inputColor="#000" iconName="ios-cafe-outline" iconColor="red" iconSize={18} />
            </View>

            <Button style={{ backgroundColor: '#eee', marginVertical:19 }} iconRight full>
            <Text style={{ color: '#000',}}>{I18n.t('register')}</Text>
            <Icon style={{ color: '#000' }} name={!I18nManager.isRTL ? 'ios-arrow-forward-outline' : 'ios-arrow-back-outline'} />
            </Button>
        </Content>

        <Footer>
          <FooterTab>
          <Button onPress={() => this.props.navigation.navigate('Login')} style={{ flexDirection:'row', justifyContent:'flex-end' }} iconRight full>
            <Text>{I18n.t('login')}</Text>
            <Icon  name={!I18nManager.isRTL ? 'ios-arrow-forward-outline' : 'ios-arrow-back-outline'} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default RegisterScreen