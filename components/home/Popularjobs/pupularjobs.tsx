
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import Styles from "./popular.style"
import { useState } from "react"
import { COLORS, SIZES } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import JobaCard from "./PopularJobCards"
import FetchHook from "../../../hook/useFetchHook"

export default function JobCard(props: { navigation: any }) {

    const { data, isLoading, error } = FetchHook();
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerTitle}>Popular Jobs</Text>
                <TouchableOpacity>
                    <Text style={Styles.headerBtn}>Show All</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size={"large"}
                        color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList data={['one job card', 'two job card', 'three job card', 'four job card122']}
                        renderItem={({ item }) => (
                            <JobaCard handlePress={ } jobText={item} key={item} />
                        )}
                        keyExtractor={item => item}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}

            </View>
        </View>
    )


}