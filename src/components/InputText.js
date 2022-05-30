import { StyleSheet, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import colors from './../helper/colors'
import {useState} from 'react'

export default function InputText(props) {
    const [val, setVal]= useState('')
    return (
        <View style={styles.container}>
            <TextInput 
                value={val}
                placeholder={props.placeholder}
                placeholderTextColor={"gray"}
                onChangeText={props.onTextChange ? props.onTextChange :(val)=> setVal(val)}
                style={styles.input}
            />
            {props?.rightIcon && <FontAwesome name="check" size={20} color={colors.primary} 
                        onPress={()=> {
                            setVal('')
                            props.onRightPress(val)}} />}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth:1,
    borderRadius: 5,
    margin:8,
    paddingHorizontal:12,
    paddingVertical:2
  },
  input:{
      flex:1,
      paddingVertical:8,
      color:'#fff',
      fontSize:16
  }
});
