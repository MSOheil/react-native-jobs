import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Home from "./index"
import { COLORS, icons, images } from '../../constants';
import ScreenHeaderBtn from './screenHeader/ScreenHeaderBtn';
import { NavigationContainer } from '@react-navigation/native';





export default function HomeScreen() {


    const Layout = () => {
        const [fontsLoaded] = useFonts({
            DMBold: require('../../assets/fonts/DMSans-Bold.ttf'),
            DMMedium: require('../../assets/fonts/DMSans-Medium.ttf'),
            DMRegular: require('../../assets/fonts/DMSans-Regular.ttf'),
        });

        if (!fontsLoaded) {
            return null;
        }
    }
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
                    headerRight: () => <ScreenHeaderBtn iconUrl={images.msoheil} dimension="100%" />,
                    headerTitle: "",
                }}
            />
        </Stack.Navigator>
    );
};