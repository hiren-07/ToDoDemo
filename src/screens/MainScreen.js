import { FlatList, StyleSheet, Text, View } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputText  from '../components/InputText';
import InputTextSearch from '../components/InputTextSearch';
import { StatusBar } from 'expo-status-bar';
import colors from '../helper/colors';
import {useState} from 'react';

const [ALL, COMPLETED, REMAINING]=[0,1,2]
const ITEM_INIT = {
    id:0,
    completed: false,
    title:'',
    deleted:false
}

const Item = ({ item, onSelect, onDelete }) => (
    <View style={styles.itemContainer} >
        <FontAwesome name={ item.completed ? 'check-square' : 'square-o' } size={20} color={colors.primary} onPress={onSelect} />
        <Text style={[styles.itemText, item.completed ? {textDecorationLine: 'line-through',
      textDecorationStyle: 'solid'}:{}]}>{item.title}</Text>
        <FontAwesome5 name={"trash"} size={20} color={colors.primary} onPress={onDelete} /> 
    </View>
  );
export default function MainScreen() {
    const [list, setList]= useState([])
    const [addItem, setAddItem] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [filterBy, setFilterBy] = useState(ALL)
   const addTodo=(title)=>{
        setList([...list, {...ITEM_INIT, title, id: `id${list.length}`}])
        setAddItem(false)
        
    }
    const renderItem = ({ item, index }) => (
        <Item item= {item} 
            onDelete={()=>{
                let newList = list.filter((itm)=> item.id !=itm.id )
                setList(newList)
            }}
            onSelect={()=>{
                let newList = [...list]
                newList[index].completed= !newList[index].completed
                setList(newList)
        }}/>
      );
    let newList = list ;
    if(searchText.length > 0){
        newList = newList.filter((li)=> li.title.toLowerCase().includes(searchText.toLowerCase()))
    }
    if(filterBy != ALL){
        newList = newList.filter((li)=> filterBy == COMPLETED ? li.completed == true : li.completed == false )
    }
    return (
        <View style={styles.container}>
        <StatusBar style="light" />
        <Header text={"To Do List"}/>
        
        {addItem ? <InputText rightIcon onRightPress={addTodo} placeholder={"Add Item"} /> : <InputTextSearch placeholder={"Search..."} onTextChange={(searchText)=>setSearchText(searchText)}/>}
        <View style={styles.listContainer}>
            <FlatList
                data={ newList }
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
        <Footer 
            isAdd={addItem} 
            countText={`${searchText.length == 0 ? list.length : newList.length} Items`}
            onAdd={()=> {
                setSearchText('')
                setAddItem(!addItem)
            }} 
            onFilterBy={(filter)=> setFilterBy(filter)}
        />  
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop:36
  },
  listContainer:{
      flex:1
    },
  itemContainer:{
    paddingVertical:4,
    paddingHorizontal:12,
      flexDirection:'row',
      alignItems:'center'

  },
  itemText:{
      color:'#fff',
      flex:1,
      marginLeft:8
      
  }
});
