import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    image:{
        height: Dimensions.get('window').height / 4,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
    },
    title:{
        fontWeight: 'Bolder',
        fontSize: 18,
        color: 'black',
    },
    description:{
        color:'black'
    },
    author:{
        fontStyle: "italic",
        textAlign: 'right',
        
    },
    inner_container:{
        padding: 5,
      
    },
    
})