<script setup>
import { useCharacterStore } from '@/stores/character'; 
const characterStore = useCharacterStore();

</script>
<template>
    <article class="level"> 
        <dl>
            <dt>Tier:</dt>
            <dd>{{ characterStore.level.tier }}</dd>
        </dl>
        <dl>
            <dt>Level:</dt>
            <dd>{{ characterStore.level.level }}</dd>
        </dl>
        <dl>
            <dt>Experience:</dt>
            <dd>{{ characterStore.level.experience }}</dd>
        </dl>
    </article>
</template>
<style lang="scss">
.level {
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