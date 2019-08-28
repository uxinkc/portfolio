<template>
  <header>
    <tophat
      AG_ABBR="LinkedIn"
      AG_FULL="LinkedIn Profile"
      AG_URL="//www.linkedin.com/in/bignamehere"
      SUB_AG_ABBR="Twitter"
      SUB_AG_FULL="Twitter Profile"
      SUB_AG_URL="//www.twitter.com/uxinkc"
     >
     </tophat>
    <headerApp
      APP_ABBR_NAME="UX in KC"
      APP_FULL_NAME="Digital Strategy &amp; UX Architecture"
      PROFILE_NAME="Github"
      PROFILE_URL="https://github.com/uxinkc"
    >
    </headerApp>
    <globalNav :NAV_DATA="navigationData" CLASS_EXTRA="fsa-nav-global__list-item--multi-column"></globalNav>
    

  </header>
</template>

<script>

//

import tophat from '../components/tophat/tophat';
import headerApp from '../components/header-app/header-app';
import globalNav from '../components/global-nav/global-nav';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    tophat: tophat,
    headerApp: headerApp,
    globalNav: globalNav,
  },

  computed: {
    ...mapState({
      navigationData: state => state.navigation.all
    })
  },
  

  methods: {

  },

  created(){
    this.$store.dispatch('navigation/getNavApi');
  }

}

</script>