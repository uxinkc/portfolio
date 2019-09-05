
<template>
  <div class="ds-content">
    <baseHeader></baseHeader>
    <div class="ds-main">
      <h1>Insights</h1>
      <p>This is the Insights Overview Page</p>
    </div>
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