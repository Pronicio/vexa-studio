<template>
    <header>
        <div class="brand">
            <div class="logo"></div>
            <h3>Vexa Studio</h3>
        </div>
        <nav>
            <NuxtLink to="/" id="active">Accueil</NuxtLink>
            <NuxtLink to="/team">Équipe</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
            <button>Contact</button>
        </nav>
    </header>
    <slot/>
    <footer>
        <div class="column">
            <div class="brand">
                <div class="logo"></div>
                <h3>Vexa Studio</h3>
            </div>
            <p>
                Vexa Studio est un studio de conception<br>
                graphique visant à créer et développer<br>
                l'image visuelle projetée par nos clients<br>
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
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">Behance</a>
        </div>
    </footer>
    <div class="copyright">
        <p>©️ Vexa Studio 2023. Toute reproduction est interdite.</p>
    </div>
</template>

<style scoped lang="scss">
@import "assets/style/layouts/default.scss";
</style>

<script setup>
import { onMounted, onBeforeMount } from 'vue'

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

onMounted(() => {
    reveal()
    window.addEventListener("scroll", reveal);
})
</script>
