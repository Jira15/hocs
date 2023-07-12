<script setup>
import { useCharacterStore } from '@/stores/character'; 
const characterStore = useCharacterStore();

</script>
<template>
    <article class="stats"> 
        <dl>
            <dt>Strenght:</dt>
            <dd>{{ characterStore.stats.strenght }}</dd>
        </dl>
        <dl>
            <dt>Agility:</dt>
            <dd>{{ characterStore.stats.agility }}</dd>
        </dl>
        <dl>
            <dt>Mind:</dt>
            <dd>{{ characterStore.stats.mind }}</dd>
        </dl>
        <dl>
            <dt>Presence:</dt>
            <dd>{{ characterStore.stats.presence }}</dd>
        </dl>
    </article>
</template>
<style lang="scss">
.stats {
    background-color: aliceblue;
    margin: 10px;
    display: flex;
    padding: 10px;
    border-radius: 20px; 
    text-align: center;
    dl { 
        margin: 10px;
        margin: 0 auto; 
    }
}
</style>