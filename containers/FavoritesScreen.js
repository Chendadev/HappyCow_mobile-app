import { Text, View, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React, { Component } from 'react'
import data from "../assets/data.json";

export default function FavoritesScreen() {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text uniq>{data}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}