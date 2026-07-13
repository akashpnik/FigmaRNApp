import React, { useState } from 'react';
import { Task } from '../types/Task';
import CustomInput from '../components/CustomInput';
import {
  View,
  Text,
  Pressable,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import TodoCard from '../components/TodoCard';
import CustomButton from '../components/CustomButton';

const HomeScreen = () => {
  // const [tasks, setTasks] = useState([
  //   'Learn React Native',
  //   'Build Todo App',
  //   'Practice Props',
  // ]);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Learn React Native',
      completed: false,
    },
    {
      id: '2',
      title: 'Build Todo App',
      completed: false,
    },
    {
      id: '3',
      title: 'Practice Props',
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    // setTasks([...tasks, newTask]);
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: newTask,
        completed: false,
      },
    ]);
    setNewTask('');
  };
  const deleteTask = (indexToDelete: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Today's Work" />
      <View style={styles.body}>
        {/* <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={newTask}
          onChangeText={setNewTask}
        /> */}
        <CustomInput
  value={newTask}
  placeholder="Enter a task"
  onChangeText={setNewTask}
/>
        {/* <Pressable style={styles.button} onPress={addTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable> */}
        <CustomButton title="Add Task" onPress={addTask} />
        {/* {tasks.map((item, index) => (
          <TodoCard 
          key={index} 
          task={item} 
          onDelete={()=> deleteTask(index)}/>
        ))} */}
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TodoCard task={item.title} onDelete={() => deleteTask(index)} />
          )}
        />
      </View>

      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 8,
  //   padding: 12,
  //   marginBottom: 15,
  // },

  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginTop: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  body: {
    flex: 1,
  },

  footer: {
    height: 60,
  },
});

export default HomeScreen;

// import React from 'react';
// import { View, Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Header */}
//       <View>
//         <Text>My Tasks</Text>
//       </View>

//       {/* Body */}
//       <View>

//       </View>

//       {/* Footer */}
//       <View>

//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
