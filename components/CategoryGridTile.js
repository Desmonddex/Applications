import { View, Pressable, Text, StyleSheet, useWindowDimensions, Platform } from "react-native";
import {useNavigation} from "@react-navigation/native";

function CategoryGridTile({title, color, atPress}) {
  const newNavigate = useNavigation();
  const {height} = useWindowDimensions();
  const newHeight = height < 400 ? 75 : 150;
  return (
    <View style={[styles.gridItem, {height: newHeight}]}>
        <Pressable 
        style={({pressed}) => [styles.button, pressed ? styles.iosPress : null]}
        onPress={atPress}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
              <Text style={styles.title}>
                {title}
              </Text>
            </View>
        </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {width: 0,height: 2},
    shadowRadius: 8
    },
    button: {
      flex: 1
    },
    innerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    title: {
      fontWeight: "bold",
      fontSize: 15,
    },
    iosPress: {
      opacity: 0.5,

    }

});