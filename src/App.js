import React from "react";
import { SafeAreaView,View,Text,FlatList,StyleSheet,ScrollView,Image,Dimensions } from "react-native";
import news_data from './news_data.json'
import news_banner_data from './news_banner_data.json'
import NewsCard from "./components/NewsCard";

function App(){

  const renderNews = ({item}) => <NewsCard news={item} />

return(
  <View style={styles.container}>
   
    <Text style = {styles.header_text}>News</Text>
    <FlatList
    ListHeaderComponent={() => (

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {
        news_banner_data.map(bannerNews => (<Image style={styles.banner_image} source={{uri: bannerNews.imageUrl}}/>))
      }
    </ScrollView>

    )}
    keyExtractor={item => item.u_id.toString()}
    data={news_data}
    renderItem={renderNews}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1 ,
    backgroundColor: '#eceff1',
    
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width /3
  },
  header_text:{
    fontWeight: 'bold',
    fontSize:35,
    paddingLeft:15,
    color:'black'
  }
})

export default App;