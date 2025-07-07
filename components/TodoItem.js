import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View style={[styles.todoItem, task.completed && styles.completedItem]}>
      <CheckBox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
        tintColors={{ true: '#28a745', false: '#adb5bd' }}
        style={styles.checkbox}
      />
      <Text style={[styles.todoItemText, task.completed && styles.completed]}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTask(task.id)}
      >
        <Text style={styles.deleteButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  completedItem: {
    backgroundColor: '#f8f9fa',
    borderLeftColor: '#28a745',
    opacity: 0.8,
  },
  checkbox: {
    marginRight: 12,
  },
  todoItemText: {
    flex: 1,
    fontSize: 16,
    color: '#212529',
    lineHeight: 24,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#6c757d',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 8,
    shadowColor: '#dc3545',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 3,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
