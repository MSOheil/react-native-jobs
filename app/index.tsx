import { View, Text, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, icons, images, SIZES } from "../constants"
import { ScrollView } from 'react-native-gesture-handler';
import Welcome from "../components/home/wellCome/index"
import Popularjobs from "../components/home/Popularjobs/index"
import Nearbyjobs from "../components/home/Nearbyjobs"
export default function Home(props: { navigation: any }) {
    const goToDetails = () => {
        props.navigation.navigate('Jobs'); // رفتن به صفحه Details
    };

    const Stack = createStackNavigator();

    return (
        <View>
            <Text>Helo</Text>
        </View>
    )
}