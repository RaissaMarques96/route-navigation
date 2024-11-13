import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Dashboard</Text>
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
    fontSize: 20,
  }
})