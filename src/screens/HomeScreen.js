//import react
import React, {useState} from "react";

//import react native components
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [screens, setScreens] = useState(['section', 'section', 'section', 'section', 'section','section','section','section','section','section',])
  return (
    <View>
      {
        screens.map((item, index) => (
          <View style={styles.Item} key={index}>
            <Text style={styles.Text}>{item} - {index}</Text>
          </View>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  Item: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    backgroundColor: 'green'
  },
  Text: {
    color: '#fff',
    fontSize: 18
  }
});

export default HomeScreen;
