import { StatusBar } from 'expo-status-bar'; import React, { useState, useEffect } from 'react'; import * as Notifications from 'expo-notifications';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'; import { deck1741 } from './decks.js'; 
import {tenExample1,tenExample2,tenExample3,tenExample4,tenExample5,tenExample6,tenExample7,tenExample8,tenExample9,tenExample10,tenExample11,tenExample12,tenExample13,tenExample14,tenExample15,tenExample16,tenExample17,tenExample18,tenExample19,tenExample20} from './tenExamplesMobile.js'; 
export default function App() {
  const [displayedExamples, setDisplayedExamples] = useState([]); const [opacity, setOpacity] = useState(1); 
  const [textColorWhite, setTextColorWhite] = useState(false); const [backgroundImage, setBackgroundImage] = useState(require('./assets/background.png'));
  const [currentCardIndex, setCurrentCardIndex] = useState(0); const currentCard = deck1741[currentCardIndex]; 
  
  function getExamplesForCurrentIndex(index){const examplesArray=[tenExample1, tenExample2, tenExample3, tenExample4, tenExample5,tenExample6, tenExample7, tenExample8, tenExample9, tenExample10,
      tenExample11, tenExample12, tenExample13, tenExample14, tenExample15,tenExample16, tenExample17, tenExample18, tenExample19, tenExample20,];return examplesArray[index % examplesArray.length];}
  
  const handleExamplesPress = ()=>{if (displayedExamples.length === 0){const getExamplesForCurrentCard = getExamplesForCurrentIndex(currentCardIndex);setDisplayedExamples(getExamplesForCurrentCard); setOpacity(0);} else {setDisplayedExamples([]);setOpacity(1);}};
  const handleJishoPress = ()=>{Linking.openURL(currentCard.jishoLink);}; const handleJimBreenPress = () => {Linking.openURL(currentCard.jimLink);};
  const handleTextColorChange = ()=> {setTextColorWhite(!textColorWhite); setBackgroundImage(backgroundImage === require('./assets/background.png') ? require('./assets/purpleBackground.png') : require('./assets/background.png'));};
  const oneCard = deck1741[0]; const twoCard = deck1741[1]; const threeCard = deck1741[2]; const fourCard = deck1741[3]; const fiveCard = deck1741[4]; const sixCard = deck1741[5]; const sevenCard = deck1741[6]; const eightCard = deck1741[7]; const nineCard = deck1741[8]; const tenCard = deck1741[9]; const elevenCard = deck1741[10]; const twelveCard = deck1741[11]; const thirteenCard = deck1741[12]; const fourteenCard = deck1741[13]; const fifteenCard = deck1741[14]; const sixteenCard = deck1741[15]; const seventeenCard = deck1741[16]; const eighteenCard = deck1741[17]; const nineteenCard = deck1741[18]; const twentyCard = deck1741[19];
  
  useEffect(() => {scheduleNotifications(); const subscription = Notifications.addNotificationResponseReceivedListener(response => {
        const index = response.notification.request.content.data.index; setCurrentCardIndex(index);}); return () => subscription.remove();}, []); 
        
  const scheduleNotifications = async ()=>{for (let i = 0; i < deck1741.length; i++){await Notifications.scheduleNotificationAsync({content:{// body: deck1741[i].kanji,
        title: deck1741[i].kanji, data: {index: i},},   trigger: {seconds: 15 * (i + 1)},});}};

  return (<View style={styles.container}>
      <Image  source={backgroundImage}style={styles.backgroundImage}/><View style={styles.cardContainer}>
        <Text style={[styles.cardNumber, styles.cardNumberPosition, {opacity: textColorWhite ? 0.5 : .3, color: textColorWhite ? 'white' : '#4F4C52'}]}>{currentCard.cardNumber}</Text>
        <Text style={[styles.kanji, styles.kanjiPosition, {opacity, color: textColorWhite ? 'white' : '#4F4C52' }]}>{currentCard.kanji}</Text>
        <Text style={[styles.hiragana, styles.hiraganaPosition, {opacity, color: textColorWhite ? 'white' : '#4F4C52' }]}>{currentCard.hiragana}</Text>
        <Text style={[styles.english, styles.englishPosition, {opacity, color: textColorWhite ? 'white' : '#4F4C52' }]}>{currentCard.english}</Text>
        <Text style={[styles.example1, styles.example1Position, {opacity, color:'#6E6C6F' }]}>{currentCard.example1}</Text>
        <Text style={[styles.example2, styles.example2Position, {opacity, color: '#6E6C6F' }]}>{currentCard.example2}</Text></View>

      <TouchableOpacity style={[styles.jishoButton, {opacity}]} onPress={handleJishoPress}><Text style={styles.buttonText}>jisho.org</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.jimBreenButton, {opacity}]} onPress={handleJimBreenPress}><Text style={styles.buttonText}>Jim Breen</Text></TouchableOpacity>
      <TouchableOpacity style={styles.examplesButton} onPress={handleExamplesPress}><Text style={styles.buttonText}>10 examples</Text></TouchableOpacity>
      <TouchableOpacity style={styles.textColorButton} onPress={handleTextColorChange}><Text style={styles.buttonText}></Text></TouchableOpacity>
        <ScrollView style={[styles.examplesContainer, {opacity: displayedExamples.length > 0 ? 1 : 0 }]} contentContainerStyle={styles.scrollViewContent}>
            {displayedExamples.map((example, index) => (<Text key={index} style={styles.exampleText}>{example}</Text>))}</ScrollView><StatusBar style="auto" /></View>);}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',},
  cardContainer: {position: 'absolute', alignItems: 'center',},
  cardNumber: {fontSize: 15, textAlign: 'center', position: 'absolute', color: 'rgba(79, 76, 82, 0.5)',}, cardNumberPosition: {top: -90,},
  kanji: {fontSize: 58, textAlign: 'center', position: 'absolute', color: '#4F4C52', alignSelf: 'center'}, kanjiPosition: {top: -270,},
  hiragana: {fontSize: 23, textAlign: 'center', position: 'absolute', color: '#4F4C52', alignSelf: 'center'}, hiraganaPosition: {top: -175,},
  english: {fontSize: 24, textAlign: 'center', position: 'absolute', color: '#4F4C52', alignSelf: 'center'}, englishPosition: {top: -137,},
  example1: {fontSize: 21, textAlign: 'center', position: 'absolute', color: '#6E6C6F', alignSelf: 'center' }, example1Position: {top: 41,},
  example2: {fontSize: 21, textAlign: 'center', position: 'absolute', color: '#6E6C6F', alignSelf: 'center'}, example2Position: {top: 83,},
  jishoButton: {position: 'absolute', top: 559, left: 58, padding: 15, borderRadius: 5,},
  buttonText: {fontSize: 20, color: '#9D9D9D',},
  jimBreenButton: {position: 'absolute', top: 559, left: 230, padding: 15, borderRadius: 5,},
  examplesButton: {position: 'absolute', top: 645, left: 125, padding: 15, borderRadius: 5,zIndex: 3},
  backgroundImage: {position: 'absolute', top: -10, left: -15, width: '108%', height: '108%',},
  examplesContainer: {flex: 1, paddingHorizontal: 25, maxHeight: 600, paddingVertical: 25, position: 'absolute', top: 40, backgroundColor: 'rgba(255, 255, 255, 0.7)',},
  scrollViewContent: {justifyContent: 'center', alignItems: 'center', paddingBottom:40},
  exampleText: {fontSize: 15, marginVertical: 5,},
  textColorButton: {position: 'absolute', top: 64, right: 54, width: 285, height: 285, borderRadius: 170,
  backgroundColor: 'rgba(255, 255, 255, 0)', alignItems: 'center', justifyContent: 'center',},});