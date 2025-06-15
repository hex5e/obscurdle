import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';

const WORDS = [
  { id: '1', word: 'antediluvian', definition: 'Extremely old; antiquated.' },
  { id: '2', word: 'pulchritude', definition: 'Physical beauty, especially of a woman.' },
  { id: '3', word: 'quotidian', definition: 'Occurring every day; daily.' },
  { id: '4', word: 'perspicacious', definition: 'Having a ready insight into and understanding of things.' },
  { id: '5', word: 'callipygian', definition: 'Having well-shaped buttocks.' }
];

function WordCard({ word, definition }: { word: string; definition: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.definition}>{definition}</Text>
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={WORDS}
        renderItem={({ item }) => <WordCard word={item.word} definition={item.definition} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  list: {
    padding: 16,
  },
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
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 28,
    marginBottom: 8,
  },
  definition: {
    fontSize: 18,
    lineHeight: 24,
    color: '#333',
  },
});
