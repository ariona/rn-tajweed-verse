import React from 'react';
import ParsedText from 'react-native-parsed-text'

export default function TajweedVerse ({verse="", config = defaultConfig}) {

  config = {
    ...defaultConfig,
    ...config
  }
  verse = verse.replace(/\:[\d]+/g,'')
					// .replace('ٱ','ا')
					// .replace('[َٲ]','[َا]')
					// .replace('[ٱ]','[ا]')
					// .replace('[ٱ]','[ا]')
					// .replace('َ[n[ٰـ','[n[ٰـ')
  
  /**
   * Return cleaned verse from Tajwid markup, Called from this.parser
   * @param  {[string]} matchingString [String to search]
   * @return {[string]}                [cleaned verse from markup]
   */
  const renderText = (matchingString) => {
    let match = matchingString.replace(/\[\w\[/,'').replace(/\]/,'')
    return match;
  }

  const parser= [
    { pattern : /\[h\[([^\]]+)\]/, style : config.tajweed.ham_wasl.style, renderText, onPress: config.tajweed.ham_wasl.onPress },
    { pattern : /\[s\[([^\]]+)\]/, style : config.tajweed.slnt.style, renderText, onPress: config.tajweed.slnt.onPress },
    { pattern : /\[l\[([^\]]+)\]/, style : config.tajweed.slnt.style, renderText, onPress: config.tajweed.slnt.onPress },
    { pattern : /\[n\[([^\]]+)\]/, style : config.tajweed.madda_normal.style, renderText, onPress: config.tajweed.madda_normal.onPress },
    { pattern : /\[p\[([^\]]+)\]/, style : config.tajweed.madda_permissible.style, renderText, onPress: config.tajweed.madda_permissible.onPress },
    { pattern : /\[m\[([^\]]+)\]/, style : config.tajweed.madda_necessary.style, renderText, onPress: config.tajweed.madda_necessary.onPress },
    { pattern : /\[q\[([^\]]+)\]/, style : config.tajweed.qlq.style, renderText, onPress: config.tajweed.qlq.onPress },
    { pattern : /\[o\[([^\]]+)\]/, style : config.tajweed.madda_obligatory.style, renderText, onPress: config.tajweed.madda_obligatory.onPress },
    { pattern : /\[c\[([^\]]+)\]/, style : config.tajweed.ikhf_shfw.style, renderText, onPress: config.tajweed.ikhf_shfw.onPress },
    { pattern : /\[f\[([^\]]+)\]/, style : config.tajweed.ikhf.style, renderText, onPress: config.tajweed.ikhf.onPress },
    { pattern : /\[w\[([^\]]+)\]/, style : config.tajweed.idghm_shfw.style, renderText, onPress: config.tajweed.idghm_shfw.onPress },
    { pattern : /\[i\[([^\]]+)\]/, style : config.tajweed.iqlb.style, renderText, onPress: config.tajweed.iqlb.onPress },
    { pattern : /\[a\[([^\]]+)\]/, style : config.tajweed.idgh_ghn.style, renderText, onPress: config.tajweed.idgh_ghn.onPress },
    { pattern : /\[u\[([^\]]+)\]/, style : config.tajweed.idgh_w_ghn.style, renderText, onPress: config.tajweed.idgh_w_ghn.onPress },
    { pattern : /\[d\[([^\]]+)\]/, style : config.tajweed.idgh_mus.style, renderText, onPress: config.tajweed.idgh_mus.onPress },
    { pattern : /\[b\[([^\]]+)\]/, style : config.tajweed.idgh_mus.style, renderText, onPress: config.tajweed.idgh_mus.onPress },
    { pattern : /\[g\[([^\]]+)\]/, style : config.tajweed.ghn.style, renderText, onPress: config.tajweed.ghn.onPress },
  ]

  return  (
    <ParsedText
      parse={parser}
      style={config.style}
    >
      {verse}
    </ParsedText>

  )
	
}

const defaultConfig = {
  style: {
    fontSize: 32,
    lineHeight: 60,
    color: 'black',
    direction: 'rtl',
  },
  tajweed: {
    ham_wasl: {
      style: {color: '#AAAAAA'},
      onPress: null
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