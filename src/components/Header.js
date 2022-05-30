import { StyleSheet, Text, View } from 'react-native';

import colors from '../helper/colors';

export default function Header({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height:48,
    justifyContent: 'center',
  },
  text:{
      color:"#000",
      fontSize:20,
      fontWeight:'500',
      marginLeft:20
  }
});
