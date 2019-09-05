<template>
  <footer>
    <div class="ds-footer">
      <div class="ds-footer__bd">
        <legalText :LEGAL="getLegal"></legalText>
      </div>
    </div>
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