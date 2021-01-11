import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return(
    <View style={styles.Header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 20,
  }
})

export default Header;
