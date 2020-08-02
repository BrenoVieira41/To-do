import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import styles from './styles'

const AnimetedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

import TaskList from './src/components/TaskList';

export default function App(){
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('')


  useEffect(() => {
    async function loadTask(){
      const taskStorage= await AsyncStorage.getItem('@task');

      if(taskStorage){
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTask();

  }, []);

  useEffect( () => {

    async function saveTask(){
      await AsyncStorage.setItem('@task', JSON.stringify(task))
    }

    saveTask();

  }, [task]);

  function handleAdd(){
    if(input === '') return;

    const data = {
      key: input,
      task: input
    };

      setTask([...task, data])
      setOpen(false);
      setInput('')

  }


  const handleDelete = useCallback( (data) => {
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      
      <View style={styles.content}>
        <Text style={styles.title}> Afazeres </Text>
      </View>

    <FlatList 
    marginHorizontal={10}
    showsHorizontalScrollIndicator={false}
    data={task}
    keyExtractor={ (item) => String(item.key) }
    renderItem={ ({ item }) => <TaskList data={item} 
    handleDelete={handleDelete} />}
    />

    
    <Modal animationType= "slide" transparent={false} visible={open}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress= { () => setOpen(false) }>
            <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#EE82EE" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}> Nova tarefa </Text>
        </View>
        
        <View style={styles.modalBody}>
          <TextInput
          multiline={true}
          autoCorrect={false}
          placeholder="Oque precisamos fazer hoje ?"
          style={styles.input}
          value={input}
          onChangeText={ (texto) => setInput(texto) }
          />

          <TouchableOpacity style={styles.handleAdd} onPress={handleAdd} >
            <Text style={styles.handleAddText}> Anotar </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </Modal>


    <AnimetedBtn style={styles.fab}
    style={styles.fab}
    useNativeDriver
    animation="bounceInUp"
    duration={1500}
    onPress={ () => setOpen(true) }
    >
      <Ionicons name="ios-add" size={35} color="#000" />
    </AnimetedBtn>

    </SafeAreaView>
  )
};

