import React from 'react'
import { Text, View, StyleSheet, FlatList, StatusBar, TouchableWithoutFeedback, Image, Alert } from 'react-native'
import CardComponent from '../card/CardComponent'
import { useQuery, gql } from '@apollo/client';

// const GET_PRODUCTS = gql`
// query products{
//   products{_id,name,description,price,stock,image}
// }
// `;

const GET_CATEGORY_PRODUCTS = gql`
  query  findCategory($_id:ID) {
    findCategory(_id:$_id){_id,title,products:products{_id,name,description,price,stock,image}}
  }
`;

// ,products:products{_id,name,description,price,stock,image}

export default function ListCards({id}: any) {

    // console.log("===id===>",id)

    // let id = props.id

    const { loading, error, data } = useQuery(GET_CATEGORY_PRODUCTS, {
        variables: { _id:id },
    });



    // console.log('que es data ========>', data && data.findCategory ? data.findCategory.products: "no existe")


    function _renderItem() {


        const array: any[] = []

        data && data.findCategory ? data.findCategory.products.map((e: any) => {
            array.push(<CardComponent props={e} key={e._id} />)

        }) : []





        return (
            <TouchableWithoutFeedback
                onPress={() => console.log("funciona")}
            >
                <View style={styles.CardsContainer}>
                    {array}
                </View>
            </TouchableWithoutFeedback>
        )
    }





    return (
        <FlatList
            data={[{}]}
            renderItem={() => _renderItem()}
        />

    )
}



const styles = StyleSheet.create({
    CardsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '5%',
    }
});


