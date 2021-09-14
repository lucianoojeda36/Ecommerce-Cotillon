import React, { useState } from "react";
import { Alert, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { useMutation, gql } from '@apollo/client';


const POST_CATEGORY = gql`
mutation  createCategory ($title: String) {
    createCategory(input:{title:$title})
    {_id,title}
}`;

interface Categorydata {
    _id: number,
    title: String,
  }



export default function CategoriesProduct() {

    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    console.log('========>',error)

    // <{ createCategory: Categorydata },{ name: String }>

    const [createCategory] = useMutation<{ createCategory: Categorydata },{ title: String }>(POST_CATEGORY,{ onError: (err:any) => {
        setError(err);
    }});

    return (
        <View>
            <Input
                placeholder='CATEGORY NAME'
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => setTitle(value)}
            />
            <Button 
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title="CREATE"
                onPress={()=>{
                    console.log(title)
                    createCategory({variables: { title }})
                    Alert.alert('creada')
                } }
            />
        </View>
    )
}