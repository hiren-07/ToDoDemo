import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import colors from '../helper/colors';

const [ALL, COMPLETED, REMAINING]=[0,1,2]
export default function Footer(props) {
    
    return (
        <View style={styles.container}>
            <FontAwesome name={props.isAdd ? "close" : "plus"} size={20} color={"#000"} onPress={props.onAdd} />
            <View style={{flex:1}}>
            { !props.isAdd && <Text style={styles.counterText}>{props.countText}</Text> }
            </View>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=> props.onFilterBy(ALL)}>
                    <Text>All</Text>
                </TouchableOpacity>

                <View style={{width:1, backgroundColor:'#000'}} />

                <TouchableOpacity style={styles.buttonContainer} onPress={()=> props.onFilterBy(COMPLETED)}>
                    <Text>Completed</Text>
                </TouchableOpacity>

                <View style={{width:1, backgroundColor:'#000'}} />
                
                <TouchableOpacity style={styles.buttonContainer} onPress={()=> props.onFilterBy(REMAINING)}>
                    <Text>Remaining</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height:60,
    paddingBottom:20,
    paddingHorizontal:16,
    flexDirection:'row',
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  counterText:{
      fontSize:16,
      marginLeft:10,
      
  },
  tabContainer:{
      flexDirection:'row',
      borderColor: '#000',
      borderWidth: 1,
      borderRadius:30
      
  },
  buttonContainer:{
      paddingHorizontal:6,
      paddingVertical:4
  }

});
