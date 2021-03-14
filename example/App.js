import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import TajweedVerse from 'rn-tajweed-verse'


export default function App() {
  let [fontsLoaded] = useFonts({
    'LPMQ': require('./assets/fonts/LPMQ.ttf'),
    'Kitab': require('./assets/fonts/Kitab-Regular.ttf'),
    'Scheherazade': require('./assets/fonts/scheherazade.ttf'),
    'Uthman': require('./assets/fonts/uthman.otf'),
    'Me_quran': require('./assets/fonts/me_quran.ttf'),
    'Saleem': require('./assets/fonts/saleem.ttf'),
  });
  
  const [font, setFont] = useState('Kitab')

  // const verse = "\u0621\u064e\u0627\u0645\u064e\u0646\u064e [h:1708[\u0671][l[\u0644]\u0631\u0651\u064e\u0633\u064f\u0648\u0644\u064f \u0628\u0650\u0645[o[\u064e\u0627\u0653] \u0623\u064f[f:17[\u0646\u0632]\u0650\u0644\u064e \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650 \u0645[u:192[\u0650\u0646 \u0631]\u0651\u064e\u0628\u0651\u0650\u0647[n[\u0650\u06e6] \u0648\u064e[h:1709[\u0671]\u0644\u0652\u0645\u064f\u0624\u0652\u0645\u0650\u0646\u064f\u0648\u0646\u064e\u200c\u06da \u0643\u064f\u0644\u0651\u064c \u0621\u064e\u0627\u0645\u064e\u0646\u064e \u0628\u0650[h:32[\u0671]\u0644\u0644\u0651\u064e\u0647\u0650 \u0648\u064e\u0645\u064e\u0644\u064e[o[\u0640\u0670\u0653]\u0626\u0650\u0643\u064e\u062a\u0650\u0647[n[\u0650\u06e6] \u0648\u064e\u0643\u064f\u062a\u064f\u0628\u0650\u0647[n[\u0650\u06e6] \u0648\u064e\u0631\u064f\u0633\u064f\u0644\u0650\u0647[n[\u0650\u06e6] \u0644\u064e\u0627 \u0646\u064f\u0641\u064e\u0631\u0651\u0650\u0642\u064f \u0628\u064e\u064a\u0652\u0646\u064e \u0623\u064e\u062d\u064e[a:1710[\u062f\u064d \u0645]\u0651[u:1711[\u0650\u0646 \u0631]\u0651\u064f\u0633\u064f\u0644\u0650\u0647[n[\u0650\u06e6]\u200c\u06da \u0648\u064e\u0642\u064e\u0627\u0644\u064f\u0648[s[\u0627\u0652] \u0633\u064e\u0645\u0650\u0639\u0652\u0646\u064e\u0627 \u0648\u064e\u0623\u064e\u0637\u064e\u0639\u0652\u0646\u064e\u0627\u200c\u06d6 \u063a\u064f\u0641\u0652\u0631\u064e\u0627\u0646\u064e\u0643\u064e \u0631\u064e\u0628\u0651\u064e\u0646\u064e\u0627 \u0648\u064e\u0625\u0650\u0644\u064e\u064a\u0652\u0643\u064e [h:1712[\u0671]\u0644\u0652\u0645\u064e\u0635[p[\u0650\u064a]\u0631\u064f"
  const verse = "\u06de \u0671\u0644\u0644\u0651\u064e\u0647\u064f \u0646\u064f\u0648\u0631\u064f [h:9421[\u0671][l[\u0644]\u0633\u0651\u064e\u0645\u064e[n[\u0640\u0670]\u0648[n[\u064e\u0672]\u062a\u0650 \u0648\u064e[h:177[\u0671]\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650\u200c\u06da \u0645\u064e\u062b\u064e\u0644\u064f \u0646\u064f\u0648\u0631\u0650\u0647[n[\u0650\u06e6] \u0643\u064e\u0645\u0650\u0634\u0652\u0643\u064e[s[\u0648][n[\u0672][f:9422[\u0629\u064d \u0641]\u0650\u064a\u0647\u064e\u0627 \u0645\u0650\u0635\u0652\u0628\u064e\u0627\u062d\u064c\u200c\u06d6 [h:9423[\u0671]\u0644\u0652\u0645\u0650\u0635\u0652\u0628\u064e\u0627\u062d\u064f \u0641\u0650\u0649 \u0632\u064f\u062c\u064e\u0627\u062c\u064e\u0629\u064d\u200c\u06d6 [h:9424[\u0671][l[\u0644]\u0632\u0651\u064f\u062c\u064e\u0627\u062c\u064e\u0629\u064f \u0643\u064e\u0623\u064e[g[\u0646\u0651]\u064e\u0647\u064e\u0627 \u0643\u064e\u0648\u0652\u0643\u064e[f:9425[\u0628\u064c \u062f]\u064f\u0631\u0651\u0650[a:9426[\u0649\u0651\u064c \u064a]\u064f\u0648\u0642\u064e\u062f\u064f \u0645\u0650[f:9427[\u0646 \u0634]\u064e\u062c\u064e\u0631\u064e[a:9428[\u0629\u064d \u0645]\u0651\u064f\u0628\u064e[n[\u0640\u0670]\u0631\u064e\u0643\u064e[f:9429[\u0629\u064d \u0632]\u064e\u064a\u0652\u062a\u064f\u0648\u0646\u064e[u:9430[\u0629\u064d \u0644]\u0651\u064e\u0627 \u0634\u064e\u0631\u0652\u0642\u0650\u064a\u0651\u064e[a:9431[\u0629\u064d \u0648]\u064e\u0644\u064e\u0627 \u063a\u064e\u0631\u0652\u0628\u0650\u064a\u0651\u064e[a:9432[\u0629\u064d \u064a]\u064e\u0643\u064e\u0627\u062f\u064f \u0632\u064e\u064a\u0652\u062a\u064f\u0647\u064e\u0627 \u064a\u064f\u0636[o[\u0650\u0649]\u0653\u0621\u064f \u0648\u064e\u0644\u064e\u0648\u0652 \u0644\u064e\u0645\u0652 \u062a\u064e\u0645\u0652\u0633\u064e\u0633\u0652\u0647\u064f \u0646\u064e\u0627[a:9433[\u0631\u064c\u200c\u06da \u0646]\u0651\u064f\u0648\u0631\u064c \u0639\u064e\u0644\u064e\u0649\u0670 \u0646\u064f\u0648[a:9434[\u0631\u064d\u200c\u06d7 \u064a]\u064e\u0647\u0652\u062f\u0650\u0649 [h:2084[\u0671]\u0644\u0644\u0651\u064e\u0647\u064f \u0644\u0650\u0646\u064f\u0648\u0631\u0650\u0647[n[\u0650\u06e6] \u0645[a:476[\u064e\u0646 \u064a]\u064e\u0634[o[\u064e\u0627]\u0653\u0621\u064f\u200c\u06da \u0648\u064e\u064a\u064e\u0636\u0652\u0631\u0650\u0628\u064f [h:7110[\u0671]\u0644\u0644\u0651\u064e\u0647\u064f [h:6948[\u0671]\u0644\u0652\u0623\u064e\u0645\u0652\u062b\u064e[n[\u0640\u0670]\u0644\u064e \u0644\u0650\u0644[g[\u0646\u0651]\u064e\u0627\u0633\u0650\u200c\u06d7 \u0648\u064e[h:72[\u0671]\u0644\u0644\u0651\u064e\u0647\u064f \u0628\u0650\u0643\u064f\u0644\u0651\u0650 \u0634\u064e\u0649\u0652\u0621\u064d \u0639\u064e\u0644[p[\u0650\u064a]\u0645\u064c"
  // const verse = "بِسْمِ [h:1[ٱ]للَّهِ [h:2[ٱ][l[ل]رَّحْمَ[n[ـٰ]نِ [h:3[ٱ][l[ل]رَّح[p[ِي]مِ"

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{
          marginVertical: 24,
          borderBottomColor: '#e3e3e3',
          borderBottomWidth: 1,
        }}>
          <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 5, marginTop: 15}}>RN Tajweed Verse</Text>
          <Text style={{color: '#777', lineHeight: 18, marginBottom: 20}}>Library for parsing Quran Tajweed Verses, into color coded text</Text>

          <Text style={{color: '#333', fontWeight: '600', lineHeight: 18, marginBottom: 5}}>Choose a font to see compatibility</Text>
          <View style={{borderWidth:1, borderColor: '#e3e3e3'}}>
            <Picker
              selectedValue={font}
              style={{borderBottomWidth: 0}}
              onValueChange={(itemValue) => setFont(itemValue) }>
              <Picker.Item label="LPMQ" value="LPMQ" />
              <Picker.Item label="Kitab 🌟 Recommended" value="Kitab" />
              <Picker.Item label="Scheherazade 🌟 Recommended" value="Scheherazade" />
              <Picker.Item label="Uthman" value="Uthman" />
              <Picker.Item label="Me Quran" value="Me_quran" />
              <Picker.Item label="Saleem" value="Saleem" />
            </Picker>
          </View>
        </View>
        <View style={{backgroundColor: '#f9f9f9', padding: 13}}>
          <TajweedVerse
            verse={verse}
            config={{
              style: {
                fontSize: 28,
                lineHeight: 50,
                color: 'black',
                direction: 'rtl',
                // fontFamily: 'LPMQ',
                // fontFamily: 'Kitab',
                // fontFamily: 'Scheherazade',
                // fontFamily: 'Uthman',
                // fontFamily: 'Me_quran',
                fontFamily: font,
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
