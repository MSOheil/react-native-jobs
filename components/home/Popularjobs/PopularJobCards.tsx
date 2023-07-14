import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./popularcard.style";








export default function PopularJobsCard(props: {
    jobText: string, selectedJob: string
    , handlePress: any
}) {



    return (
        <TouchableOpacity
            style={styles.container(props.selectedJob, props.jobText)}
            onPress={() => props.handlePress(props.jobText)}
        >

        </TouchableOpacity>
    )
}