import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const producto1 = require('../../assets/producto1.jpg')



export default function (props: any) {

    return (
        <View style={{ width: '50%',height:300 }}>
            <Card containerStyle={styles.CardContainer}>
                <Card.Title>{props.props.name}</Card.Title>
                <Card.Image source={{ uri: props.props.image }} />
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 10 }}>
                        {props.props.description}
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableHighlight style={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'white' }}>
                            <Icon raised name='heart' type='foundation' size={15} />
                        </TouchableHighlight>
                        <TouchableHighlight style={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'white' }}>
                            <Icon raised name='shopping-cart' type='foundation' size={15} />
                        </TouchableHighlight>
                    </View>
                </View>
            </Card>
        </View>

    )
}



const styles = StyleSheet.create({
    CardContainer: {
        // width: '40%',
        // height: 'auto',
        // maxHeight: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,

    }
})