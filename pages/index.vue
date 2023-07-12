<script setup>
import { useCharacterStore } from '@/stores/character';

const characterStore = useCharacterStore();

</script>
<template>
    <article class="character">
        <TheInfo />
        <TheKin />
        <TheLevel /> 
        <TheStats />


        <!-- <TheSkill />
        <TheSpell /> -->
    </article>
</template>
<style lang="scss">

.character{
    background-color: bisque;
}
</style>