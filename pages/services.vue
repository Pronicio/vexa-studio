<template>
  <main>
      <div class="title reveal fade-left">
          <h1>Nos <b>différents services</b></h1>
          <p>Chez Vexa Studio, nous offrons une gamme de services<br>
              attrayante pour leur excellent rapport qualité-prix.</p>
      </div>
      <div class="collection">
          <div class="card">
              <img src="../assets/images/services/graphicdesign.png" draggable="false" alt="Service image" width="770" class="reveal fade-right">
              <div class="reveal fade-left">
                  <h3>Design Graphique</h3>
                  <p>Nous avons ce qu'il faut pour réaliser des images de marque,<br>
                      des brochures, des affiches, des maquettes web et bien plus.</p>
                  <button>Commander</button>
              </div>
          </div>
          <div class="card">
              <img src="../assets/images/services/3ddesign.png" draggable="false" alt="Service image" width="770" class="reveal fade-right">
              <div class="reveal fade-left">
                  <h3>Modelage 3D</h3>
                  <p>Vous désirez un avatar, une scène, une animation 3D?<br>
                      Ne vous inquiétez pas, notre équipe sera en mesure de vous satisfaire.</p>
                  <button>Commander</button>
              </div>
          </div>
          <div class="card">
              <img src="../assets/images/services/motiondesign.png" draggable="false" alt="Service image" width="770" class="reveal fade-right">
              <div class="reveal fade-left">
                  <h3>Motion Design</h3>
                  <p>Une animation 2D vous plaîrait? Ne songez plus, vous aurez<br>
                     ce que vous désirez grâce à notre équipe d'experts.</p>
                  <button>Commander</button>
              </div>
          </div>
          <div class="card">
              <img src="../assets/images/services/webdevelopment.png" draggable="false" alt="Service image" width="770" class="reveal fade-right">
              <div class="reveal fade-left">
                  <h3>Développement Web</h3>
                  <p>Nos développeurs expérimentés dans plusieurs technologies<br>
                     du web seront idéals pour développer le site web de vos rêves.</p>
                  <button onclick="window.location.href='/contact';">Commander</button>
              </div>
          </div>
      </div>
  </main>
</template>

<style scoped lang="scss">
@import "assets/style/pages/services.scss";
</style>
