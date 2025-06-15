import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';
import { WordCard } from './WordCard';

const WORDS = [
  { id: '1', word: 'antediluvian', definition: 'Extremely old; antiquated.' },
  { id: '2', word: 'pulchritude', definition: 'Physical beauty, especially of a woman.' },
  { id: '3', word: 'quotidian', definition: 'Occurring every day; daily.' },
  { id: '4', word: 'perspicacious', definition: 'Having a ready insight into and understanding of things.' },
  { id: '5', word: 'callipygian', definition: 'Having well-shaped buttocks.' }
];


export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
  });

  const [index, setIndex] = useState(0);
  const [reveal, setReveal] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const current = WORDS[index];

  const handlePress = () => {
    if (reveal) {
      setIndex(Math.floor(Math.random() * WORDS.length));
      setReveal(false);
    } else {
      setReveal(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.flex} onPress={handlePress}>
        <WordCard word={current.word} definition={current.definition} reveal={reveal} />
      </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});
