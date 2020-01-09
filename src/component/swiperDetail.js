import React from 'react';
import { Dimensions, Image, StyleSheet, View, ImageBackground, Text } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SwiperDetail = ({onpress, data, activeDotIndex, that})=>{
   return(
      <View style={styles.container}>
         <Carousel
            loop
            autoplay
            autoplayDelay={500}
            autoplayInterval={4500}
            data={data}
            onSnapToItem={(index) => that.setState({ activeDotIndex: index }) }
            renderItem={(value)=>{
               return(
                  <Image source={{uri: value.item}} style={{ width: '100%', height:300, resizeMode: 'stretch'}} />
               )
            }}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
         />
         <Pagination
            dotsLength={data.length}
            activeDotIndex={activeDotIndex}
            containerStyle={{paddingVertical: 8, alignSelf: 'flex-start'}}
            dotColor={'#3781C5'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={"#C4C4C4"}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
         />
      </View>
   )
}

const { width, height } = Dimensions.get('window');
export default SwiperDetail;

const styles = StyleSheet.create({
   container: {
      // position:'absolute',
      // top:15,
      // elevation: 4,
      // shadowOpacity: 0.5,
      // shadowRadius: 5,
      // shadowColor: '#d3d3d3',
      // shadowOffset: { height: 0, width: 0 },
      backgroundColor: '#FFF',
      flex: 1,
   },
   child: {
      height: height * 0.4,
      width,
      //justifyContent: 'center',
   },
   img: {
      backgroundColor: '#000',
      width: '100%',
      height: 400,
      // aspectRatio: 702 / 420,
      resizeMode: 'stretch',
   },
   image: {
      height: height * 0.5,
      width,
   },
   images: {
      width: '100%',
      height: undefined,
      aspectRatio: 512 / 220,
      resizeMode: 'cover',
   },
   activeButton: {
      backgroundColor: '#ddd',
      width: 8,
      height: 8,
      borderRadius: 4,
      // position:'absolute',
      // left: 10, 
      // top:5,
      // bottom: 5
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
   },
   paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 4,
      marginHorizontal: 1,
      // position: 'absolute',
      // left: 5,
      // top: 5
   }
});
