
<template>
  <div class="ds-content">
    <baseHeader></baseHeader>
    <div class="ds-main">
      <h1>Home</h1>
      <p>This is home</p>
    </div>
    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

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