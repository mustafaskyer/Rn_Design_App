import React, { PropTypes } from "react";
import { View, ScrollView, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation, I18nManager } from "react-native";
import { connect } from "react-redux";
import styles from "./Styles/LoginScreenStyles";
import { Images, Metrics } from "../Themes";
import LoginActions from "../Redux/LoginRedux";
import { Content, Container, Header, Left, Right, Body, Button, Text, Title, Icon, Footer, FooterTab, Thumbnail } from 'native-base'

import Input from '../Components/InputsComponent'
import I18n from 'react-native-i18n'

class LoginScreen extends React.Component {
	

	handlePressLogin = () => {
		this.props.navigation.navigate("LaunchScreen");
	};

	render() {
		return(
			<Container>
        <Header style={{ backgroundColor: '#eee' }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{ color: '#eee' }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{  color: '#eee', paddingTop:5 }}>{I18n.t('login')}</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <View style={{ flex:1, justifyContent: 'flex-start', alignItems:'center' }}>
          <Thumbnail style={{ width:150,height:150, borderRadius: 150/2 }} source={ require('../Images/logo.jpeg') } />
        </View>
            
            <View style={ styles.centerView }>
              <Input value='ssss' label={I18n.t('email_username')} labelColor="#ccc" inputColor="#000" iconName="md-person" iconColor="red" iconSize={18} />
              <Input secureTextEntry={true} label={I18n.t('password')} labelColor="#ccc" inputColor="#000" iconName="md-lock" iconColor="red" iconSize={18} />
            </View>

            <Button onPress={() => this.props.navigation.navigate('HomeScreen')} style={{ backgroundColor: '#eee' }} iconRight full>
            <Text style={{ color: '#000' }}>{I18n.t('login')}</Text>
            <Icon style={{ color: '#000' }} name={!I18nManager.isRTL ? 'ios-arrow-forward-outline' : 'ios-arrow-back-outline'} />
            </Button>
        </Content>

        <Footer>
          <FooterTab>
          <Button onPress={() => this.props.navigation.navigate('RegisterScreen')} style={{ flexDirection:'row', justifyContent:'flex-end' }} iconRight full>
            <Text>{I18n.t('register')}</Text>
            <Icon  name={!I18nManager.isRTL ? 'ios-arrow-forward-outline' : 'ios-arrow-back-outline'} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		fetching: state.login.fetching,
	};
};


export default connect(mapStateToProps)(LoginScreen);
