import { useQuery,gql } from '@apollo/client';
import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListCards from '../listcards/ListCards';



const GET_CATEGORY = gql`
  query categories{
    categories {
      _id
      title
    }
  }
`;

export default function Categories({setId}:any) {

    const categories: string[] = ['reposteria', 'cotillon', 'especiales', 'manualidades', 'descartables', 'novedades', 'promociones']

    const { loading, error, data } = useQuery(GET_CATEGORY);


    return (

        <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>

            {data && data.categories.length > 0 ? data.categories.map((e:any) => {
                return (
                    <Chip
                        key={e._id}
                        title={e.title}
                        // icon={{
                        //     name: "close",
                        //     type: "font-awesome",
                        //     size: 10,
                        //     color: "white",
                        // }}
                        onPress={()=>setId(e._id)}
                    />
                )
             })
             
             : categories.map((e:any) => {
                return (
                    <Chip
                        key={e}
                        title={e}
                        // icon={{
                        //     name: "close",
                        //     type: "font-awesome",
                        //     size: 10,
                        //     color: "white",
                        // }}
                    />
                )
             })}
        </View>


    )

}
