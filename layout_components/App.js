import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";

import ToDoForm from "./components/ToDoForm.js";
import ToDoList from "./components/ToDoList.js";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Do laundry", completed: true },
    { id: 2, text: "Go to gym", completed: false },
    { id: 3, text: "Walk dog", completed: true },
  ]);
  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: taskText, completed: false },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View sytle={styles.appContainer}>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask={addTask}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appContainer: {
    flex: 1,
    padding: 20,
  },
});

export default App;
