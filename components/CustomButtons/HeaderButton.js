import { Text, StyleSheet, View, Pressable } from "react-native";
import {Ionicons} from "@expo/vector-icons";


function HeaderButton({onTap, icon, color}) {
  return (
    
    
    <Pressable style={({pressed}) => pressed && styles.iosPress} onPress={onTap} >
       <Ionicons name={icon} color={color} size={24}/>
  </Pressable>
  
  
  );
  
 
}

export default HeaderButton;

const styles = StyleSheet.create({
    button: {
        color: "white",
        fontSize: 15,

    },
    iosPress: {
        opacity: 0.6
    }
});