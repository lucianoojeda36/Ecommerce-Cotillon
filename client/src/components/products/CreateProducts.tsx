import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { useMutation, useQuery, gql } from '@apollo/client';
import RNSingleSelect from "@freakycoder/react-native-single-select";
import UploadImage from "../uploadImage/UploadImage";
import { useSelector } from "react-redux";


type Int = number
type ID = number


const GET_CATEGORY = gql`
  query categories{
    categories {
      _id
      title
    }
  }
`;

const POST_PRODUCT = gql`
mutation  createProduct ($id:ID,$name: String ,$description: String, $price: Int, $stock: Int, $image: String) {
    createProduct(_id:$id, input:{name:$name,description:$description,price:$price,stock:$stock,image:$image})
    {_id,name,description,price,stock,image}
}`;



interface Productdata {
    name: String
    description: String
    price: number
    stock: number
    image: String
}

interface ProductData {
    _id: ID
    name: String
    description: String
    price: Int
    stock: Int
    image: String
}

interface ISingleSelectDataType {
    id: number;
    value: string;
    imageSource?: any;
    data?: any;
  }

export default function CreateProducts({navigation}:any) {


    const [name, setName] = useState('')
    const [id, setId] = useState(0)
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    // const [image, setImage] = useState('')
    const [error1, setError1] = useState('')

    const image = useSelector((state:any) => state.ProductReducer.image)


    const [createProduct] = useMutation<{ createProduct: ProductData }, {id: ID,name: String, description: String, price: Int, stock: Int, image: String }>(POST_PRODUCT, {
        onError: (err: any) => {
            setError1(err);
        }
    });

    const { loading, error, data } = useQuery(GET_CATEGORY);

    const data1= data ? data.categories.map((e:any)=>{return e}): "no existe"


    const data2 = []

if(data1){
    for (const i of data1) {
            const result = {id:i._id, value:i.title}
            data2.push(result)
       
    } 

}else{
    return <Text>no existe</Text>
}
    

    return (
        <View>
            <RNSingleSelect
                data={data2}
                onSelect={(selectedItem: ISingleSelectDataType) =>{
                    setId(selectedItem.id)
                } }
            />
            <Input
                placeholder='PRODUCT NAME'
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => setName(value)}
            />
            <Input
                placeholder='DESCRIPTION'
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={value => setDescription(value)}
            />
            <Input
                placeholder='PRICE'
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={(value: any) => { setPrice(parseInt(value)) }}
            />
            <Input
                placeholder='STOCK'
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={(value: any) => setStock(parseInt(value))}
            />
               <Button
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title="ADD IMAGE"
                onPress={() => navigation.navigate('uploadimage')}
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
                onPress={() => {
                    console.log(name)
                    createProduct({ variables: {id,name, description, price, stock, image } })
                    Alert.alert('creado el propducto')
                }}
            />
        </View>
    )
}

