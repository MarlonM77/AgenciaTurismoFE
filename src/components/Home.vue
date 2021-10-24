<template>
<div class="main">
    <!-- <img src="../assets/santaMarta.jpg" alt="img-bogota" class="img-bogota" /> -->
    <header class="header">
    <a href="#">Viaja por Colombia.com</a>
    <div class="links-header">
        <a href="#">Acerca de Nosotros</a>
        <a href="#">Más Información</a>
        <a href="#" class="btn-login" v-if="!is_auth" v-on:click="loadLogIn">Login</a>
    </div>
    </header>
    <div class="titulo-santa-marta">
        <div class="vista">Visita</div>
            <div class="nombre">Santa Marta</div>
    </div>
    <div class="circulos-links">
        <div class="contenedor">
            <a href="#" class="circulo"><i class="fas fa-map-marker-alt"></i></a>
            <div class="texto">
                <p>Hermosos</p>
                <p>Lugares</p>
            </div>
        </div>
        <div class="contenedor">
            <a href="#" class="circulo"><i class="fas fa-user"></i></a>
            <div class="texto">
                <p>Apoyo de</p>
                <p>Guías</p>
            </div>
        </div>
        <div class="contenedor">
            <a href="#" class="circulo"><i class="fas fa-tram"></i></a>
            <div class="texto">
                <p>Increibles</p>
                <p>Planes</p>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="contenedor-cards-footer">
            <div class="card">
                <img src="../assets/guia.jpeg" class="img-footer" alt="Guia" />
                    <div class="contenedor-footer-texto">
                        <p>CONTACTA LOS MEJORES GUÍAS</p>
                        <p>Encuentra a tu guía ideal, conoce acerca de ellos.</p>
                    </div>
            </div>
            <div class="card">
                <img src="../assets/isla.jpg" class="img-footer" alt="Guia" />
                <div class="contenedor-footer-texto">
                    <p>CONOCE SORPRENDENTES LUGARES</p>
                    <p>
                    Contámos con los mejores planes para disfrutar con toda tu familia.
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="contenedor-footer-texto">
                    <a href="#">¡VIAJA AHORA!</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>

export default {
    methods: {
            loadLogIn: function(){
            this.$router.push({name: "logIn"})
        },
    }
}

</script>


<style>
.main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: rgb(27, 76, 98);
    background: linear-gradient(rgba(49, 92, 117, 0.75), rgba(0, 0, 0, 0.75)),
    url("../assets/santa_marta.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.main .header {
    display: flex;
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    justify-content: space-around;
}

.main .header a {
    position: relative;
    top: 0;
    left: -20px;
    text-decoration: none;
    font-size: 17px;
    color: #fff;
}

.main .header .links-header {
    width: 480px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.main .header .links-header a {
    position: relative;
    top: 0;
    left: 0;
}
.main .header .links-header .btn-login {
    display: flex;
    width: 60px;
    height: 35px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #EA918D;
    border-radius: 7px;
    font-size: 15px;
    transition: 00.5s;
}
.main .header .links-header .btn-login:hover{
    display: flex;
    width: 60px;
    height: 35px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #eeeeee;
    color: #EA918D;
    border-radius: 7px;
    font-size: 15px;
}

.main .titulo-santa-marta {
    display: flex;
    position: relative;
    top: 250px;
    left: 180px;
    width: 450px;
    flex-direction: column;
}
.main .titulo-santa-marta .vista {
    font-size: 65px;
    color: #fff;
    font-weight: 700;
}
.main .titulo-santa-marta .nombre {
    font-size: 70px;
    color: #fff;
    font-weight: 700;
}
.main .circulos-links {
    display: flex;
    position: relative;
    justify-content: space-between;
    top: 360px;
    left: 180px;
    width: 580px;
    color: #fff;
}
.main .circulos-links .contenedor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 170px;
}
.main .circulos-links .contenedor .circulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.5s;
}

.main .circulos-links .contenedor .circulo:hover {
    transform: scale(1.2);
    
}

.main .circulos-links .contenedor .circulo .fa-map-marker-alt{
    display: inline-block;
    font-size: 25px;
    color: #000;
}
.main .circulos-links .contenedor .circulo .fa-user{
    display: inline-block;
    font-size: 25px;
    color: #000;
}
.main .circulos-links .contenedor .circulo .fa-tram{
    display: inline-block;
    font-size: 25px;
    color: #000;
}
.main .circulos-links .contenedor .texto p {
    margin: 0;
}
.main .circulos-links .contenedor .texto p:nth-child(1) {
    color: #fff;
    font-size: 15px;
    position: relative;
    left:5px;
}
.main .circulos-links .contenedor .texto p:nth-child(2) {
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    position: relative;
    left:5px;
}
.main .footer {
    width: 87%;
    height: 160px;
    background: rgba(62, 69, 87, 0.75);
    position: absolute;
    right: 0;
    bottom: 0;
}

.main .contenedor{
    padding: 5px;
}

.main .footer .contenedor-cards-footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
.main .footer .contenedor-cards-footer .card {
    display: flex;
    height: auto;
    width: 260px;
}
.main .footer .contenedor-cards-footer .img-footer {
    width: 120px;
    height: 100px;
    background-position: center;
    background-size: cover;
}
.main .footer .contenedor-cards-footer .contenedor-footer-texto {
    display: flex;
    justify-content: center;
    align-items: calc();
    flex-direction: column;
  /* text-align: justify; */
    color: #fff;
    font-size: 10px;
    margin-left: 10px;
}
.main .footer .contenedor-cards-footer .contenedor-footer-texto p {
    margin: 0;
    margin-top: 4px;
}
.main .footer .contenedor-cards-footer .contenedor-footer-texto p:nth-child(1) {
    margin: 0;
    color: #fff;
    font-weight: 700;
}
.main .footer .contenedor-cards-footer .contenedor-footer-texto a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}
</style>
