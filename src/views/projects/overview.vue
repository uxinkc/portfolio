
<template>
  <div>
    <baseHeader></baseHeader>
    <h1>Projects</h1>
    <p>This is the Projects Overview Page</p>
    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../../partials/baseHeader';
import baseFooter from '../../partials/baseFooter';

// COMPONENTS


export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
  },

  data(){
    return {
      
    }
  },


  computed: {
    
  },
  

  methods: {

  },

  created(){

  }
}
</script>