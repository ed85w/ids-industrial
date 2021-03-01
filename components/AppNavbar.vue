<template>
    <div class="container-fluid" >
        <div id="nav-row" class="row justify-content-center" :class="{ scrolled : scrolled, active: showMobileMenu }">
            <nav id="navbar1" class="col-12 col-md-10 col-lg-8 pt-0 pb-0 navbar" :class="{ scrolled : scrolled, active: showMobileMenu }">
                <div class="logo">
                    <NuxtLink to="/" exact>
                        <div class="logo-container">
                            <img class="logo" src="~static/img/ids-industrial-logo.png" alt="IDS Industrial Logo">
                        </div>
                    </NuxtLink>
                </div>
                <ul class="nav-menu p-0">
                    <!-- item with subitems  -->
                    <li class="item has-submenu pb-0">
                        <NuxtLink to="/#about" tabindex="0" exact>About</NuxtLink>
                        <button type="button" class="submenu-toggle ml-3 ml-md-1" aria-expanded="false" v-on:click="toggleItem($event)">
                            <span class="submenu-open-icon">
                                <i class="fa fa-caret-down"></i>
                            </span>
                        </button>
                        <ul class="submenu">
                            <li class="subitem"><a href="./docs/2021 IDS Industrial - For Clients.pdf" target="_blank">Company Brochure</a></li>
                            <li class="subitem"><a href="./docs/20210101 Health and Safety Policy Statement.pdf" target="_blank">Health & Safety Policy Statement</a></li>
                            <li class="subitem"><a href="./docs/20210101 Environmental Policy Statement.pdf" target="_blank">Environmental Policy Statement</a></li>
                        </ul>
                    </li>
                    <!-- end of item with subitems  -->
                    <!-- item with subitems  -->
                    <li class="item has-submenu pb-0">
                        <NuxtLink to="/services" tabindex="0" exact>Services</NuxtLink>
                        <button type="button" class="submenu-toggle ml-3 ml-md-1" aria-expanded="false" v-on:click="toggleItem($event)">
                            <span class="submenu-open-icon">
                                <i class="fa fa-caret-down"></i>
                            </span>
                        </button>
                        <ul class="submenu">
                            <li class="subitem"><nuxt-link to="/services#feasibility" exact>Project Feasibility Studies and Commercial Planning</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/services#principal" exact>Principle Designer Duties and Comprehensive HSE</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/services#demolition" exact>Demolition Project Management</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/services#explosive-demolition" exact>Explosive Demolition Management</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/services#temporary-works" exact>Temporary Works Management</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/services#structural-engineering" exact>Structural Engineering</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/services#remediation" exact>Remediation Management</nuxt-link></li>
                        </ul>
                    </li>
                    <!-- end of item with subitems  -->
                    <!-- item with subitems  -->
                    <li class="item has-submenu pb-0">
                        <NuxtLink to="/industries" tabindex="0" exact>Industries</NuxtLink>
                        <button type="button" class="submenu-toggle ml-3 ml-md-1" aria-expanded="false" v-on:click="toggleItem($event)">
                            <span class="submenu-open-icon">
                                <i class="fa fa-caret-down"></i>
                            </span>
                        </button>
                        <ul class="submenu">
                            <li class="subitem"><nuxt-link to="/industries#manufacturing" exact>Manufacturing and Industrial</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/industries#oil-and-gas" exact>Oil and Gas</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/industries#power-generation" exact>Power Generation</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/industries#petrochemical" exact>Petrochemical</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="/industries#pharmaceutical" exact>Pharmaceutical</nuxt-link></li>
                        </ul>
                    </li>
                    <!-- end of item with subitems  -->
                    <li><nuxt-link to="contact" exact>Contact</nuxt-link></li>
                </ul>
                <button id="burger-menu" :aria-expanded="showMobileMenu ? 'true' : 'false'" @click="showMobileMenu = !showMobileMenu">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
            showMobileMenu: false
        }
    },
    methods: {
        onResize(e) {
            const submenuItems = document.querySelectorAll(".has-submenu");
            if(window.innerWidth > 991 && this.showMobileMenu == true) {
                this.showMobileMenu = false;
                // remove active subitem class (if active)
                for (var item of submenuItems){
                    if (item.classList.contains("submenu-active")){
                        item.classList.remove("submenu-active");
                    }
                }
            }   
        },
        toggleItem: function(btn) {
            const menu = document.querySelector("#navbar1");
            // on close (no other submenu open)
            if (btn.currentTarget.parentNode.classList.contains("submenu-active")) {
                btn.currentTarget.parentNode.classList.remove("submenu-active");
                btn.currentTarget.setAttribute("aria-expanded", false);
            } else if (menu.querySelector(".submenu-active")) {
            // on close (other submenu open)
                let toggleBtns = menu.querySelectorAll("button.submenu-toggle")
                for (let togBtn of toggleBtns) {
                    togBtn.setAttribute("aria-expanded", false);
                }
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
                btn.currentTarget.parentNode.classList.add("submenu-active");
                btn.currentTarget.setAttribute("aria-expanded", true);
            } else {
            // on normal open (no other submenu open)
                btn.currentTarget.parentNode.classList.add("submenu-active");
                btn.currentTarget.setAttribute("aria-expanded", true);
            }
        },
        handleScroll () {
            if(window.scrollY > 30) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
    // Unregister the event listener before destroying this Vue instance
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('scroll', this.handleScroll);
    },
    // toggleMenu on page change (remove menu) 
    watch:{
        $route (to, from){
            const navMenu = document.querySelector('ul.nav-menu');
            this.showMobileMenu = false;
            if (navMenu.querySelector(".submenu-active")){
                navMenu.querySelector(".submenu-active").classList.remove("submenu-active")
            }
        } 
    }
}
</script>

