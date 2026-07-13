import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

type TodoCardProps = {
  task: string;
  onDelete: () => void;
};

const TodoCard = ({ task, onDelete }: TodoCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.task}>{task}</Text>
      <Pressable onPress={onDelete}>
        <Text style={styles.deleteIcon}>🗑️</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  task: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 22,
  },
});

export default TodoCard;