import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there!')
        try {
        const response = await yelp.get('/search', {
            params:{
                limit:50,
                term:searchTerm,
                location:'San Jose'
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component
    // is first rendered. BAD CODE!
    // searchApi('pasta')
    useEffect(()=> {
        searchApi('pasta');
    },[])

    return (
        <View style={styles.view}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=> searchApi(term)}
            />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
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