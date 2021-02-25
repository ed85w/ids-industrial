<template>
    <div class="wrapper page-content">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-end pb-5 landing-home">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
            >
              <b-carousel-slide
                img-src="~static/img/power-station-carousel.jpeg"
                class="carousel-img carousel-1"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="~static/img/greece-carousel.jpeg"
                class="carousel-img carousel-2"
              ></b-carousel-slide>
              <b-carousel-slide
                img-src="~static/img/teeside-carousel.jpg"
                class="carousel-img carousel-3"
              ></b-carousel-slide>
            </b-carousel>
            <div id="carousel-overlay" class="col-12 col-md-10 col-lg-8 text-right pb-3">
              <h1 class="m-0 pb-5 home-title">Sustainable, Decommissioning<br class="d-none d-md-block"> & <br class="d-md-none">Demolition Management</h1>
              <h5 class="m-0 pb-5 home-tagline">Safe and cost-effective project management<br class="d-none d-md-block"> from conception <br class="d-md-none">through to completion</h5>
              <button class="btn yellow-btn"><nuxt-link to="/services">Our services</nuxt-link></button>
            </div>
          </div>
        </div>
        <!-- about section  -->
        <section id="about" class="container-fluid">
          <div class="row pt-0 pt-md-5 pb-3 pb-md-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-5 pb-5">
              <h3 class="sub-title">
                About Us
              </h3>
              <p class="body-text font-weight-bold">IDS Industrial is an internationally recognised decommissioning & demolition consultancy with extensive experience in high hazardous industries.</p>
              <p class="body-text">Our experienced team has been committed to providing total solutions for the safe, environmentally secure and cost-effective delivery of decommissioning, decontamination, dismantling and demolition projects worldwide.</p>
              <p class="body-text">We operate a ‘One Team, One Goal’ approach to projects where we strongly promote collaborative working between client, project team and contractor to deliver complex and challenging projects safely.</p>
              <p class="body-text">Our specialist industries include Manufacturing & Industrial, Oil & Gas, Power Generation, Petrochemical and Pharmaceutical.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/services">Services</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- why choose IDS section  -->
        <section id="why-ids" class="container-fluid image-background-section">
          <div class="row pt-3 pt-md-5 pb-3 pb-md-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-5 pb-5">
              <h3 class="sub-title">
                Why choose<br class="d-none d-lg-block"> IDS Industrial?
              </h3>
              <ul class="pl-3">
                <li>IDS Industrial offers a one stop shop and a range of services that exceed expectations, from initial project planning through to decommissioning, demolition and site remediation.</li>
                <li>Extensive experience in construction and demolition safety management ensuring industry best practices is achieved to reduce both SHE and operational risk to clients.</li>
                <li class="pb-0">Project Management capabilities to meet the most demanding of projects.</li>
              </ul>
            </div>
          </div>
        </section>
        <!-- experience section  -->
        <section class="container-fluid">
          <div class="row pt-3 pt-md-5 pb-3 pb-md-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-5 pb-5">
              <h3 class="sub-title">
                Our Experience
              </h3>
              <p class="body-text">IDS have over 35 years’ experience carrying out decommissioning, dismantling & demolition in some of the most demanding, hazardous and safety critical industries in the world.</p>
              <p class="body-text">We have extensive experience working in the UK and Internationally with multiple projects completed in the Middle East as well as providing consultancy support on tendering opportunities in the Far East.</p>
              <p class="body-text">We have the in-house capabilities to manage the entire decommissioning and demolition phases to offer a complete project solution with the aim of exceeding clients’ expectations.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact us</nuxt-link></button>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
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
    mounted () {
      // add class to navbar to identify home page 
      document.body.classList.add('home')
      // gsap 
      gsap.registerPlugin(ScrollTrigger)
      var bodyText = gsap.utils.toArray('.body-text');
      bodyText.forEach((bodyText) => {
        gsap.from(bodyText, { 
          opacity: 0,
          duration: 1,
          scrollTrigger: {
              trigger: bodyText,
              toggleActions: "restart none none none",
              scrub: 2
          }
        });
      })
    },
    destroyed () {
      document.body.classList.remove('home')
    },
}
</script>

<style lang="scss">

div.wrapper {
  margin-top: 0;
  
  .container-fluid {
    height: 100%;

    .row.landing-home {
      position: relative;
      height: 80vh;
      min-height: 480px;
      color: white;

      #carousel-fade {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .carousel-inner,
        .carousel-item {
          height: 100%;

          img.img-fluid {
            height: 100%;
            object-fit: cover;
          }

          &.carousel-3 img.img-fluid {
            object-position: 10%;
          }

        }
      }

      #carousel-overlay {
        z-index: 2;

      }
      h1.home-title {
        font-size: 6.5vw
      }

      h5.home-tagline {
        font-family: 'Lato', sans-serif;
        font-size: 5vw;
      }


    }
  }

  #why-ids {
    background: url('~static/img/oil-refinary-flexicoker.jpg') no-repeat center center; 
    background: linear-gradient(rgba(black, 0.3), rgba(black, 0.3)), url('~static/img/oil-refinary-flexicoker.jpg'); 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  
    h2 {
      color: white;
    }

    ul li {
      font-family: 'Lato', sans-serif;
      color: white;
      padding-bottom: 1rem;
    }
  }
}


/* tablets and above */
@media (min-width: 768px) {

  div.wrapper {
    margin-top: 0;
    
    .container-fluid {
      
      .row.landing-home {

        height: 100vh;
        min-height: 500px;
        margin-top: 0;

        h1.home-title {
          font-size: 2.5rem;
        }

        h5.home-tagline {
          font-size: 2rem;
        }

      }

    }

  }

  #why-ids {

    ul {
      width: 50%;
    }
  }


}

// laptops/desktops 
@media (min-width: 992px) {

  div.wrapper .container-fluid .row.landing-home {
    
    h1.home-title {
      font-size: 3rem;
    }
  }

}

</style>
