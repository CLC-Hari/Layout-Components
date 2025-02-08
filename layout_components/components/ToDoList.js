import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task) => (
        <Pressable key={task.id}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
