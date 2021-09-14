import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'
import { Divider } from 'react-native-elements';








export default function MenuPage({ navigation }: any) {


    return (

        <View>
            <Button
            containerStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
            titleStyle={{color:'black'}}
             iconPosition='left'
                icon={<Icon
                    name='livestream'
                    type='fontisto'
                    color='#517fa4'
                />}
               
                title="Create Categorie"
                onPress={() => navigation.navigate('categories')}
                type='clear'
               

            />
            <Divider insetType="middle" width={10} />
            <Button
            containerStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
            titleStyle={{color:'black'}}
                icon={<Icon
                    name='livestream'
                    type='fontisto'
                    color='#517fa4'
                />}
                title="Edit Categorie"
                type='clear'
            />
            <Divider insetType="middle" width={10} />
            <Button
            containerStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
            titleStyle={{color:'black'}}
                icon={<Icon
                    name='livestream'
                    type='fontisto'
                    color='#517fa4'
                />}
                title="Create Product"
                onPress={() => navigation.navigate('createproducts')}
                type='clear'
            />
            <Divider insetType="middle" width={10} />
            <Button
            containerStyle={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
            titleStyle={{color:'black'}}
                icon={<Icon
                    name='livestream'
                    type='fontisto'
                    color='#517fa4'
                />}
                title="Edit Product"
                type='clear'
            />
            <Divider insetType="middle" width={10} />

        </View>


    )
}