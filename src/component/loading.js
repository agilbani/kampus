import React from 'react';
import { View, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import Colors from './colors';

const CustomLoader = ({show}) => {
    return (
        <Modal visible={show} transparent={true}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color= {Colors.primary} />
            </View>
        </Modal>
    );
}

export default CustomLoader;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    }
})
