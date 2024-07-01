import { Pressable } from "react-native"
import Text from "./Text"

const AppBarTab = ({tabs}) => {
    return(
        tabs.map(tab => <Pressable key={tab.name}><Text fontSize="subheading" fontWeight="bold" style={{color: 'white'}}>{tab.name}</Text></Pressable>)
    )
}

export default AppBarTab