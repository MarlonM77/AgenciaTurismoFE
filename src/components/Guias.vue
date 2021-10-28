<template>
<div class="main">

    <!------Contactar Guia1----->
    <transition name="fade">
        <div class="modal-overlay-form" v-if="ShowGuia"></div>
    </transition>

    <transition name="fade">
        <div class="content-form">
            <div class="modal-formG" v-if="ShowGuia">
                <button class = "close-form" @click="ShowGuia = false"><i class="fas fa-times"></i></button>
                <h2>Germán Rivera Lopez</h2>
                <h2>Colombiano</h2>
                <div class="flag"></div>
                <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis obcaecati a facilis. Labore nemo animi ullam corrupti quia delectus, omnis, exercitationem ducimus, magnam eveniet at porro eius vel autem. Quisquam?
                Ad dolore doloremque officiis, autem a numquam voluptate sapiente sit unde, mollitia accusantium ut doloribus praesentium nulla! Porro, ipsam. Asperiores eligendi odio nobis, aliquam pariatur saepe consectetur quos dolor ut.
                Amet perspiciatis exercitationem impedit praesentium ducimus iure, fugiat corporis ullam soluta quae repellendus atque consectetur? Id quibusdam vel accusantium doloremque quaerat autem. 
                </span>
                    <input type="submit" value="Contratar" class="btn-Contactar">
            </div>
        </div>
    </transition>

    <transition name="fade">
        <div class="modal-overlay-form" v-if="ShowGuia2"></div>
    </transition>

    <transition name="fade">
        <div class="content-form">
            <div class="modal-formG" v-if="ShowGuia2">
                <button class = "close-form" @click="ShowGuia2 = false"><i class="fas fa-times"></i></button>
                <h2>Danna Carolina Sanchez</h2>
                <h2>Chilena</h2>
                <div class="flag2"></div>
                <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis obcaecati a facilis. Labore nemo animi ullam corrupti quia delectus, omnis, exercitationem ducimus, magnam eveniet at porro eius vel autem. Quisquam?
                Ad dolore doloremque officiis, autem a numquam voluptate sapiente sit unde, mollitia accusantium ut doloribus praesentium nulla! Porro, ipsam. Asperiores eligendi odio nobis, aliquam pariatur saepe consectetur quos dolor ut.
                Amet perspiciatis exercitationem impedit praesentium ducimus iure, fugiat corporis ullam soluta quae repellendus atque consectetur? Id quibusdam vel accusantium doloremque quaerat autem.
                </span>
                    <input type="submit" value="Contratar" class="btn-Contactar">
            </div>
        </div>
    </transition>
    <!------Contenido----->
        <header class="header-main">
            <a href="#">Viaja por Colombia.com</a>
            <div class="links-header-main">
                <a href="#" v-on:click="loadNosotros" >Acerca de Nosotros</a>
                <a href="#">Más Información</a>
                <a href="#" class="btn-login" v-on:click="LoadProfile"><i class="fas fa-user" id="user-icon"></i></a>
            </div>
        </header>
        <div class="contenidofade">
            <navBar class="nav4"> </navBar>
            <div class="title">
                <h1>Conoce a nuestros Guias</h1>
            </div>
            <div class="contenedor-bg">
                <div class="guia1"><a href=""></a>             
                    <div class="descripcion">
                        <h2>German Rivera</h2>
                        <p class="parrafo-guia">Hola, mi nombre es Marcos y puedo ser tu guía en un plan de experiencias 
                            increíbles por la hermosa ciudad de Santa Marta!. Hablo a la perfección el inglés y español.<br>
                            Si lo tuyo es lo extremo y deseas perder miedos y fobias no dudes en contactarme.
                            Dale a contactar para ver todos mis datos.</p>
                            <button class="consultar" @click="ShowGuia = true"><p class="btn-txt">Consultar</p></button>
                    </div>
                    <div class="star">
                    </div>
                </div>
                <div class="guia2"><a href=""></a>             
                    <div class="descripcion">
                        <h2>Danna Carolina</h2>
                        <p class="parrafo-guia">Hola, mi nombre es Carolina y puedo ser tu guía en un plan de experiencias 
                            increíbles por la hermosa ciudad de Santa Marta!. Hablo a la perfección el inglés, español y francés.<br>
                            Si lo tuyo son las experiencias reflexibas, espirituales y te gusta la meditación no dudes en contactarme.
                            Dale a contactar para ver todos mis datos</p>
                            <button class="consultar" @click="ShowGuia2 = true"><p class="btn-txt">Consultar</p></button>
                    </div>
                    <div class="star">
                    </div>
                </div>
            </div>
        <div class="cover"></div>
        <footer></footer>
    </div>
