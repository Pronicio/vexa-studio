<template>
    <main>
        <div class="title reveal">
            <h1>Entrer <b>en contact</b></h1>
            <p>Vous désirez commander ou tout simplement nous contacter?<br class="responsive">
                Remplissez le formulaire ci-dessous pour être mis en<br class="responsive">
                relation avec notre équipe support.</p>
        </div>
        <form @:submit.prevent="sendMessage">
            <div class="row">
                <div class="form-item name">
                    <label for="name">Prénom</label>
                    <input type="text" name="name" id="name" required v-model="name">
                </div>
                <div class="form-item surname">
                    <label for="surname">Nom</label>
                    <input type="text" name="surname" id="surname" required v-model="surname">
                </div>
            </div>
            <div class="form-item email">
                <label for="email">Adresse électronique</label>
                <input type="email" name="email" id="email" required v-model="email">
            </div>
            <div class="form-item object">
                <label for="object">Objet du message</label>
                <input type="text" name="object" id="object" required v-model="object">
            </div>
            <div class="form-item message">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" cols="33" maxlength="4096" required
                          v-model="message"></textarea>
            </div>
            <div class="form-item submit">
                <button type="submit">Soumettre</button>
            </div>
        </form>
    </main>
    <div class="toast">
        <div class="toast-content">
            <i class="check"></i>
            <div class="message">
                <span class="text text-1">Succès !</span>
                <span class="text text-2">Votre message a bien été envoyé.</span>
            </div>
        </div>
        <i class="close" @click="closeToast"></i>
        <div class="progress active"></div>
    </div>
</template>

<style scoped lang="scss">
@import "assets/style/pages/contact.scss";
</style>

<script setup>
const name = ref();
const surname = ref();
const email = ref();
const object = ref();
const message = ref();

let timer1, timer2;

async function sendMessage() {
    let formData = new FormData();
    formData.append('username', name.value);
    formData.append('surname', surname.value);
    formData.append('email', email.value);
    formData.append('object', object.value);
    formData.append('message', message.value);

    try {
        const res = await fetch(`https://vexa-workers.pronicio.workers.dev/form`, {
            body: formData,
            mode: 'cors',
            method: "POST"
        })

        const result = await res.text();

        if (result === "Success !") {
            toast(true)
        } else {
            toast(false)
        }
    } catch (e) {
        toast(false)
        console.log(e)
    }
}

function toast(success) {
    const toast = document.querySelector(".toast");
    const progress = document.querySelector(".progress");




    if (!success) {
        toast.classList.remove("error");
        document.querySelector(".text-1").innerText = "Succès !"
        document.querySelector(".text-2").innerText = "Votre message a bien été envoyé."
        email.value = ''
        name.value = ''
        surname.value = ''
        object.value = ''
        message.value = ''
    } else if (toast.classList.contains('error')) {
        toast.classList.add("error");
        document.querySelector(".text-1").innerText = "Erreur !"
        document.querySelector(".text-2").innerText = "Veuillez vérifier que le formulaire est\n correctement rempli."
    }


    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5300);
}

function closeToast() {
    const toast = document.querySelector(".toast");
    const progress = document.querySelector(".progress");

    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
}
</script>
