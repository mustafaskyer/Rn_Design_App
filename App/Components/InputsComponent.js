import React, { Component } from 'react'
import { I18nManager } from 'react-native'
// import PropTypes from 'prop-types';
import { View, Text } from 'native-base'
import styles from './Styles/InputsComponentStyle'

/**
 * use package react-native-textinput-effects
 * github link => https://github.com/halilb/react-native-textinput-effects
 * created by mustafaskir@gmail.com
 *    @march 2018
 */
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fumi } from 'react-native-textinput-effects';

export default class InputsComponent extends Component {
  render () {
    return (

      <View style={[styles.card2,]}>
        <Fumi
            label={this.props.label}
            labelStyle={{ color: this.props.labelColor }}
            inputStyle={{ color: this.props.inputColor, textAlign: I18nManager.isRTL ? 'right' : 'left' }}
            iconClass={Ionicons}
            iconName={this.props.iconName}
            iconColor={this.props.iconColor}
            iconSize={this.props.iconSize}
            style={this.props.style}
            secureTextEntry={this.props.secureTextEntry}
            value={this.props.value}
          />
        </View>
    )
  }
}
