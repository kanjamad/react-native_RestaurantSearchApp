import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View style={styles.view}>
            <SearchBar />
            <Text> Search Screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        backgroundColor:'white',
        height:1000
    }
});

export default SearchScreen;