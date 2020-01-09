import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Header from '../component/header'
import Loading from '../component/loading'

import { db } from '../config'

let itemRefs = db.ref('/kampus')

export default class Home extends Component {

	state={
		items: [],
		loading: true
	}

	componentDidMount(){
		itemRefs.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			this.setState({ items, loading: false });
		});
	}

	render() {
		console.log("log item", this.state.items);
		
		return (
			<View style={{ flex:1 }}>
				<Header title="50 Kampus Yogyakarta" />
				<Loading show={this.state.loading} />
				<FlatList
					data={this.state.items}
					extraData={this.state}
					renderItem={({ item }) => this.Item(item)}
        			keyExtractor={item => item.nama}
				/>
			</View>
		)
	}

	Item(item) {
		return (
			<TouchableOpacity onPress={()=> Actions.detail({data: item})} style={styles.card}>
				<Image source={{uri: item.image_url}} style={{width: '30%', height: 100, resizeMode: 'contain'}} />
				<View style={styles.content}>
					<Text style={{ fontSize: 19, fontWeight: 'bold' }} numberOfLines={2}>{item.nama}</Text>
					<Text style={{ fontSize: 15, width: '100%', marginVertical: 7 }} ellipsizeMode='tail' numberOfLines={3}>{item.detail}</Text>
				</View>
			</TouchableOpacity>
		);
	}
	 
}

const styles = StyleSheet.create({
	card: {
		width: '95%',
		alignSelf: 'center',
		marginTop: 20,
		paddingVertical: 10,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		borderRadius: 5,

		//shadow
		elevation: 3,
		borderColor: 'darkgrey',
		shadowColor: 'darkgrey',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
	},
	content: {
		width: '70%',
		paddingHorizontal: 10
	}
})
