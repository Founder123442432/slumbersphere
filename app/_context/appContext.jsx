"use client"
import { createContext, use } from "react"
const soundCollection = [
  {
    name: "Rainfall",
    category: "Nature",
    audio: "https://audiomack.com//embed/rain-music-2/song/rainfall-outright"
  },
  {
    name: "Thunderstorms",
    category: "Nature",
    audio: "https://audiomack.com//embed/rainsounds/song/thunderstorms"
  },
  {
    name: "Ocean waves",
    category: "Nature",
    audio: "https://audiomack.com//embed/ocean-sounds/song/ocean-waves-sound"
  },
  {
    name: "Flowing water",
    category: "Nature",
    audio: "https://audiomack.com//embed/sound-of-the-river-in-the-forest/song/healing-in-silence-with-birds-and-flowing-water"
  },
  {
    name: "Rainy Window",
    category: "Nature",
    audio: "https://audiomack.com//embed/rainy-window/song/serene-storm-sounds"
  },
  {
    name: "Neo Notes",
    category: "Music",
    audio: "https://audiomack.com//embed/neo-notes/song/birdsong"
  },
  {
    name: "Crickets at night",
    category: "Nature",
    audio: "https://audiomack.com//embed/night-breeze-fx/song/night-breeze-fx-relaxation"
  },
  {
    name: "Forest ambiance",
    category: "Nature",
    audio: "https://audiomack.com//embed/natural-sound-makers/song/forest-ambiance"
  },
  {
    name: "øneheart x reidenshi",
    category: "Music",
    audio: "https://audiomack.com//embed/corrupted-10/song/snowfall"
  },
  {
    name: "White noise",
    category: "Noise",
    audio: "https://audiomack.com//embed/white-noise-official/song/ambient-white-noise"
  },
  {
    name: "Brown noise",
    category: "Noise",
    audio: "https://audiomack.com//embed/sleepbabysleep/song/brown-noise-to-sleep"
  },
  {
    name: "Fan noise",
    category: "Noise",
    audio: "https://audiomack.com//embed/vintage-box-fan-sound/song/box-fan-white-noise"
  },
  {
    name: "Airplane cabin hum",
    category: "Noise",
    audio: "https://audiomack.com//embed/fall-asleep-machine/song/airplane-cabin-hum"
  },
  {
    name: "Vacuum from a distance",
    category: "Noise",
    audio: "https://audiomack.com//embed/soothing-sleep-sounds/song/vacuum-cleaner-sound-for-sleep"
  },
  {
    name: "Clock ticking",
    category: "Everyday",
    audio: "https://audiomack.com//embed/white-noise-radiance/song/clock-ticking-sounds-loopable-with-no-fade"
  },
  {
    name: "Washing machine",
    category: "Everyday",
    audio: "https://audiomack.com//embed/premium-soundscapes/song/white-noise-of-washing-machine-rain-new-rain-sounds-remix"
  },
  {
    name: "Dishwasher",
    category: "Everyday",
    audio: "https://audiomack.com//embed/newborn-baby-song-academy/song/goodnight-lullaby-dishwasher"
  },
  {
    name: "Train on tracks",
    category: "Transport",
    audio: "https://audiomack.com//embed/subway-train-sounds/song/subway-train-atmosphere-sounds"
  },
  {
    name: "Keyboard typing ASMR",
    category: "ASMR",
    audio: "https://audiomack.com//embed/gibi-asmr-1/song/keyboard-sounds-typing-and-whispering-pt4"
  },
  {
    name: "Footsteps on wood",
    category: "ASMR",
    audio: "https://audiomack.com//embed/sound-of-the-wilderness/song/crispy-footsteps-in-the-woods"
  },
  {
    name: "Piano",
    category: "Music",
    audio: "https://audiomack.com//embed/sad-music-2/song/drones-above-the-city"
  },
  {
    name: "Binaural beats",
    category: "Meditation",
    audio: "https://audiomack.com//embed/binaural-beats-brainwave-entrainment/song/chakra-humming"
  },
  {
    name: "Whispering",
    category: "ASMR",
    audio: "https://audiomack.com//embed/whispering-willow-asmr/song/hairbrushing"
  },
  {
    name: "Page turning",
    category: "ASMR",
    audio: "https://audiomack.com//embed/tiptoe-tingles-asmr/song/card-triggers-and-book-sounds-shuffling-tapping-page-turning-rubbing-pt3"
  },
  {
    name: "Hair brushing",
    category: "ASMR",
    audio: "https://audiomack.com//embed/asmr-art-of-sound/song/hair-brushing-with-two-soft-massage-brushes"
  }
];
export const AppContext=createContext()
export default function Context({children}) {
    return <AppContext value={{soundCollection}}>
        {children}
    </AppContext>
}