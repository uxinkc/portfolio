<template>
  <nav>
    <div class="ds-nav">
      <div class="ds-nav__container">
        <div class="ds-nav__brand">
          <span class="ds-nav__brand-text">UX in KC</span>
        </div>
        <div class="ds-nav__controls">
          <div class="ds-search ds-search--large">
            <div class="ds-search__entry">
              <div class="ds-field ds-field--block">
                <input name="search" type="text">
              </div>
            </div>
            <div class="ds-search__btn">
              <button class="ds-btn ds-btn__icon-search">Search</button>
            </div>
          </div>
        </div>
        <div class="ds-nav__navigation">
          <div class="ds-nav__navigation-links">
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/insights">Insights</router-link>
              </li>
              <li>
                <router-link to="/projects">Projects</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="ds-nav__navigation-btn">
          <div class="ds-nav__menu-icon">
            <span class="ds-nav__menu-icon-line-1"></span>
            <span class="ds-nav__menu-icon-line-2"></span>
            <span class="ds-nav__menu-icon-line-3"></span>
          </div>
        </div>

        <div class="ds-nav-mobile-overlay">
          <div class="ds-nav-mobile-overlay__popup-nav">
            <div class="ds-nav-mobile-overlay__popup-nav-wrapper">
              <div class="ds-nav-mobile-overlay__popup-nav-items-container">
                <ul class="ds-nav-mobile-overlay__popup-nav-items">
                  <li class="ds-nav-mobile-overlay__popup-nav-item-container scroll-link">
                    <a href="/">
                      <p class="ds-nav-mobile-overlay__popup-nav-item">Home</p>
                    </a>
                  </li>
                  <li class="ds-nav-mobile-overlay__popup-nav-item-container">
                    <a href="/insights">
                      <p class="ds-nav-mobile-overlay__popup-nav-item">Insights</p>
                    </a>
                  </li>
                  <li class="ds-nav-mobile-overlay__popup-nav-item-container">
                    <a href="/projects">
                      <p class="ds-nav-mobile-overlay__popup-nav-item">Projects</p>
                    </a>
                  </li>
                  <li class="ds-nav-mobile-overlay__popup-nav-item-container">
                    <a href="/contact">
                      <p class="ds-nav-mobile-overlay__popup-nav-item">Contact</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

</script>