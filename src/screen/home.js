import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { db } from '../config'

let itemRefs = db.ref('/kampus')

export default class Home extends Component {

	state={
		items: []
	}

	componentDidMount(){
		itemRefs.on('value', snapshot => {
			let data = snapshot.val();
			let items = Object.values(data);
			this.setState({ items });
		});
	}

	render() {
		console.log("log item", this.state.items);
		
		return (
			<View style={{ flex:1 }}>
				<Text> Home </Text>
			</View>
		)
	}
}
