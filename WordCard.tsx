import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function WordCard({
  word,
  definition,
  reveal,
}: {
  word: string;
  definition: string;
  reveal?: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.word}>{word}</Text>
      {reveal && <Text style={styles.definition}>{definition}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
  },
  word: {
    fontSize: 28,
    marginBottom: 8,
  },
  definition: {
    fontSize: 18,
    lineHeight: 24,
    color: '#333',
  },
});
