<template>
  <footer>
    
    <legalText :LEGAL="getLegal"></legalText>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>

import legal from '../components/legal/legal';
import hiddenItems from '../components/hidden/hidden-items';

export default {

  components: {

    legalText: legal,
    hiddenItems: hiddenItems
  },

  computed: {
    getLegal: function(){
      return "Handcrafted by @uxinkc, Copyright " + new Date().getFullYear();
    }
  }

}

</script>