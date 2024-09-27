<template>
    <form @submit.prevent="calcCircle">
        <h1>Calcular Círculo</h1>

        <input type="text" v-model="r">
        <input type="submit" @click="calcCircle()">

        <p>{{ resultado }}</p>

    </form>

</template>


<script>

export default {
    data(){
        return{
            r: "",
            resultado: "",

        }
    },
    methods:{
        calcCircle(r2){
            r2 = this.r;
            this.resultado = Math.PI * Math.sqrt(r2) ;
        }
    }
}

</script>


<style>


</style>