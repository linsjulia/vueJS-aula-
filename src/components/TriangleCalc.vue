<template>
<form action="">
    <input type="text" v-model="bzao">
    <input type="text" v-model="bzinho">
    <input type="text" v-model="h">

    <button type="button" @click="calcularNumero"></button>
</form>
</template>


<script>
export default {
    data(){
        return{
            bzao:'',
            bzinho: '',
            h: '2',
            resultado: ''
        }
    },
    methods:{
        calcularNumero(){
            let calc= {
                bzao: this.bzao,
                bzinho: this.bzinho
                
            }
        }
    }
}
</script>


<style>

</style>