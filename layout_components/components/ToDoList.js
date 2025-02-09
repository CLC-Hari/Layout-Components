import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.listContainer}>
      {tasks.map((task) => (
        <Pressable key={task.id}>
          <View style={[styles.task, task.completed && styles.completedTask]}>
            <Text style={[styles.taskText, task.completed && styles.completedText]}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 20,
  },
  task: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
});
