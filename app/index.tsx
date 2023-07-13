import { View, Text } from 'react-native';



export default function Home(props: { navigation: any }) {
    const goToDetails = () => {
        props.navigation.navigate('Jobs'); // رفتن به صفحه Details
    };


    return (
        <View>
            <Text onPress={goToDetails}>Hello from index of home</Text>
        </View>
    )
}