<template>
  <div>
    <button v-on:click="Submitclick">Submit</button>
    <p>{{ response }}</p>
    
  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      response:""
    }
  },
  methods:{
    async Submitclick(){
    
     let res =  await axios.get('http://localhost:5000/test?name=pune')
     let { data} = res
     this.response = data
     
     },
  
  }

}
</script>

<style>

</style>