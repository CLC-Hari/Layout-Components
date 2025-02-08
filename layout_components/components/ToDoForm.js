import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const ToDoForm = ({addTask}) => {
  const [taskText, setTaskText] = useState('');
  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  };
  return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={taskText}
          onChangeText={setTaskText}
        />
        <Button title="Add" onPress={handleAddTask}/>
      </View>
  )
}

export default ToDoForm;

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
})