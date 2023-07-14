import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenHeaderBtn from "./screenHeader/ScreenHeaderBtn"
import { COLORS, icons, images, SIZES } from "../../constants"
import { ScrollView } from 'react-native-gesture-handler';
import Welcome from "./wellCome/index"
import Popularjobs from "./Popularjobs/pupularjobs"
import Nearbyjobs from "./Nearbyjobs"




export default function Home(props: { navigation: any }) {


    const goToDetails = () => {
        props.navigation.navigate('Jobs'); // رفتن به صفحه Details
    };

    const Stack = createStackNavigator();

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <Welcome navigator={Stack.Navigator} />
                    <Popularjobs navigation={props.navigation} />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}