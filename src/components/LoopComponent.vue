<template>
    <div>
        <form @submit.prevent="addItem">
            <input type="text" v-model="inputValue">
            <input type="submit" value="Adicionar" >
        </form>

        <table style="border: 1px solid black;">
       
            <tr>
                <td>index</td>
                <td>key</td>
            </tr>

     
        
            <tr v-for="(item, index) in itens" :key="index">
                <td> {{ index }}</td>
                <td>{{ item }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itens:[],
            inputValue: ''
        }
    },
    methods:{
        addItem(){
            this.itens.push(this.inputValue)
        }
    }
}

</script>

<style>


</style>