import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Perfil</Text>
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