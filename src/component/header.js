import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../component/colors';

const Header = props => {
    return (
        <View style={style.container}>
            <View style={{ width: '10%' }}>
               {
                  props.onBack &&
                  <TouchableOpacity onPress={props.onBack}>
                     <Icon name="arrowleft" type="antdesign" iconStyle={{ color: '#fff' }} />
                  </TouchableOpacity>
               }
            </View>
            <View style={{ width: '80%' }}>
               <Text style={{ color: '#fff', alignSelf: 'center', fontWeight: 'bold', fontSize: 18 }}>{ props.title }</Text>
            </View>
            <View style={{ width: '10%' }}></View>
        </View>
    );
}

export default Header;

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary 
    }
});