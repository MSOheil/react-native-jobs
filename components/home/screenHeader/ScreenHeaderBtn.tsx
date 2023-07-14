import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./screenheader";





export default function ScreenHeaderBtn(props: { iconUrl: any, dimension: any, handlePress?: any }) {



    return (
        <TouchableOpacity style={styles.btnContainer}
            onPress={props.handlePress}>
            <Image source={props.iconUrl}
                resizeMode="cover"
                style={styles.btnImg(props.dimension)} />
        </TouchableOpacity>
    )
}