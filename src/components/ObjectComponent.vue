<template>
<form>
    <input type="text" v-model="name" placeholder="name">
    <input type="text" v-model="age" placeholder="age">
    <input type="text" v-model="document" placeholder="document">

    <button type="button" @click="addPerson">Adicionar</button>

   

</form>

<div v-for="(person, index) in personList" :key="index">
    <p>ID: {{ index + 1 }}</p> 
    <p>Nome: {{ person.name }}</p>
    <p>Idade: {{ person.age }}</p>
    <p>Documento: {{ person.document }}</p>
    <hr>
</div>
<img src="../../onda.png" alt="">
</template>

<script>
export default {
    data() {
        return {
            personList: [],
            name: '',
            age: '',
            document: ''
        }
    },
    methods: {
        addPerson(){
            let person = {
                name: this.name,
                age: this.age,
                document: this.document
            }
            this.personList.push(person)

        }
    }
}


</script>

<style>
button{
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(0, 208, 255);

}

body{
    background-color: rgb(0, 255, 208);
}

img{
    width: 170px;
    background-size: cover;
    top: 0px;
    
    
}

</style>