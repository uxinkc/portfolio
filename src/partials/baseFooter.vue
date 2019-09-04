<template>
  <footer>
    
    <legalText :LEGAL="getLegal"></legalText>

  </footer>
</template>

<script>

import legal from '../components/legal/legal';

export default {

  components: {

    legalText: legal,
  },

  computed: {
    getLegal: function(){
      return "Handcrafted by @uxinkc, Copyright " + new Date().getFullYear();
    }
  }

}

</script>