<style lang="scss">

body {

    #nav-row {
        z-index: 999;
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        overflow: hidden;
        transition: 0.3s ease-in;
        background: white;

        #navbar1 {


            img.logo {
                height: 70px;
            }

            // burger
            #burger-menu {
                position: absolute;
                top: 14px;
                right: 9px;
                background: transparent;
                border: none;

                .burger-line {
                    display: block;
                    position: relative;
                    width: 35px;
                    height: 4px;
                    background-color: $ids-blue;
                    margin: 7px;

                    &:nth-of-type(1){
                        width: 26px;
                    }
                    &:nth-of-type(3){
                        width: 26px;
                        right: -9px;
                    }
                }
            }
            // end of burger 

            // nav menu 
            ul.nav-menu {
                position: relative;
                left: 0;
                width: 100%;
                display: none;
                list-style: none;
                text-align: center;

                li {
                    width: 100%;
                    margin: 0;
                    text-align: left;
                    padding: 10px 10px 10px 20px;

                    a {
                        color: $ids-blue;
                        transition: 0.3s ease-in;
                        
                        &.focus {
                            outline: none;
                        }
                    }


                    &.item.has-submenu {
                        display: flex;
                        flex-wrap: wrap;
                        overflow: hidden;
                        padding-right: 6px; 

                        ul.submenu {
                            width: 100%;
                            display: block;
                            list-style: none;
                            text-align: left;
                            transition: 0.5s ease;
                            height: 0;
                            transition: max-height 0.5s ease;

                            // .subitem:last-child {
                            //     padding-bottom: 0;
                            // }
                        }

                        button.submenu-toggle {
                            width: 20px;
                            background: transparent;
                            border: none;

                            &:focus {
                                outline: none;
                            }

                            span i {
                                padding: 0;
                                color: $ids-blue;
                                transition: 0.3s ease-in;
                            }
                        }

                        // active submenu 
                        &.submenu-active {

                            ul.submenu {
                                display: block;
                                height: auto;
                                text-align: center;
                                padding: 0;
                                transition: max-height 0.5s ease;
                            }

                            button.submenu-toggle span i {
                                // color: $ids-yellow;
                            }
                        }
                    }
                }
            }
            // active nav menu 
            &.active {
                max-height: 100vh;
                overflow: scroll;
                background: white;

                ul.nav-menu {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        } 
    }
}

