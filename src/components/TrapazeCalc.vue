<template>
    <form @submit.prevent="calcTrapezio">
        <h1>Calcular Trapézio</h1>
        <input type="text" v-model="b1">
        <input type="text" v-model="b2">
        <input type="text" v-model="altura">

        <button type="button" @click="calcTrapezio">Calcular</button>

        <p>{{ resultado }}</p>


    </form>
</template>

<script>


    export default{
        data(){
            return {
                b1: '',
                b2: '',
                altura: '',
                resultado: '',
            }
     
        },
        methods: {
                calcTrapezio(){
                    const area = ((this.b1 + this.b2) * this.altura) / 2;
                    this.resultado = area
    
                }
            }
    }
</script>

<style>
    input{
        text-decoration: none;
        border-radius: 5px;
        width: 60px;
        height: 30px;
        text-align: center;
        font-size: 20px;
    }
</style>