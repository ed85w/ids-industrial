<template>
  <footer class="footer container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
        <div class="row">
          <div class="col-12 col-sm-6 order-sm-2 mb-3 mb-md-0 text-center text-sm-right">
            <img src="/img/ids-industrial-logo.png" alt="IDS industrial logo" class="footer-logo">
          </div>
          <div class="col-12 col-sm-6 order-sm-1 text-center text-sm-left">
            <p><span>IDS Industrial:</span><br>
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

<style scoped lang="scss">

.footer.container-fluid {
  background: linear-gradient(rgba(0, 9, 92, 0.699), rgba(4, 17, 139, 0.699)), url('~static/img/ellesmere-port.jpg') center 60% / cover no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  img.footer-logo {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 100px;

  }

  p {
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 1.3;

    span {
      font-family: 'Audiowide', cursive;
    }
  }

}

</style>