import { SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { useState } from "react";

const SearchInput = () => {
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState(null);

    return (
        <SafeAreaView>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            {/* <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            /> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default SearchInput;