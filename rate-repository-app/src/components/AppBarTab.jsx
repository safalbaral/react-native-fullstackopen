import { Pressable } from "react-native"
import Text from "./Text"
import { Link } from "react-router-native"
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native"

const styles = StyleSheet.create({
    tabElements: {
        marginRight: 30,
        color: 'white',
    }
})

const AppBarTab = ({tabs}) => {
    return(
        <ScrollView horizontal>
        {tabs.map(tab => 
            <Pressable key={tab.name}>
                <Link key={tab.name} to={tab.link}>
                    <Text fontSize="subheading" fontWeight="bold" style={styles.tabElements}>{tab.name}</Text>
                </Link>
            </Pressable>
        )}
        </ScrollView>
    )
}

export default AppBarTab