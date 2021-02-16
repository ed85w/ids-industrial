<template>
    <div class="container-fluid" >
        <div id="nav-row" class="row" :class="{ scrolled : scrolled }">
            <nav id="navbar1" class="col-12 col-lg-11 pt-0 pb-0 navbar test" :class="{ scrolled : scrolled, active: showMobileMenu }">
                <div class="logo">
                    <NuxtLink to="/" exact>
                        <div class="logo-container">
                            <img class="logo" src="/img/ids-industrial-logo.png" alt="IDS Industrial Logo">
                        </div>
                    </NuxtLink>
                </div>
                <ul class="nav-menu p-0">
                    <li><nuxt-link to="/#about" exact>About</nuxt-link></li>
                    <!-- item with subitems  -->
                    <li class="item has-submenu">
                        <NuxtLink to="/services" tabindex="0" exact>Services</NuxtLink>
                        <button type="button" class="submenu-toggle" aria-expanded="false" v-on:click="toggleItem($event)">
                            <span class="submenu-open-icon">
                                <i class="fa fa-caret-down"></i>
                            </span>
                        </button>
                        <ul class="submenu">
                            <li class="subitem"><nuxt-link to="#" exact>Project Feasibility Studies and Commercial Planning</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Principle Designer Duties and Comprehensive HSE</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Demolition Project Management</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Explosive Demolition Management</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Temporary Works Management</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Structural Engineering</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Remediation Management</nuxt-link></li>
                        </ul>
                    </li>
                    <!-- end of item with subitems  -->
                    <!-- item with subitems  -->
                    <li class="item has-submenu">
                        <NuxtLink to="/industries" tabindex="0" exact>Industries</NuxtLink>
                        <button type="button" class="submenu-toggle" aria-expanded="false" v-on:click="toggleItem($event)">
                            <span class="submenu-open-icon">
                                <i class="fa fa-caret-down"></i>
                            </span>
                        </button>
                        <ul class="submenu">
                            <li class="subitem"><nuxt-link to="#" exact>Manufacturing and Industrial</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Oil and Gas</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Power Generation</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Petrochemical</nuxt-link></li>
                            <li class="subitem"><nuxt-link to="#" exact>Pharmaceutical</nuxt-link></li>
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
            console.log(btn.currentTarget)
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
        display: block;
        position: fixed;
        top: 0;
        width: 100%;
        overflow: hidden;

        #navbar1 {
            position: static;

            img.logo {
                height: 70px;
            }

            // burger
            #burger-menu {
                position: absolute;
                top: 14px;
                right: 17px;
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
                    padding: 10px 10px;

                    &.item.has-submenu {
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        overflow: hidden;

                        ul.submenu {
                            width: 100%;
                            display: block;
                            list-style: none;
                            text-align: left;
                            // background: 
                            transition: 0.5s ease;
                            height: 0;
                            transition: max-height 0.5s ease;
                        }

                        button.submenu-toggle {
                            width: 20px;
                            background: transparent;
                            border: none;

                            span i {
                                color: $ids-blue;
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
                                color: $ids-yellow;
                            }
                        }
                    }
                }
            }
            // active nav menu 
            &.active {
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


/* tablets and above */
@media (min-width: 768px) {

body {

    #nav-row {

        overflow: visible;

        #navbar1 {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
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
                    margin: 0 5px;
                    padding: 5px;
                    text-align: center;

                    a {
                        font-size: 14px;
                    }

                    &:hover {
                        background: $ids-yellow;
                    }

                }

                li.item.has-submenu {

                    align-items: center;
                    flex-wrap: nowrap;

           
                    // submenu 
                    ul.submenu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        height: auto;
                        display: none;
                        left: initial;
                        width: auto;

                        li {
                            background: $ids-blue;

                            a {
                                font-size: 10px;
                            }
                        }

                        // TRIANGLES 
                        // &::before {
                        //     content: "^";
                        //     background: transparent;
                        //     position: relative;
                        //     top: -22px;
                        //     left: 37%;
                        //     // transform: translateX(-50%);
                        // }
                        
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


}

</style>