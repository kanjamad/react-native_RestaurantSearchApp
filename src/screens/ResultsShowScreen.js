import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';


const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    // console.log(id);
    console.log(result);

    const getResult = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(()=>{
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
        <Text style={styles.title} > {result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=> photo}
            renderItem={({item})=> {
                return <Image style={styles.image} source ={{ uri: item }} />
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginLeft:15,
        marginBottom:5,
        marginTop:10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 10
        },
    container: {
        backgroundColor: 'white',
        height: 1000,
        flex: 1,
    }
})

export default ResultsShowScreen;