import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params:{
                limit:50,
                term,
                location:'San Jose'
            }
        });
        setResults(response.data.businesses);
    };

    return (
        <View style={styles.view}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
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