import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Categories from '../../components/categories/Categories';
import ListCards from '../../components/listcards/ListCards';
import SwiperComponent from '../../components/swiper/SwiperComponent';


export default function Inicio() {

    const [id, setId] = useState<any>(0)



    return (
        <View style={{ display: 'flex',flex:1,justifyContent:'center' }}>
            <View style={{ display: 'flex', height: '25%' }}>
                <SwiperComponent />
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Categories setId={setId} />
                </ScrollView>
            </View>
            <ListCards id={id} />
        </View>

    )
}

// style={{ display: 'flex', justifyContent: 'flex-start', flex: 0.3 }}