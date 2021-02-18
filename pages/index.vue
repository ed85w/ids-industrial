<template>
    <div class="wrapper page-content">
        <div class="container-fluid">
          <div class="row justify-content-center align-items-end pb-5 landing-home">
            <div class="col-12 col-md-10 col-lg-8 text-right pb-3 test">
              <h1 class="m-0 pb-5">Sustainable, Decommissioning<br>& Demolition Management</h1>
              <h5 class="m-0 pb-5">Safe and cost-effective project management<br>from conception through to completion</h5>
              <button class="btn yellow-btn"><nuxt-link to="/services">Services</nuxt-link></button>
            </div>
          </div>
        </div>
        <!-- about section  -->
        <section id="about" class="container-fluid">
          <div class="row pt-5 pb-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-5 pb-5">
              <h2 class="sub-title">
                About Us
              </h2>
              <p class="body-text font-weight-bold">IDS Industrial is an internationally recognised decommissioning & demolition consultancy with extensive experience in high hazardous industries.</p>
              <p class="body-text">Our experienced team has been committed to providing total solutions for the safe, environmentally secure and cost-effective delivery of decommissioning, decontamination, dismantling and demolition projects worldwide.</p>
              <p class="body-text">We operate a ‘One Team, One Goal’ approach to projects where we strongly promote collaborative working between client, project team and contractor to deliver complex and challenging projects safely.</p>
              <p class="body-text">Our specialist industries include Manufacturing & Industrial, Oil & Gas, Power Generation, Petrochemical and Pharmaceutical.</p>
              <button class="btn yellow-btn"><nuxt-link to="/services">Services</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- why choose IDS section  -->
        <section id="why-ids" class="container-fluid image-background-section">
          <div class="row pt-5 pb-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-5 pb-5 test">
              <h2 class="sub-title">
                Why choose<br class="d-none d-lg-block"> IDS Industrial?
              </h2>
              <ul class="pl-3">
                <li>IDS Industrial offers a one stop shop and a range of services that exceed expectations, from initial project planning through to decommissioning, demolition and site remediation.</li>
                <li>Extensive experience in construction and demolition safety management ensuring industry best practices is achieved to reduce both SHE and operational risk to clients.</li>
                <li>Project Management capabilities to meet the most demanding of projects.</li>
              </ul>
            </div>
          </div>
        </section>
        <!-- experience section  -->
        <section class="container-fluid">
          <div class="row pt-5 pb-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-5 pb-5">
              <h2 class="sub-title">
                Our Experience
              </h2>
              <p class="body-text">IDS have over 35 years’ experience carrying out decommissioning, dismantling & demolition in some of the most demanding, hazardous and safety critical industries in the world.</p>
              <p class="body-text">We have extensive experience working in the UK and Internationally with multiple projects completed in the Middle East as well as providing consultancy support on tendering opportunities in the Far East.</p>
              <p class="body-text">We have the in-house capabilities to manage the entire decommissioning and demolition phases to offer a complete project solution with the aim of exceeding clients’ expectations.</p>
              <button class="btn yellow-btn"><nuxt-link to="/contact">Contact us</nuxt-link></button>
            </div>
          </div>
        </section>
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
  mounted () {
    // add class to navbar to identify home page 
    document.body.classList.add('home')
  },
  destroyed () {
    document.body.classList.remove('home')
  }
}
</script>

<style scoped lang="scss">


div.wrapper {
  margin-top: 0;
  
  .container-fluid {
    height: 100%;

    .row.landing-home {
      height: 60vh;
      min-height: 480px;
      background: url('~static/img/power-station-carousel.jpeg') no-repeat center center; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      color: white;

      h1 {
        font-size: 4.8vw
      }

      h5 {
        font-family: 'Lato', sans-serif;
        font-size: 3.7vw;
      }

    }
  }

  #why-ids {
    background: url('~static/img/oil-refinary-flexicoker.jpg') no-repeat center center; 
    background: linear-gradient(rgba(0, 9, 92, 0.699), rgba(4, 17, 139, 0.699)), url('~static/img/oil-refinary-flexicoker.jpg'); 
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

        h1 {
          font-size: 2.5rem;
        }

        h5 {
          font-size: 1.25rem;
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

</style>
