<template>
  <nav>
    <div class="ds-nav">
      <div class="ds-nav__bd">
        <!-- Brand -->
        <div class="ds-nav__brand">
          <span class="ds-nav__brand-text">UX in KC</span>
        </div>
        <!-- Controls -->
        <div class="ds-nav__controls">
          <div class="ds-nav__controls-item">
            <div class="ds-field ds-field--block">
              <input name="search" type="text">
            </div>
            <div class="ds-nav__controls-item">
              <button class="ds-btn ds-btn__icon-search">Search</button>
            </div>
          </div>
        </div>
        <!-- Menu -->
        <div class="ds-nav__menu">
          <ul class="ds-nav__menu-list">
            <li class="ds-nav__menu-list-item">
              <router-link to="/">
                <span class="ds-nav__text">Home</span>
              </router-link>
            </li>
            <li class="ds-nav__menu-list-item">
              <router-link to="/insights">
                <span class="ds-nav__text">Insights</span>
              </router-link>
            </li>
            <li class="ds-nav__menu-list-item">
              <router-link to="/projects">
                <span class="ds-nav__text">Projects</span>
              </router-link>
            </li>
            <li class="ds-nav__menu-list-item">
              <router-link to="/contact">
                <span class="ds-nav__text">Contact</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Mobile Nav -->
        <div class="ds-nav__hamburger">
          <div @click="openNav" class="ds-nav__hamburger-icon">
            <div class="ds-nav__hamburger-icon-line1"></div>
            <div class="ds-nav__hamburger-icon-line2"></div>
            <div class="ds-nav__hamburger-icon-line3"></div>
          </div>
        </div>
        <!-- Account -->
      </div>
    </div>
    <!-- Mobile Nav Flyout -->
    <div id="MobileNav" class="ds-nav__mobile-menu">
      <ul class="ds-nav__mobile-menu-list">
        <li class="ds-nav__mobile-menu-list-item">
          <router-link to="/">
            <span class="ds-nav__mobile-text">Home</span>
          </router-link>
        </li>
        <li class="ds-nav__mobile-menu-list-item">
          <router-link to="/insights">
            <span class="ds-nav__mobile-text">Insights</span>
          </router-link>
        </li>
        <li class="ds-nav__mobile-menu-list-item">
          <router-link to="/projects">
            <span class="ds-nav__mobile-text">Projects</span>
          </router-link>
        </li>
        <li class="ds-nav__mobile-menu-list-item">
          <router-link to="/contact">
            <span class="ds-nav__mobile-text">Contact</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  
  methods: {

    openNav: function(e){
      let nav = e.currentTarget;
      nav.classList.add('ds-nav__hamburger-icon-hide');

      let mobileNav = document.getElementById('MobileNav');
      mobileNav.classList.add('ds-nav__mobile-menu-show');

    }

  }
}
</script>