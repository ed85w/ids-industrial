<template>
    <div class="container-fluid" >
        <div id="nav-row" class="row" :class="{ scrolled : scrolled }">
            <nav id="navbar1" class="col-12 col-lg-11 pt-0 pb-0 navbar test" :class="{ active : showMobileMenu}">
                <div class="logo-and-burger">
                    <NuxtLink to="/" exact>
                        <div class="logo-container">
                            <img class="logo" src="/img/ids-industrial-logo.png" alt="IDS Industrial Logo">
                        </div>
                    </NuxtLink>
                </div>
                <button id="burger-menu" aria-expanded="false" @click="showMobileMenu = !showMobileMenu">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
            </nav>
        </div>
        <div class="row nav-menu-row" :class="{ active : showMobileMenu}">
            <ul class="nav-menu p-0">
                <li><nuxt-link to="/#about" exact>About</nuxt-link></li>
                <!-- item with subitems  -->
                <li class="item has-submenu">
                    <NuxtLink to="/services" tabindex="0" exact>Services</NuxtLink>
                    <button type="button" class="submenu-toggle" aria-expanded="false" v-on:click="submenuToggle($event)">
                        <span class="submenu-open-icon">
                            <i class="fa fa-caret-down"></i>
                        </span>
                    </button>
                    <ul class="submenu">
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                    </ul>
                </li>
                <!-- end of item with subitems  -->
                <!-- item with subitems  -->
                <li class="item has-submenu">
                    <NuxtLink to="/industries" tabindex="0" exact>Industries</NuxtLink>
                    <button type="button" class="submenu-toggle" aria-expanded="false" v-on:click="submenuToggle($event)">
                        <span class="submenu-open-icon">
                            <i class="fa fa-caret-down"></i>
                        </span>
                    </button>
                    <ul class="submenu">
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                        <li class="subitem"><nuxt-link to="#" exact>item 1</nuxt-link></li>
                    </ul>
                </li>
                <!-- end of item with subitems  -->
                <li><nuxt-link to="contact" exact>Contact</nuxt-link></li>
            </ul>
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
        handleScroll () {
            if(window.scrollY > 30) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        },
        submenuToggle(btn) {
            console.log(btn.currentTarget)
            const menu = document.querySelector("#navbar1");
            // on close (no other submenu open)
            if (btn.currentTarget.parentNode.classList.contains("submenu-active")) {
                console.log("1");
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
                console.log("3");
                btn.currentTarget.parentNode.classList.add("submenu-active");
                btn.currentTarget.setAttribute("aria-expanded", true);
            }
        }
    },
    beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style lang="scss">

body {
    // fixed navigation row 
    #nav-row {
        z-index: 9999;
        display: block;
        position: fixed;
        top: 0;
        width: 100%;
        overflow: hidden;

        #navbar1 {
            position: static;

            &.active {
                background: white;
            }

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
        }
    }
    // nav items
    .nav-menu-row {
        position: absolute;
        width: 100%;
        height: 0; 
        top: 75px;
        // left: 0;
        justify-content: center;
        overflow: hidden;

        &.active {
            height: auto;
        }

        ul.nav-menu {
            width: 100%;
            text-align: center;
            z-index: 999;

            li {
                padding: 15px;
                background: white;
                list-style: none;

                &.has-submenu {
                    overflow: hidden;

                    ul.submenu {
                        padding: 0;
                        height: 0;

                    }
                }
                &.submenu-active {

                    ul.submenu {
                        height: auto;
                    }
                }
            }
        }
    }
}

// homepage only styles 
body.home {

    #nav-row.scrolled {

        min-height: 75px;
        background: white;

    }
}


/* desktop */
@media (min-width: 992px) {

}
</style>