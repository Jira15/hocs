<script>
export default {
  data() {
    return { 
        spells: [
                    {
                        id: 1,
                        title: "Titulo",       
                        exp: 10, 
                        cost: 4,
                        range: "Self", 
                        circle: "Chronomancy",
                        level: 3,
                        description:" Write down your position and also your current hit points, wounds, injuries, sanity and corruption values; then, sustain (4) this spell. Then, as a reaction, you go back to the position that you wrote down; also, your hit points, wounds, injuries, sanity and corruption go back to the values that you wrote down. Once you do so, this spell ends." 
                    },
                    {   
                        id: 2,
                        title: "Titulo",       
                        exp: 10, 
                        cost: 4,
                        range: "Self", 
                        circle: "Chronomancy",
                        level: 3,
                        description:" Write down your position and also your current hit points, wounds, injuries, sanity and corruption values; then, sustain (4) this spell. Then, as a reaction, you go back to the position that you wrote down; also, your hit points, wounds, injuries, sanity and corruption go back to the values that you wrote down. Once you do so, this spell ends." 
                    }
                ], 
     }
  },
 
}
</script>
<template>
    <article>
        <TheSpell />
    </article>
</template>
<style lang="scss">
</style>