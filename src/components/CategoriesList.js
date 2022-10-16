import React from "react";
import {View, Text, FlatList, StyleSheet, Button,TouchableOpacity} from 'react-native';

const CategoriesList = () => {
const categories=[
    {category:'drama',key:'1'},
    {category:'action',key:'2'},
    {category:'anime',key:'3'},
    {category:'literature',key:'4'},
    {category:'crime',key:'5'},
    {category:'Horror',key:'6'},
    {category:'Classics',key:'7'},
   
];
return (
<View style={style.viewStyle}>
<FlatList
horizontal
data={categories}
renderItem={({item})=>{
    return (<TouchableOpacity >
        <Text style={style.buttonsStyle}>{item.category}</Text>
    </TouchableOpacity>
    );
}}

/></View>




);
};

const style = StleSheety.create({
    viewStyle:{
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor:"#3d0a3d"
    },
    buttonsStyle:{
        fontSize: 20,
        color:'#65e0c3',
        backgroundColor:'#ba1705',
        borderRadius: 22,
        paddingHorizontal: 12,
        paddingVertical: 1,
        marginHorizontal: 4,


    },
});

export default CategoriesList;