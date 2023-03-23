import { View, StyleSheet, Text } from "react-native";

function MealInfo({duration, complexity, affordability, style, textStyle}) {
 return (
 <View style={[styles.info, style]}>
 <Text style={[styles.infoItem, textStyle]}>{duration} minutes</Text>
 <Text style={[styles.infoItem, textStyle]}>{complexity.toUpperCase()}</Text>
 <Text style={[styles.infoItem, textStyle]}>{affordability.toUpperCase()}</Text>
</View>
);

}

export default MealInfo;

const styles = StyleSheet.create({
    info: {
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    
       },
    infoItem: {
        marginHorizontal: 5,
        fontSize: 15,
    
       },
       
});