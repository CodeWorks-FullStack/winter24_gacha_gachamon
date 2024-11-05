import { Gachamon } from './models/Gachamon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  coins = 0
  gachamons = [
    new Gachamon({
      name: 'Fred',
      rarity: 'common',
      emoji: '🐃'
    }),
    new Gachamon({
      name: 'Herbert',
      rarity: 'common',
      emoji: '🦃'
    }),
    new Gachamon({
      name: 'Walter',
      rarity: 'uncommon',
      emoji: '🐖'
    }),
    new Gachamon({
      name: 'Mick & Jeremy',
      rarity: 'rare',
      emoji: '🏇'
    }),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())