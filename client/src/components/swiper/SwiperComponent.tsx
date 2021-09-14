import React  from 'react'
import { useState } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const imagen1 = require('../../assets/banner1.jpg')
const imagen2 = require('../../assets/banner2.jpg')
const imagen3 = require('../../assets/banner3.jpg')




const { width } = Dimensions.get('window')

const Slider = (props:any) => (<View >
    <Image style={styles.image} source={props.uri} />
</View>
)

const styles = {
    container: {
      
        // flex: 1,
       
        justifyContent: 'center'
    },
    image: {
        height:'100%',
        width:'100%'
       
    }
}


export default function SwiperComponent () {
    const [state, setState] = useState({
        imagesSlider: [imagen1,imagen2,imagen3]
    })



    return (
            <Swiper
                autoplay
                height={150}
                horizontal
            >
                {
                    state.imagesSlider.map((item, i) => <Slider
                        uri={item}
                        key={i}
                    />)
                }

            </Swiper>
    )

}




// import React from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'
 
// import Swiper from 'react-native-swiper'
 
// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })
 
// export default function SwiperComponent () {
 
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         <View style={styles.slide1}>
//           <Image source={require('../../assets/imagen1.jpg')}/>
//         </View>
//         <View style={styles.slide2}>
//         <Image source={require('../../assets/imagen2.jpg')}/>
//         </View>
//         <View style={styles.slide3}>
//         <Image source={require('../../assets/imagen3.jpg')}/>
//         </View>
//       </Swiper>
//     )
  
// }