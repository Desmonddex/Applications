import { View, Text, StyleSheet } from "react-native";

function Subtitles({children}) {
    return (
    <View style={styles.subTextContainer}>
      <Text style={styles.subText}>{children}</Text>
    </View>
    );
}

export default Subtitles;

const styles = StyleSheet.create({
    subText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
       },
       subTextContainer: {
        borderBottomColor: "lime",
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4
       }
});
