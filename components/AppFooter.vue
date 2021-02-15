<template>
  <footer class="footer container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-11">
        <div class="row">
          <div class="col-12 col-lg-6 text-center">
            <img src="/img/ids-industrial-logo.png" alt="IDS industrial logo" class="footer-logo">
          </div>
          <div class="col-12 col-lg-6 text-center">
            <p>IDS Industrial:<br>
            Parkhill Studio, Walton Road,<br>
            Wetherby, LS22 5DZ</p>
            <p>+44 7920 102357</p>
            <p>dave@idsndustrial.co.uk</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.footer.container-fluid {
  background: linear-gradient(rgba(0, 9, 92, 0.699), rgba(4, 17, 139, 0.699)), url('~static/img/oil-refinary-flexicoker.jpg'); 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  img.footer-logo {
    height: 70px;
  }

  p {
    color: white;
    font-family: 'Lato', sans-serif;
  }

}

</style>