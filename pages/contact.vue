<template>
  <main>
      <div class="title reveal fade-left">
          <h1>Entrer <b>en contact</b></h1>
          <p>Une question, une requête, un problème? Remplissez le formulaire<br>
              ci-dessous pour être mis en relation avec notre équipe</p>
      </div>
      <form action="" method="get">
          <div class="row">
              <div class="form-item name">
                  <label for="name">Prénom</label>
                  <input type="text" name="name" id="name" required>
              </div>
              <div class="form-item surname">
                  <label for="surname">Nom</label>
                  <input type="text" name="surname" id="surname" required>
              </div>
          </div>
          <div class="form-item email">
              <label for="email">Adresse électronique</label>
              <input type="email" name="email" id="email" required>
          </div>
          <div class="form-item object">
              <label for="object">Objet du message</label>
              <input type="text" name="object" id="object" required>
          </div>
          <div class="form-item message">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" cols="33" required></textarea>

          </div>
          <div class="form-item submit">
              <button type="submit">Soumettre</button>
          </div>
      </form>
  </main>
</template>

<style scoped lang="scss">
@import "assets/style/pages/contact.scss";
</style>
