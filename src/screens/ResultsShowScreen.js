import React, { useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
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


    return (
        <View>
        <Text> ResultsShowScreen </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ResultsShowScreen;