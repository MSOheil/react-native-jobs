import { View, Text, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import styles from "./wellcome.style";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SIZES, icons } from "../../../constants";
import { useState } from "react";






export default function WellCome(props: { navigator: any }) {
    const Stack = createStackNavigator();
    const [activejobType, setActivejobType] = useState('Full-Time');
    const jobs = ["Full-Time", "Part-time", "Contractor"];
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello Msoheil</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput}
                        value=""
                        onChange={() => { }}
                        placeholder="شغل مدنظرتون را بنویسید" />
                </View>
                <TouchableOpacity style={styles.searchBtn}
                    onPress={() => { }}>
                    <Image style={styles.searchBtnImage} source={icons.search} />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobs}
                    renderItem={
                        ({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activejobType, item)}
                                onPress={() => {
                                    setActivejobType(item);
                                    props.navigator(`/search/${item}`)
                                }}>
                                <Text style={styles.tabText(activejobType, item)}>{item}</Text>
                            </TouchableOpacity>

                        )} keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal />
            </View>
        </View>
    )
}