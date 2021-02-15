<template>
  <div>
    <AppNavbar />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>

import AppNavbar from '../components/AppNavbar';
import AppFooter from '../components/AppFooter';

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
  font-family: 'Audiowide', cursive;;
}

.page-content {
  margin-top: 100px
}

.sub-title {
  color: $ids-blue;
  margin: 0;
  padding-bottom: 2rem;
}

.body-text {
  color: gray;
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

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  
}
/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {

  .max-width-container {
    /* max-width: 1000px; */
    // margin-right: auto;
    // margin-left: auto;
  }

}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

}


</style>
