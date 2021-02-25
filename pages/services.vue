<template>
    <div class="page-content">
        <!-- landing  -->
        <div class="container-fluid image-background-section landing-services">
          <div class="row pt-5 pb-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h2 class="m-0 pb-5 page-title">Our Services</h2>
              <h5 class="m-0 pb-5 page-tagline">IDS Industrial can provide a full suite of services to prospective clients to ensure all aspects of the project are accounted for, planned for and managed accordingly.</h5>
            </div>
          </div>
        </div>
        <!-- feasibility section  -->
        <section id="feasibility" class="container-fluid">
          <div class="row pt-5 pb-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Project Feasibility Studies &<br>Commercial Planning
              </h3>
              <p class="body-text">IDS can provide clients with early assessments of projects, provide budgeting advice and assist with any outline engagement with stakeholders and local authorities.</p>
              <p class="body-text">We can also assist in the procurement of specialist services for decommissioning, dismantling and demolition.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- Principal Designer section  -->
        <section id="principal" class="container-fluid image-background-section">
          <div class="row pt-5 pb-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Principal Designer Duties &<br>Comprehensive HSE Management
              </h3>
              <p class="body-text">We provide a tailored service to meet clients’ needs.</p>
              <p class="body-text">We can take responsibility for all pre-construction services as required within the CDM regulations to drive down project risk and provide tendering contractors with all essential information to safely demolish the structures.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- demolition section  -->
        <section id="demolition" class="container-fluid">
          <div class="row pt-5 pb-5 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Demolition Project <br class="d-md-none">Management
              </h3>
                <p class="body-text font-weight-bold">We have 35 years’ in-house experience of managing complex decommissioning & demolition projects from Nuclear Sites to City Centre Demolition.</p>              
              <p class="body-text">We can provide a complete engineering support function to live demolition projects, assisting clients in reviewing RAMS, providing technical advice and support, and overseeing the works to ensure safety standards are exceeded.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- explosive-demolition section  -->
        <section id="explosive-demolition" class="container-fluid image-background-section">
          <div class="row pt-5 pb-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Explosive Demolition <br class="d-md-none">Management
              </h3>
              <p class="body-text">We have in-house experience of managing the planning and execution phases of explosive events, from City Centre blasting through to blasting within Power Stations and Oil Refineries.</p>
              <p class="body-text">IDS can engage with specialist explosive engineers and work with them to manage the process from start to finish.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- temporary-works section  -->
        <section id="temporary-works" class="container-fluid">
          <div class="row pt-5 pb-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Temporary Works <br class="d-md-none">Management
              </h3>
              <p class="body-text font-weight-bold">Temporary works management in demolition is often overlooked. It is a fundamental aspect of any technical demolition project from pre-weakening, to propping, to explosive demolition.</p>
              <p class="body-text">Each stage of the project needs temporary work advice and management and this is something IDS can oversee and ensure that compliance with BS5975 is adhered to.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- structural-engineering section  -->
        <section id="structural-engineering" class="container-fluid image-background-section">
          <div class="row pt-5 pb-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Structural Engineering
              </h3>
              <p class="body-text">IDS can assist clients in the planning of demolition projects and provide detailed structural assessments of existing structures to assist demolition contractors in deciding on suitable methods of demolition.</p>
              <p class="body-text">The existing stability of a structure is often overlooked during demolition planning and can lead to an increased project risk, increased commercial risk and the appointment of an unsuitable contractor.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
        <!-- remediation section  -->
        <section id="remediation" class="container-fluid">
          <div class="row pt-5 pb-5 justify-content-center ">
            <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
              <h3 class="sub-title">
                Remediation Management
              </h3>
              <p class="body-text font-weight-bold">The cost to remediate land can be extensive. Early engagement with specialists can reduce commercial risk of a project greatly.</p>
              <p class="body-text">IDS can manage this engagement as part of our offering to ensure that costs are reduced wherever possible.</p>
              <button class="btn yellow-btn mt-4"><nuxt-link to="/contact">Contact</nuxt-link></button>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
export default {
      head(){
      return {
        title: 'IDS Industrial | Services',
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
    // gsap 
    gsap.registerPlugin(ScrollTrigger)
    var bodyText = gsap.utils.toArray('.body-text');
    bodyText.forEach((bodyText) => {
      gsap.from(bodyText, { 
        opacity: 0,
        y: 30,
        duration: 0.5,
        scrollTrigger: {
            trigger: bodyText,
            start: "center bottom", //when center of element crosses bottom of page
            end: "bottom center",   //when bottom of element crosses center of page
            toggleActions: "restart none none none",
        }
      });
    })
  }, 

}
</script>

<style lang="scss">

h5 {
  font-family: 'Lato', sans-serif;
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

.landing-services {
    background: linear-gradient(rgba($ids-blue, 0.2), rgba($ids-blue, 0.2)), url('~static/img/eggborough-power-station.jpg') 50% 50% / cover no-repeat;
    // background-attachment: fixed;
}

#principal {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('~static/img/sarens-crane.jpeg') center 80% / cover no-repeat;
}

#explosive-demolition {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('~static/img/eggborough-landscape.jpg') center center / cover no-repeat;
}

#structural-engineering {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('~static/img/dortmund-steel.jpg') center 80% / cover no-repeat;
}




/* tablets and above */
@media (min-width: 768px) {

    .image-background-section {

        p {
            max-width: 66%;
        }
    }
}

</style>