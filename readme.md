# RN Tajweed Verse
React Native component for parsing Quran Tajweed Verses into color coded text.

<p>
  <a href="https://www.npmjs.com/package/rn-tajweed-verse"><img src="https://img.shields.io/npm/dt/rn-tajweed-verse.svg" alt="Total Downloads"></a>
  <a href="https://github.com/ariona/rn-tajweed-verse/releases"><img src="https://img.shields.io/npm/v/rn-tajweed-verse.svg" alt="Latest Release"></a>
  <a href="https://github.com/ariona/rn-tajweed-verse/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/rn-tajweed-verse.svg" alt="License"></a>
</p>

------

## Installation

Use below command to install depending on package manager you use

```bash
# npm
npm install rn-tajweed-verse

# yarn
yarn add rn-tajweed-verse
```

## Usage

**Import libary**
```jsx
import TajweedVerse from 'rn-tajweed-verse'
```

**Use it**
```jsx
<TajweedVerse
  verse={"\u0671\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0631\u064e\u0628\u0651\u0650 [h:4[\u0671]\u0644\u0652\u0639\u064e[n[\u0640\u0670]\u0644\u064e\u0645[p[\u0650\u064a]\u0646\u064e"}
  config={{
    style: {
      fontSize: 28,
      lineHeight: 50,
      color: 'black',
      direction: 'rtl',
      fontFamily: 'Kitab',
    }
  }}
/>
```

## Property
Prop | Type | Desc
--- | --- | ---
verse | string | Quran Tajweed verse
config | object | Config for overriding tajweed style & action, (see below for details)[#config]

## Config
Config object hold the style and tajweed configuration (for changing color & onPress action), below is the default config
```js
const defaultConfig = {
  // This style is for styling default verse text
  style: {
    fontSize: 32,
    lineHeight: 60,
    color: 'black',
    direction: 'rtl',
  },
  // this is tajweed configuration
  // each tajweed has style and onPress prop for changing tajweed text style & onPress action
  tajweed: {
    ham_wasl: {
      style: {color: '#AAAAAA'},
      onPress: null // e.g () => console.log('Hamzah Washal')
    },
    slnt: {
      style: {color: '#AAAAAA'},
      onPress: null
    },
    madda_normal: {
      style: {color: '#537FFF'},
      onPress: null
    },
    madda_permissible: {
      style: {color: '#4050FF'},
      onPress: null
    },
    madda_necessary: {
      style: {color: '#000EBC'},
      onPress: null
    },
    qlq: {
      style: {color: '#DD0008'},
      onPress: null
    },
    madda_obligatory: {
      style: {color: '#2144C1'},
      onPress: null
    },
    ikhf_shfw: {
      style: {color: '#D500B7'},
      onPress: null
    },
    ikhf: {
      style: {color: '#9400A8'},
      onPress: null
    },
    idghm_shfw: {
      style: {color: '#58B800'},
      onPress: null
    },
    iqlb: {
      style: {color: '#26BFFD'},
      onPress: null
    },
    idgh_ghn: {
      style: {color: '#169777'},
      onPress: null
    },
    idgh_w_ghn: {
      style: {color: '#169200'},
      onPress: null
    },
    idgh_mus: {
      style: {color: '#A1A1A1'},
      onPress: null
    },
    ghn: {
      style: {color: '#FF7E1E'},
      onPress: null
    },
  }
}
```

## Example
This repository came with example directory built with expo, to run example you need to install expo-cli and expo go on your device. you can follow the instruction at [https://expo.io](https://expo.io).
Or you can visit this link [https://expo.io/@ariona/projects/rn-tajweed-verse](https://expo.io/@ariona/projects/rn-tajweed-verse) and QRCode with [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)


## Quran Tajweed Text
You can obtain quran tajweed texts from below sources:

- [Global Quran](https://docs.globalquran.com/index.php/Main_Page)
- [Al-Quran Cloud](https://alquran.cloud/api)

## Caveats
- Not all Quran fonts is compatible with **rn-tajweed-verse**. This is because some font have implemented all chars/notation and some are not. Recommended font for Quran Tajweed is **Kitab** (from [quran.cloud](https://cdn.alquran.cloud/public/fonts/Kitab-Regular.ttf)) and **Scerehezade** from Google font.
