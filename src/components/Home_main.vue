<template>
<div class="main">
    <!-- <img src="../assets/santaMarta.jpg" alt="img-bogota" class="img-bogota" /> -->
    <header class="header-main">
    <a href="#">Viaja por Colombia.com</a>
    <div class="links-header-main">
        <a href="#">Acerca de Nosotros</a>
        <a href="#">Más Información</a>
        <a href="#" class="btn-login" v-on:click="Profile"><i class="fas fa-user"></i></a>
    </div>
    </header>
    <div class="circulos-links-main">
        <div class="contenedor">
            <a href="#" class="circulo" v-on:click="marker1"><i class="fas fa-map-marker-alt"></i></a>
            <div class="texto-hm">
                <p>Lugares</p>
            </div>
        </div>
        <div class="contenedor">
            <a href="#" class="circulo" v-on:click="marker2"><i class="fab fa-slideshare"></i></a>
            <div class="texto-hm">
                <p>Guías</p>
            </div>
        </div>
        <div class="contenedor">
            <a href="#" class="circulo" v-on:click="marker3"><i class="fas fa-tram"></i></a>
            <div class="texto-hm">
                <p>Planes</p>
            </div>
        </div>
    </div>
    <div class="title">
        <h1>Planes de Santa Marta <br>
        con los mejores hoteles</h1>
        <div class="planes">
            <div class="plan"></div>
            <div class="plan"></div>
            <div class="plan"></div>
            <div class="plan"></div>
        </div>
    </div>
    <div class="contenedor-planes">

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
.circulos-links-main{
    display: flex;
    position: relative;
    top: 35px;
    margin-left: 600px;
    margin-right: auto;
    width: 580px;
    color: #fff;
}

.circulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.7s;
}

.circulo:hover {
    transition: 0.7s;
    transform: scale(1.12);
}

.circulo .fa-map-marker-alt {
    display: inline-block;
    font-size: 25px;
    color: rgb(32, 32, 32);
}

.circulo .fa-slideshare {
    display: inline-block;
    font-size: 25px;
    color: rgb(32, 32, 32);
}

.circulo .fa-tram {
    display: inline-block;
    font-size: 25px;
    color: rgb(32, 32, 32);
}

.fa-user{
    font-size: 28px;
    transition: 0.5s;
}

.fa-user:hover{
    color: rgb(32, 32, 32);
}

.texto-hm p{
    position: absolute; 
    font-size: 20px;
}

.links-header-main{
    position: relative;
    width: 480px;
    display: flex;
    justify-content: space-around;
    margin-left: 400px;
    align-items: center;

}

.header-main{
    display: flex;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    justify-content: space-around;
}

.main .header-main a {
    position: relative;
    top: 0;
    left: -20px;
    text-decoration: none;
    font-size: 17px;
    color: #fff;
}

.title{
    position: relative;
    top: 110px;
    right: 35px;
    
}

.contenedor-planes{
    position: relative;
    width: 90%;
    height: 100%;
    margin-top: 140px;
    margin-right: auto;
    margin-left: auto;
    background: linear-gradient(rgba(33, 69, 90, 0.75), rgba(0, 0, 0, 0.75));

}



.planes .plan{
    display: grid;
    position: absolute;
    width: 100px;
    height: 100px;
    left: 200px;
    top: 200px;
    z-index: 2;
}

</style>