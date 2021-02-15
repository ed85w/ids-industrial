<template>
    <div class="wrapper">
        <nav class="navbar pl-0 pr-0 test">
                <div class="logo-and-burger">
                    <NuxtLink to="/" exact>
                        <div class="logo-container">
                            <img class="logo" src="/img/ids-industrial-logo.png" alt="">
                        </div>
                    </NuxtLink>
                </div>
                <ul class="nav-menu">
                    <li><nuxt-link to="#" exact>About</nuxt-link></li>
                    <!-- item with subitems  -->
                    <li class="item has-submenu">
                        <NuxtLink to="/services" tabindex="0" exact>Services</NuxtLink>
                        <button type="button" class="submenu-toggle" aria-expanded="false" v-on:click="toggleItem($event)">
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
                        <button type="button" class="submenu-toggle" aria-expanded="false" v-on:click="toggleItem($event)">
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
                <button id="burger-menu" aria-expanded="false" v-on:click="toggleMenu()">
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                    <div class="burger-line"></div>
                </button>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        toggleMenu: function() {
            const menu = document.querySelector(".nav-menu");
            const burgerMenu = document.querySelector("#burger-menu");
            const submenuItems = document.querySelectorAll(".has-submenu");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                burgerMenu.setAttribute("aria-expanded", false);
                // remove active subitem class (if active)
                for (var item of submenuItems){
                    if (item.classList.contains("submenu-active")){
                        item.classList.remove("submenu-active");
                        console.log(item)
                    }
                }
            } else {
                menu.classList.add("active");
                burgerMenu.setAttribute("aria-expanded", true);
            }
        },
        onResize(e) {
            const menu = document.querySelector(".nav-menu");
            const burgerMenu = document.querySelector("#burger-menu");
            const submenuItems = document.querySelectorAll(".has-submenu");
            if(window.innerWidth > 991 && menu.classList.contains("active")) {
                menu.classList.remove("active");
                burgerMenu.setAttribute("aria-expanded", false);
                // remove active subitem class (if active)
                for (var item of submenuItems){
                    if (item.classList.contains("submenu-active")){
                        item.classList.remove("submenu-active");
                        console.log(item)
                    }
                }
            }   
        },
        toggleItem: function(btn) {
            console.log(btn.currentTarget)
            const menu = document.querySelector(".nav-menu");
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
    mounted() {
    // Register an event listener when the Vue component is ready
    window.addEventListener('resize', this.onResize)
    },

    beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener('resize', this.onResize)
    },
    // toggleMenu on page change (remove menu) 
    watch:{
    $route (to, from){
        if(window.innerWidth < 992){
            this.toggleMenu();
        } else {
            const menu = document.querySelector(".nav-menu");
            const toggleBtns = menu.querySelectorAll("button.submenu-toggle")
            for (let togBtn of toggleBtns) {
                togBtn.setAttribute("aria-expanded", false);
            }
            if(menu.querySelector(".submenu-active")){
                menu.querySelector(".submenu-active").classList.remove("submenu-active");
            }
        }
    }
} 
}
</script>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

nav.navbar {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    overflow: hidden;

    // logo 
    img.logo {
        height: 70px;
    }
    
    ul.nav-menu {
        position: relative;
        left: 0;
        width: 100%;
        display: none;
        background: lightblue;
        list-style: none;
        text-align: center;

        &.active {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        li {
            width: 100%;
            margin: 0;
            padding: 20px 10px;

            &.item.has-submenu {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                overflow: hidden;

                &.submenu-active {

                    ul.submenu {
                        display: block;
                        height: auto;
                        max-height: 1000px;
                        transition: max-height 0.5s ease;
                    }

                    button.submenu-toggle span i {
                        color: $ids-yellow;
                    }
                }

                /* submenu icons  */
                button.submenu-toggle {
                    width: 20px;
                    background: transparent;
                    border: none;

                    &.active {
                        border: 1px solid black
                    }

                    span i {
                        color: $ids-blue;
                    }
                }

            }

            ul.submenu {
                width: 100%;
                display: block;
                list-style: none;
                text-align: left;
                background: lightcoral;
                transition: 0.5s ease;
                height: 0;
                transition: max-height 0.5s ease;
            }

        }
    }

    // burger
    #burger-menu {
        position: absolute;
        top: 23px;
        right: 24px;

        .burger-line {
            display: block;
            width: 35px;
            height: 4px;
            background-color: black;
            margin: 7px;
        }
    }
}

/* desktop */
@media (min-width: 992px) {

    nav.navbar {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 2500px;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: auto;
        margin-left: auto;
        background: transparent;
        overflow: initial;

        // logo 
        img.logo {
            height: 100px;
        }

        ul.nav-menu {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            width: auto;
            margin: 0;
        
            li {
                width: auto;
                margin: 0 5px;
                padding: 5px 10px;

                a {
                    font-size: 14px;
                }

                &:hover {
                    background: $ids-yellow;
                }

                &.item {
                position: relative;

                    &.has-submenu {
                        display: flex;
                        align-items: center;
                        flex-wrap: nowrap;
                        overflow: visible;

                        /* submenu icons  */
                        span.submenu-close-icon {
                            display: none;
                        }

                        &.submenu-active > button > span.submenu-open-icon i,
                        &.has-submenu:hover > button > span.submenu-open-icon i {

                            // color: $ids-yellow;
                        }

                        &.submenu-active ul.submenu,
                        &.has-submenu:hover > ul.submenu {
                            display: block;
                        }

                        li.back-button {
                            display: none;
                        }

                    }
                }

                ul.submenu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    height: auto;
                    display: none;
                    left: initial;
                    width: auto;
                }
            }
        
        }

        #burger-menu {
            display: none;
        }

    }

}

</style>