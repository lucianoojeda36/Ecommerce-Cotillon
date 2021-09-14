import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import SwiperComponent from './src/components/swiper/SwiperComponent';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTabs from './src/pages/navigationtabs/NavigationTabs';
import Categories from './src/components/categories/Categories';
import { Provider } from 'react-redux'
import store from './src/store/Store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesProduct from './src/components/categoriesproduct/CategoriesProduct';
import MenuPage from './src/pages/menupage/MenuPage';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";
import CreateProducts from './src/components/products/CreateProducts';
import UploadImage from './src/components/uploadImage/UploadImage';




const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://192.168.0.227:3000/graphql',
  }),
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.sectionContainer}>
          <Stack.Navigator>
            <Stack.Screen name="navigationtabs" options={{ headerShown: false }} component={NavigationTabs} />
            <Stack.Screen name="categories" component={CategoriesProduct} />
            <Stack.Screen name="createproducts" component={CreateProducts} />
            <Stack.Screen name="uploadimage" component={UploadImage} />
            <Stack.Screen name="menupage" component={MenuPage} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
    </ApolloProvider>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flex: 1,
  },
});

export default App;
