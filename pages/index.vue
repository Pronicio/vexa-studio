<template>
    <main>
        <section id="home">
            <div class="title reveal fade-left">
                <button>10% de rabais avec WEBSITE10</button>
                <h1>Nous Concevons Votre <b>Identité Graphique</b></h1>
                <p>Vexa Studio est un studio de conception web & graphique<br class="responsive">
                    visant à créer et développer l'image visuelle projetée par nos<br class="responsive">
                    clients partout sur le web.</p>
            </div>
            <img src="../assets/images/palette.png" draggable="false" alt="Palette" class="reveal fade-right">
        </section>
        <section id="why">
            <div class="title reveal fade-left">
                <h2>Nous <b>sommes idéals</b></h2>
                <p>Voici pourquoi nous sommes un bon choix pour la <br class="responsive">
                    conception de vos idéees, aussi ambitieuse soit-elle.
                </p>
            </div>
            <div class="collection reveal fade-right">
                <div class="card">
                    <img src="../assets/images/graphics/discord.png" alt="Discord" draggable="false">
                    <h4>Commandes multiplateformes</h4>
                    <p>Vous pouvez passer commande via<br>
                        nos différentes plateformes pour<br>
                        vous faciliter la tâche.<br>
                    </p>
                </div>
                <div class="card">
                    <img src="../assets/images/graphics/money.png" alt="Money" draggable="false">
                    <h4>Tarifs avantageux</h4>
                    <p>Notre gamme de prix est déterminée<br>
                        spécialement pour convenir à tous<br>
                        les budgets et besoins de chacuns.<br>
                    </p>
                </div>
                <div class="card">
                    <img src="../assets/images/graphics/file.png" alt="File" draggable="false">
                    <h4>Accès aux fichiers finaux</h4>
                    <p>Une fois la commande terminée, les<br>
                        fichiers du projet vous seront joints<br>
                        en cas de modification ultérieure.<br>
                    </p>
                </div>
            </div>
            <button onclick="window.location.href='/contact';" class="reveal fade-left">Commander maintenant</button>
        </section>
        <section id="reviews">
            <div class="title reveal fade-left">
                <h2>Nos clients <b>sont satisfaits</b></h2>
                <p>Notre priorité est votre satisfaction, et ce, en tout temps.<br class="responsive">
                    Voci des témoignages de nos clients décrivant leurs expériences<br class="responsive">
                </p>
            </div>
            <div class="collection reveal fade-right">
                <div class="review">
                    <img src="../assets/images/user-avatar.png" draggable="false" alt="User avatar" width="60">
                    <h5>Russay</h5>
                    <p>« Reçu en temps et en heure, design<br class="responsive">
                        incroyable et résultat surprenant!<br class="responsive">
                        Je souhaite de tout coeur continuer<br class="responsive">
                        de faire affaire avec Vexa Studio! »<br class="responsive">
                    </p>
                </div>
                <div class="review">
                    <img src="../assets/images/user-avatar.png" draggable="false" alt="User avatar" width="60">
                    <h5>Belzerk</h5>
                    <p>« Logo e-sport incroyable fait par Vexa Studio,<br>
                        rapide, super sympa et arrangeant au niveau<br>
                        du prix selon le budget. Je recommande! »<br>
                    </p>
                </div>
                <div class="review">
                    <img src="../assets/images/user-avatar.png" draggable="false" alt="User avatar" width="60">
                    <h5>Elroc</h5>
                    <p>« Charte graphique faite par Vexa Studio,<br>
                        travail super propre et rapide, je ne peux<br>
                        que recommander vivement à tous! »<br>
                    </p>
                </div>
            </div>
        </section>
        <section id="stats">
            <div class="title reveal fade-left">
                <h2>Quelques <b>statistiques</b></h2>
                <p>Voici à quoi ressemble Vexa Studio en chiffres.</p>
            </div>
            <div class="collection reveal fade-right">
                <div class="card">
                    <h5>20+</h5>
                    <p>Commandes<br>
                        Passées
                    </p>
                </div>
                <div class="card">
                    <h5>30+</h5>
                    <p>Devis<br>
                        Donnés
                    </p>
                </div>
                <div class="card">
                    <h5>5+</h5>
                    <p>Membres<br>
                        Du staff
                    </p>
                </div>
                <div class="card">
                    <h5>100+</h5>
                    <p>Membres<br>
                        Sur Discord
                    </p>
                </div>
            </div>
        </section>
        <section id="creations">
            <div class="title reveal fade-left">
                <h2>Nos <b>dernières créations</b></h2>
                <p>Nos créations sont uniques et de qualité. Voyez ci-dessous<br class="responsive">
                   ce que nous avons conçu récemment pour nos clients.
                </p>
                <button onclick="window.location.href='https://behance.net/vexastudio';">Notre portfolio</button>
            </div>
            <!-- <div class="collection reveal fade-right">
                <div class="card">
                    <img src="../assets/images/us/banner_tom.png" alt="Tom's banner" width="509">
                </div>
            </div> -->
        </section>
    </main>
</template>

<style lang="scss">
@import "assets/style/style.scss";
</style>

<style scoped lang="scss">
@import "assets/style/pages/home.scss";
</style>
