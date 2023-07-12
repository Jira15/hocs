<script setup>
import { useCharacterStore } from '@/stores/character'; 
const characterStore = useCharacterStore();

</script>
<template>
    <article class="kin"> 
        <dl>
            <dt>Kin:</dt>
            <dd>{{ characterStore.kin.kin }}</dd>
        </dl>
        <dl>
            <dt>Type:</dt>
            <dd>{{ characterStore.kin.type }}</dd>
        </dl>
        <dl>
            <dt>Size:</dt>
            <dd>{{ characterStore.kin.size }}</dd>
        </dl> 
        <dl>
            <dt>Speed:</dt>
            <dd>{{ characterStore.kin.speed }}</dd>
        </dl> 
        <dl>
            <dt>Sight:</dt>
            <dd>{{ characterStore.kin.sight }}</dd>
        </dl> 
    </article>
</template>
<style lang="scss">
.kin {
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