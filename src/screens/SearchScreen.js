import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = () => {
        yelp.get('/search')
    };

    return (
        <View style={styles.view}>
            <SearchBar 
            term={term} 
            onTermChange={newTerm=>setTerm(newTerm)}
            onTermSubmit={()=> console.log('term was submitted')}
            />
            <Text> Search Screen </Text>
            <Text>We have found {results.length} results </Text>
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