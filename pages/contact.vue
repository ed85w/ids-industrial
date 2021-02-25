<template>
    <div class="page-content">
        <div class="container-fluid image-background-section landing-contact">
            <div class="row pt-5 pb-5 justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
                    <h2 class="m-0 pb-5 page-title">Contact us</h2>
                    <!-- <h5 class="m-0 pb-5">Project delivery starts here</h5> -->
                </div>
                <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
                    <form method="POST" action="https://formspree.io/f/mdopvvzw">
                    <div class="form-row">
                        <div class="col-12 col-md-6 pr-md-3">
                            <div class="row">
                                <div class="form-group col-12">
                                <label for="name">Name:</label>
                                <input id="name" type="text" class="form-control" name="name" required>
                                </div>

                                <div class="form-group col-12">
                                <label for="phone">Phone:</label>
                                <input id="phone" type="text" class="form-control" name="phone" required>
                                </div>

                                <div class="form-group col-12">
                                <label for="email">Email address:</label>
                                <input id="email" type="email" class="form-control" name="email" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 pl-md-3">
                            <div class="row">
                                <div class="form-group col-12">
                                <label for="enquiry">Enquiry:</label>
                                <textarea id="enquiry" class="form-control" name="enquiry" required />
                                </div>
                            </div>
                        </div>

                        <button type="btn" class="btn yellow-btn mt-4" aria-label="submit form">
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- <section class="contact-form mt-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
                    <form method="POST" action="https://formspree.io/f/mdopvvzw">
                    <div class="form-row">
                        <div class="form-group col-12 col-md-6">
                        <label for="name">Name:</label>
                        <input id="name" type="text" class="form-control" name="name" required>
                        </div>

                        <div class="form-group col-12 col-md-6">
                        <label for="phone">Phone:</label>
                        <input id="phone" type="text" class="form-control" name="phone" required>
                        </div>

                        <div class="form-group col-12">
                        <label for="email">Email address:</label>
                        <input id="email" type="email" class="form-control" name="email" required>
                        </div>

                        <div class="form-group col-12">
                        <label for="enquiry">Enquiry:</label>
                        <textarea id="enquiry" class="form-control" name="enquiry" required />
                        </div>

                        <button type="btn" class="btn yellow-btn mt-4" aria-label="submit form">
                        Submit
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </section> -->
        <section class="container-fluid directors">
            <div class="row pt-5 pb-5 justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 pt-3 pb-3 pt-md-5 pb-md-5">
                    <div class="row">
                        <div class="col-12 col-md-6 pb-5 pb-md-0 text-center">   
                            <img class="contact-img" src="~static/img/dave-straker.jpg" alt="Dave Straker - director of IDS Industrial">
                            <h5 class="director-name">Dave Straker</h5>
                            <h5 class="director-title">Director</h5>
                            <p class="pb-3 pb-md-0 mb-0"><a href="mailto:dave@idsindustrial.co.uk">dave@idsindustrial.co.uk</a><br>
                            <a href="tel:+44 7920 102357">+44 7920 102357</a></p>

                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <img class="contact-img" src="~static/img/ian-straker.jpg" alt="Ian Straker - director of IDS Industrial">
                            <h5 class="director-name">Ian Straker</h5>
                            <h5 class="director-title">Director</h5>
                            <p class="mb-0"><a href="mailto:ian@idsindustrial.co.uk">ian@idsindustrial.co.uk</a><br>
                            <a href="tel:+44 7807 385954">+44 7807 385954</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  
</template>

<script>
export default {
    head(){
      return {
        title: 'IDS Industrial | Contact',
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

<style lang="scss" scoped>

.landing-contact {
    background: linear-gradient(rgba($ids-blue, 0.2), rgba($ids-blue, 0.2)), url('~static/img/petrochemical.jpg') 40% center / cover no-repeat;

}

.contact-form {
    background: linear-gradient(rgba($ids-blue, 0.2), rgba($ids-blue, 0.2)), url('~static/img/dortmund-steel.jpg') center 80% / cover no-repeat;
}

h5.director-name {
    font-family: 'Audiowide', cursive;
    color: $ids-blue;
}

h5.director-title {
    font-family: 'Audiowide', cursive;
    color: $ids-yellow;
}

p a {
    font-family: 'Lato', sans-serif;
    color: $ids-grey;
}

img.contact-img {
    width: 80%;
    object-fit: cover;
    padding-bottom: 1rem;
}

input,
textarea {
    border: none;
    border-radius: 0;
}

/* tablets and above */
@media (min-width: 768px) {

    textarea {
        height: 229%;
    }

    img.contact-img {
        width: 60%;
    }


}

</style>