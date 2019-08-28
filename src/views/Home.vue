
<template>
  <div>
    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Hick's Law</h1>
          <div class="fsa-m-t--m">
            

              <p class="fsa-text--lead fsa-m-t--none">
                <strong>"The time it takes to make a decision increases with the number and complexity of choices." (<a href="https://lawsofux.com/hicks-law" target="_blank">poster download</a>)</strong> If there where only one principle to guide my my work as a User Experience Architect, it would be Hick's Law. The natural simplicity of the words should guide each and every choice we make in this industry. I am committed to this law, and I am committed to the craft. 
              </p>

            <p class="fsa-text--lead fsa-m-t--none">
              My name is <a href="https://linkedin.com/in/bignamehere" target="_blank">Casey Hill</a>, and I am a digital native exploring the boundaries of business strategy and technology in search of design simplicity. In my over 20 years of service in the digital industry, I have worked on a number of fascinating projects and with dozens of highly influential brands, giving me a truly unique perspective.
            </p>
							
					</div>
          <div class="fsa-m-t--m">
            <p>
              Below are a handful of projects that I believe provided interesting challenges and innovative solutions.
            </p>
          </div>
          <div class="fsa-grid">
            <div class="fsa-grid__1/1 fsa-grid__1/2@s fsa-grid__1/3@m">
              <h1>[ BOX 1 ]</h1>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/2@s fsa-grid__1/3@m">
              <h1>[ BOX 2 ]</h1>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/2@s fsa-grid__1/3@m">
              <h1>[ BOX 3 ]</h1>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/2@s fsa-grid__1/3@m">
              <h1>[ BOX 4 ]</h1>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/2@s fsa-grid__1/3@m">
              <h1>[ BOX 5 ]</h1>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/2@s fsa-grid__1/3@m">
              <h1>[ BOX 6 ]</h1>
            </div>
          </div>

     
        </div>
      </div>
    </main>
    <baseFooter></baseFooter>
  </div>
</template>

<script>
// PARTIALS
import baseHeader from '../partials/baseHeader';
import baseFooter from '../partials/baseFooter';

// COMPONENTS
import field from '../components/field/field';
import card from '../components/card/card';
import whiteout from '../components/whiteout/whiteout';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {

  components: {
    baseHeader: baseHeader,
    baseFooter: baseFooter,
    card: card,
    field: field,
    whiteout: whiteout,
  },

  data(){
    return {
      cardData: [
        {
          label: "Employer",
          desc: "USDA"
        },
        { 
          label: "Position",
          desc: "Accountant"
        }
      ]
    }
  },


  computed: {
    ...mapState({
      navigationData: state => state.navigation.all,
      users: state => state.users.all,
    }),
    ...mapGetters('users', {
      fatUsers: 'fatUsers'
    })
  },
  

  methods: {

    ...mapActions('users',{
      killExt: 'killExtention',
      submitForm: 'addNewUser'
    }),
    handleSubmit(e){
      let user = {name: e.target.name.value, email: e.target.email.value};
      e.target.name.value = "";
      e.target.email.value = "";
      this.submitForm( user );
    }

    /*
    killExt: function(){
      this.$store.dispatch('users/killExtention');
      //.commit('killExtention');
    },

    handleSubmit: function(e){
      let user = {name: e.target.name.value, email: e.target.email.value};
      this.$store.dispatch('users/addNewUser', user );
    }
    */
  },

  created(){
    //this.$store.dispatch('navigation/getNavApi');
    this.$store.dispatch('users/getUsersApi');
    //this.getUsers();
  }
}
</script>