<script setup>
import { useCharacterStore } from '@/stores/character'; 
const characterStore = useCharacterStore();

</script> 
<template>
    <article class="info"> 
        <dl>
            <dt>Character:</dt>
            <dd> {{ characterStore.character }}</dd>
        </dl>
        <dl>
            <dt>Player:</dt>
            <dd>{{ characterStore.player }}</dd>
        </dl>
        <dl>
            <dt>Campaign:</dt>
            <dd>Gaaran</dd>
        </dl> 
    </article>
</template>
<style lang="scss">
.info {
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