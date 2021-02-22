<template>
  <div>
    <AppNavbar/>
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>

import AppFooter from '../components/AppFooter';
import AppNavbar from '~/components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
    AppFooter
  }

}
</script>

<style lang="scss">

/* WHOLE SITE SETTINGS */
.test {
  border: 2px solid red;
}

* {
  font-family: 'Audiowide', cursive;
}

.page-content {
  margin-top: $page-margin-top-mob;
}

h3 {
  font-size: 1.2rem;
}
.sub-title {
  color: $ids-blue;
  margin: 0;
  padding-bottom: 2rem;
}

.body-text {
  color: $ids-grey;
  font-family: 'Lato', sans-serif;
  font-size: 0.9rem;
}

.yellow-btn {
  background: $ids-yellow;
  color: $ids-blue;
  border-radius: 0;
  padding: 3px 10px;

  a {
    color: $ids-blue;
  }

  &:hover {
    background: $ids-blue;

    a {
      text-decoration: none;
      color: $ids-yellow;;
    }

  }
}

.image-background-section {
    color: white;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    p {
      font-family: 'Lato', sans-serif;
      color: white;
      max-width: 100%;
    }

    h3.sub-title {
        color: white;
    }
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  
}
/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  .page-content {
    margin-top: $page-margin-top-desktop;
  }

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>
