<template>
    <head>
  <meta charset="UTF-8">
  <meta name="description" content="Vexa Studio est un studio de design graphique & développement
visant à créer et développer l'image numérique projetée par nos
clients partout sur le web.">
  <meta name="keywords" content="Graphic design, graphisme, design, développement, agence web, vexa studio, vexastudio, Vexa, Studio, tutoriels de graphisme, pas cher">
  <meta name="author" content="Vexa Studio inc.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
    <header>
        <NuxtLink to="/">
            <div class="brand">
                <div class="logo"></div>
                <h3>Vexa Studio</h3>
            </div>
        </NuxtLink>
        <button class="mobile_menu_btn" @click="toggleMobileMenu"></button>
        <nav>
            <NuxtLink to="/">Accueil</NuxtLink>
            <NuxtLink to="/team">Équipe</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
            <button>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </button>
        </nav>
    </header>
    <div id="mobile_menu">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/team">Équipe</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <button>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </button>
    </div>
    <slot/>
    <footer>
        <div class="column">
            <div class="brand">
                <div class="logo"></div>
                <h3>Vexa Studio</h3>
            </div>
            <p>
                Vexa Studio est un studio de conception<br class="responsive">
                web & graphique visant à créer et développer<br class="responsive">
                l'image visuelle projetée par nos clients<br class="responsive">
                partout sur le web.
            </p>
        </div>
        <div class="column">
            <h5>Vexa Studio</h5>
            <NuxtLink to="/">Accueil</NuxtLink>
            <NuxtLink to="/team">Équipe</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
        </div>
        <div class="column">
            <h5>Réseaux Sociaux</h5>
            <a href="https://discord.vexastudio.com">Discord</a>
            <a href="https://twitter.com/vexastudio">Twitter</a>
            <a href="https://behance.net/vexastudio">Behance</a>
        </div>
    </footer>
    <div class="copyright">
        <p>©️ Vexa Studio 2023. Toute reproduction est interdite.</p>
    </div>
</template>

<style scoped lang="scss">
@import "assets/style/layouts/default.scss";
</style>

<script setup lang="ts">
import { onMounted, onUpdated, nextTick } from 'vue';

const path = ref();

function reveal(): void {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible && !reveals[i].classList.contains("no-animation")) {
            reveals[i].classList.add("active");
            setTimeout(() => {
                reveals[i].classList.add("no-animation");
            }, 1000);
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

onMounted(() => {
    reveal()
    window.addEventListener("scroll", reveal);
    path.value = window.location.pathname;
})

onUpdated(async () => {
    reveal()
    await nextTick()
    path.value = window.location.pathname;
})

function toggleMobileMenu(): void {
    const state = document.getElementById("mobile_menu") as HTMLElement;
    state.classList.toggle("open");
}
</script>
