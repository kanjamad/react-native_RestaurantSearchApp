import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    return (
        <View style={styles.view}>
            <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={()=> console.log('term was submitted')}
            />
            <Text> Search Screen </Text>
            <Text>{term}</Text>
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