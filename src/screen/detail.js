import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Paralax from 'react-native-parallax-scroll-view'
import SwiperDetail from '../component/swiperDetail'
import {Actions} from 'react-native-router-flux'
import Colors from '../component/colors'

export default class Detail extends Component {

   state={
      headerHeight: Dimensions.get('window').height * 0.1,
      activeDotIndex: 0
   }

   render() {
      return (
         <View style={styles.container}>
            <Paralax
               backgroundColor={Colors.primary}
               headerBackgroundColor= "#333"                    
               stickyHeaderHeight={ this.state.headerHeight }
               parallaxHeaderHeight={Dimensions.get('window').height * 0.35}
               backgroundSpeed={20}
                  renderForeground={() => (
                     <View style={{ width: '100%', height: Dimensions.get('window').height * 0.35, backgroundColor: 'green'}}>
                        <SwiperDetail data={this.props.data.image_slider} activeDotIndex={this.state.activeDotIndex} that={this} />
                     </View>
                  )}
                  renderStickyHeader={() => (
                     <View style={{ padding: 10 }} onLayout={(e) => this.setState({ headerHeight: e.nativeEvent.layout.height }) }>
                           <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                              <TouchableOpacity onPress={ () => Actions.pop() } style={{ elevation: 3, position: 'absolute', left: 10 }}>
                                 <Icon name='arrowleft' size={30} color='#FFF'/>
                              </TouchableOpacity>
                              <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 22, width: '50%', color: '#FFF' }} numberOfLines={2}>
                                 {this.props.data ? this.props.data.nama : ''}
                              </Text>
                           </View>
                     </View>
                  )}
                  ref='_scrollView'
               >
                  <View style={{ flex:1, paddingHorizontal: 10 }}>
                     <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{this.props.data.nama}</Text>
                     <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 17, textAlign: 'justify' }}>{this.props.data.detail}</Text>
                     </View>
                  </View>
            </Paralax>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF'
   }
})