</div>

</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
    components: {  
        navBar
    },
    data: function(){
        return{
            ShowGuia: false,
            ShowGuia2: false
        }
    },
    methods: {
        LoadProfile: function(){
            this.$router.push({name: "plan"});
        },
        loadNosotros: function(){
            this.$router.push({name: "nosotros"})
        }
    }
}

</script>

<style>
.main a{
    text-decoration: none;
}

.nav4{
    display: flex;
    position: relative;
    top: 0;
    justify-content: space-evenly;
    margin-left: 35em;
    margin-right: auto;
    width: 36.25em;
    color: #fff;
    z-index: 90;
}

.nav4 #guia{
    background-color: rgba(255, 255, 255, 0.664);
}

.nav4 #backgroundG{
    background-color: rgba(167, 234, 236, 0.424);
}

.contenedor-bg .guia1{
    position: absolute;
    width: 15rem;
    height: 22rem;
    left: 10rem;
    top: 3rem;
    z-index: 2;
    background-image: url("../assets/guia11.jpg");
    background-size: cover;
    background-position: center;
    transition: 0.8s;
}

.contenedor-bg .guia1 .descripcion{
    position: relative;
    top: 2em;
    left: 21rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}

.contenedor-bg .guia1 .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.contenedor-bg .guia1 .descripcion .parrafo-guia{
    line-height: 30px;
    margin-top: -0.3em;
    font-size: 1.40em;
    color: #e4e4e4fa;
    font-family: Lato;
    padding-left: 40px;
    padding-right: 40px;
}

.contenedor-bg .guia1 .star{
    width: 5em;
    height: 5em;
    background-image: url("../assets/star.png");
    background-size: cover;
    background-position: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3em;
    transition: 0.5s;
}

.contenedor-bg .guia1 .star:hover{
    transform: scale(1.2);
}

.contenedor-bg .guia1:hover{
    border: solid 0.5px #ffdc64 ;
}

.contenedor-bg .guia2{
    position: absolute;
    width: 15rem;
    height: 22rem;
    left: 10rem;
    top: 30rem;
    z-index: 2;
    background-image: url("../assets/guia22.jpg");
    background-size: cover;
    background-position: center;
    transition: 0.8s;
}

.contenedor-bg .guia2 .descripcion{
    position: relative;
    top: 2em;
    left: 21rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}

.contenedor-bg .guia2 .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.contenedor-bg .guia2 .descripcion .parrafo-guia{
    line-height: 30px;
    margin-top: -0.3em;
    font-size: 1.40em;
    color: #e4e4e4fa;
    font-family: Lato;
    padding-left: 40px;
    padding-right: 40px;
}

.contenedor-bg .guia2 .star{
    width: 5em;
    height: 5em;
    background-image: url("../assets/star.png");
    background-size: cover;
    background-position: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3em;
    transition: 0.5s;
}

.contenedor-bg .guia2 .star:hover{
    transform: scale(1.2);
}

.contenedor-bg .guia2:hover{
    border: solid 0.5px #ffdc64 ;
}

.modal-formG{
    position: fixed;
    z-index: 105;
    background: rgb(216, 216, 216);
    width: 60vh;
    height: 55vh;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 2px 9px 6px rgba(0, 0, 0, 0.53);
}

.modal-formG .close-form{
    position: absolute;
    right: 0;
    width: 1.875em;
    height: 1.875em;
    font-size: 1.25em;
    cursor: pointer;
    margin: 1em;
}

.modal-formG span{
    position: absolute;
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 20px;
    font-size: 17px;
    text-align: center;
}

.modal-formG .btn-Contactar{
    position: absolute;
    height: 40px;
    bottom: 0;
    width: 200px;
    margin-left: 11em;
    margin-bottom: 2em;
    font-size: 18px;
    text-align: center;
    border-radius: 8px;
    background-color: rgb(146, 226, 255);
    border: solid 1px rgb(1, 104, 117);
    transition: 0.5s;
}

.modal-formG .btn-Contactar:hover{
    background-color: rgba(52, 201, 221, 0.87);
    border: solid 1px rgb(7, 52, 58);
}

.modal-formG h2{
    text-align: center;
}

.flag{
    background-image: url("../assets/flagcolombia.png");
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 50px;
    margin: auto;
    margin-bottom: 20px;
}

.flag2{
    background-image: url("../assets/flagchile.png");
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 50px;
    margin: auto;
    margin-bottom: 20px;
}

</style>