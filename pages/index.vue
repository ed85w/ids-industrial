<template>
    <div class="wrapper page-content landing-home">
        <!-- <h1>home</h1> -->
    </div>
</template>

<script>
export default {
  head(){
    return {
      title: 'IDS Industrial | Home',
      meta: [
        {
          hid: 'description', //id
          name: 'description', //meta type
          content: 'PUT DESCRIPTION HERE' //meta content
        }
      ]
    };
  },
}
</script>

<style scoped lang="scss">

nav.navbar {
  background: transparent;
}

div.landing-home {
  height: 60vh;
  min-height: 350px;
  width: 100vw;
  background: url('~static/img/power-station-carousel.jpeg') no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}


/* desktop */
@media (min-width: 992px) {

  div.landing-home {
    height: 100vh;
    margin-top: 0;
  }

}

</style>