// homepage only styles 
body.home {

    #nav-row {

        background: transparent;

        &.active {
            background: white;
            transition: 0s;
        }

        #navbar1 {

            #burger-menu {

                div {
                    background: white;
                }
            }
            // if active or scrolled (chage from white to blue) 
            &.active,
            &.scrolled {

                #burger-menu {
                    div {
                        background: $ids-blue;
                    }
                }
            }
        }
    }

    #nav-row.scrolled {

        min-height: 75px;
        background: white;

    }
}


// laptops/desktops 
@media (min-width: 992px) {

body {

    #nav-row {

        overflow: visible;

        #navbar1 {
            position: relative;
            display: flex;
            align-items: center;
            overflow: initial;

            // logo 
            img.logo {
                height: 80px;
            }

            #burger-menu {
                display: none;
            }

            ul.nav-menu {
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                width: auto;
                margin: 0;


                // nav item styling 
                li {
                    width: auto;
                    margin: 0 1rem;
                    padding: 1px;
                    text-align: center;

                    a {
                        display: block;
                        padding: 5px;
                        font-size: 14px;
                        color: $ids-blue;
                        transition: 0s;

                        &:hover {
                            text-decoration: none;
                        }
                    }

                    &:hover {
                        background: $ids-yellow;
                        transition: 0s;
                    }

                }

                li.item.has-submenu {
                    justify-content: center;
                    align-items: center;
                    flex-wrap: nowrap;

                    button.submenu-toggle span i {
                        padding-top: 8px;
                        padding-bottom: 8px;
                        transition: 0s;
                    }

           
                    // submenu 
                    ul.submenu {
                        position: absolute;
                        top: 100%;
                        left: initial;
                        height: auto;
                        display: none;
                        width: auto;
                        text-align: center;

                        li {
                            background: $ids-blue;
                            // line-height: 1;
                            padding: 10px 5px;
                            background: #2a4b9beb;
                            border-top: 3px solid #2a4b9b;

                            a {
                                color: white;

                                &:focus {
                                    outline: none;
                                }
                            }

                            &:hover a {
                                color: $ids-yellow;
                            }
                        }

                        // TRIANGLES 
                        &::before {
                            content: "";
                            background: transparent;
                            position: relative;
                            pointer-events: none;
                            width: 0; 
                            height: 0; 
                            border-left: 20px solid transparent;
                            border-right: 20px solid transparent;
                            border-bottom: 25px solid $ids-blue;
                            top: -22px;
                            // left: 50%;
                            // transform: translateX(-50%);
                        }
                        
                    }

                    // active submenu 
                    &.has-submenu:hover > ul.submenu {
                        display: block;
                        padding: 0;
                    }
                }
            }
        }
    }
}

// homepage only styles 

body.home {

    #nav-row #navbar1 ul.nav-menu li {
        a {
        color: white;
        // transition: 0s; NOT SURE ABOUT THIS ONE?
        }
    
        &:hover {

            a {
            text-decoration: none;
            color: $ids-blue;
            transition: 0s;
            }
        }
        &.item.has-submenu:hover {
            button.submenu-toggle span i {
                color: $ids-blue;
                transition: 0s;
            }
        }
    }

    #nav-row {

        #navbar1 ul.nav-menu li.item.has-submenu button.submenu-toggle span i {
            color: white;
        }

        &.scrolled #navbar1 ul.nav-menu li a {
            color: $ids-blue;
        }
    

        &.scrolled #navbar1 ul.nav-menu li.item.has-submenu button.submenu-toggle span i {
            color: $ids-blue;
        }
    }
}

}

</style>