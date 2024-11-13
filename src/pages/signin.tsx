import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigatorProps } from "../routes";



export default function SignIn() {
  const {navigate} = useNavigation<StackNavigatorProps>()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate("dashboard")}>
        <Text style={styles.title}>Sign-in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 20
  }
})