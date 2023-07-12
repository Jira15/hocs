 
export const useCharacterStore = defineStore('character', {
  // other options...
  state: () => (
      {
        id: 0,
        character: 'Cloud Example',
        player: 'Jose R',
        campaign:'might and magic',
        kin: {
          kin: 'Hume',
          type: 'humanoid',
          size: 'large',
          speed: '25',
          sight: 'nightvision'
        },
        level: {
          tier: 0,
          level: 0,
          experience: 0
        },
        stats: {
          strenght: 0,
          agility: 0,
          mind: 0,
          presence: 0,
        },
        skills: [],
        spells: []
      }
    ),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    // increment() {
    //   this.count++
    // },
  },
})