<template>
  <footer class="footer container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 pt-5 pb-3 pt-md-5 pb-md-5">
        <div class="row">
          <div class="col-12 col-sm-6 order-sm-2 mb-5 mb-md-0 text-center text-sm-right">
            <img src="~static/img/IDS-logo-white.png" alt="IDS industrial logo" class="footer-logo">
          </div>
          <div class="col-12 col-sm-6 order-sm-1 text-center text-sm-left">
            <p><span>IDS Industrial:</span><br>
            Parkhill Studio, Walton Road,<br>
            Wetherby, LS22 5DZ</p>
            <p><a href="tel:+44 7920 102357">+44 7920 102357</a></p>
            <p><a href="mailto:dave@idsindustrial.co.uk">dave@idsindustrial.co.uk</a><br>
            <a href="mailto:ian@idsindustrial.co.uk">ian@idsindustrial.co.uk</a></p>
            <p class="small mb-md-0"><a href="https://www.koodi.co.uk/" target="_blank" rel="noopener">Built by Koodi</a></p>
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
  background: linear-gradient(rgba($ids-blue, 0.699), rgba($ids-blue, 0.699)), url('~static/img/ellesmere-port.jpg') center 60% / cover no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  img.footer-logo {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 220px;
    height: 55px;

  }

  p {
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 1.3;

    &.small {
      font-size: 12px;
    }
    
    a {
      font-family: 'Lato', sans-serif;
      color: white;

      &:hover {
        text-decoration: none;
        color: $ids-yellow;
      }
    }

    span {
      font-family: 'Audiowide', cursive;
    }
  }

}

</style>