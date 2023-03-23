import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealInfo from "./MealInfo";

function MealItem({id ,title, imageUrl, duration, complexity, affordability}) {
  const newNavigate = useNavigation();

  function selectedMealHandler() {
    newNavigate.navigate("mealDetailsScreen", {
      mealId: id
    });

  }

  return (
  <View style={styles.mealItem}>
    <Pressable style={({pressed}) => pressed ? styles.iosPress : null} onPress={selectedMealHandler}>
      <View>
      <View>
        <Image source={{uri: imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      </View>
       <MealInfo duration={duration} complexity={complexity} affordability={affordability}/>
      </View>
    </Pressable>
  </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,

  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.45,
    shadowOffset: {width: 0,height: 2},
    shadowRadius: 8
  },
   image: {
    width: "100%",
    height: 200,
   },
   title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 10
   },
   iosPress: {
    opacity: 0.5,

  }
});