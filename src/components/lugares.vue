<template>
<div class="main">

    <!-- <Contenido PRINCIPAL DE LA PAGINA /> -->
        <header class="header-main">
            <a href="#">Viaja por Colombia.com</a>
            <div class="links-header-main">
                <a href="#" v-on:click="loadNosotros">Acerca de Nosotros</a>
                <a href="#">Más Información</a>
                <a href="#" class="btn-login" v-on:click="LoadProfile"><i class="fas fa-user" id="user-icon"></i></a>
            </div>
        </header>

    <div class="contenidofade">
        <navBar class="nav3"> </navBar>
        <div class="title">
            <h1>Algunos de los hermosos lugares <br>
            que nuestros planes ofrecen para ti</h1>
        </div>
    
        <div class="contenedor-bg">
            <div class="lugar1"><a href=""></a>
                <div class="map-popup">
                    <button class="map" @click="ShowModalL = true"><i class="fas fa-map-marker-alt"></i></button>
                        <transition name="fade">
                            <div class="modal-overlay" v-if="ShowModalL"></div>
                        </transition>

                        <transition name="fade">
                            <div class="modal" v-if="ShowModalL">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.619996854098!2d-74.21666454182277!3d11
                                    43747836192693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5632303d19d%3A0x468616ac5f094178!2
                                    Parque%20Camell%C3%B3n%20Rodrigo%20de%20Bastidas!5e0!3m2!1ses!2sco!4v1635307943682!5m2!1ses!2sco" 
                                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                                </iframe>
                                <button class = "close" @click="ShowModalL = false"><i class="fas fa-times"></i></button>
                            </div>
                        </transition>
                </div>                
                <div class="descripcion">
                    <h2>El Malecón y Bahía de Santa Marta</h2>
                    <p class="parrafo-plan">La bahía de Santa Marta nos ofrece un agradable paseo desde la marina,<br> pasando por la playa hasta acabar en el Malecón de Bastidas.<br> Este paseo fue bautizado con el nombre del fundador de la ciudad,
                    <br> Rodrigo Bastidas.<br>Y ofrece un espacio único para contemplar puestas de sol alucinantes.</p>
                </div>
            </div>

            <div class="lugar2"><a href=""></a>
                <div class="map-popup">
                    <button class="map" @click="ShowModalL2 = true"><i class="fas fa-map-marker-alt"></i></button>
                        <transition name="fade">
                            <div class="modal-overlay" v-if="ShowModalL2"></div>
                        </transition>

                        <transition name="fade">
                            <div class="modal" v-if="ShowModalL2">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62605.056711477424!2d-74.17364190894553
                                        !3d11.274928973438982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sParque%20Nacional%20Natural%20Tayrona!
                                        5e0!3m2!1ses!2sco!4v1635307626632!5m2!1ses!2sco" 
                                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                                    </iframe>
                                    <button class = "close" @click="ShowModalL2 = false"><i class="fas fa-times"></i></button>
                            </div>
                        </transition>
                </div>  
                <div class="descripcion">
                    <h2>Parque Nacional Natural Tayrona</h2>
                    <p class="parrafo-plan">Un Parque Nacional en el que la selva más profunda se une con el Mar Caribe <br>a través de playas salvajes y de aguas cristalinas.  
                        Viajar a Santa Marta y no visitar el Tayrona debería ser pecado. se hunden en el mar como<br> los dedos de una mano  gigantesca entre los que se forman bahías
                        entre los que se forman bahías y ensenadas de belleza singular: Chengue, Gayraca, Cinto, Neguanje, Concha.</p>
                </div>
            </div>

            <div class="lugar3"><a href=""></a>
                <div class="map-popup">
                    <button class="map" @click="ShowModalL3 = true"><i class="fas fa-map-marker-alt"></i></button>
                        <transition name="fade">
                            <div class="modal-overlay" v-if="ShowModalL3"></div>
                        </transition>

                        <transition name="fade">
                            <div class="modal" v-if="ShowModalL3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.619961161832!2d-74.21666454184385!3d11.
                                    243753093654389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f57cae28f5f1%3A0xac377a910699263f!2sExpo
                                    tur%20%7C%20Ciudad%20Perdida%20Tour%20%7C%20Lost%20City%20Trek%20%7C%20Operador%20Autorizado!5e0!3m2!1ses!2sco!4v
                                    35308042551!5m2!1ses!2sco" 
                                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                                </iframe>
                                <button class = "close" @click="ShowModalL3 = false"><i class="fas fa-times"></i></button>
                            </div>
                        </transition>
                    </div>
                <div class="descripcion">
                    <h2>La Ciudad Perdida</h2>
                    <p class="parrafo-plan">Un enclave arqueológico legado de los indígenas tayronas.
                    ¡Una auténtica maravilla en pleno paraje natural de Sierra Nevada!.Fue construido alrededor del siglo VIII de nuestra era y es considerado 
                    como uno de los principales sitios arqueológicos de Colombia.​ <br> en ella habitan los descendientes de los Tayronas para quienes nosotros 
                    somos sus hermanos menores, por quienes es llamada Teyuna.</p>
                </div>
            </div>
        </div>
    <div class="cover2"></div>
    </div>
</div>
</template>

<script>
import navBar from "@/components/navBar.vue";

export default {
    name: "Lugares",

    components: {  
        navBar
    },
    data: function(){
        return{
            ShowModalL:      false,
            ShowModalL2:     false,
            ShowModalL3:     false
        }
    },

    methods: {        
        LoadProfile: function(){
            this.$router.push({name: "plan"});
        },
        loadNosotros: function(){
            this.$router.push({name: "nosotros"})
        },
    }
}
</script>

<style>

.main a{
    text-decoration: none;
}

.contenidofade {
    height: 100vh;
    width: 100%;
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

.cover2{
    position: relative;
    top: -353px;
    height: 70vh;
    width: 100%;
    background: rgb(1, 8, 14);
    background-repeat: no-repeat;
    background-size: cover;
}

.links-header-main{
    position: relative;
    width: 480px;
    display: flex;
    justify-content: space-around;
    margin-left: 400px;
    align-items: center;
}

.nav3{
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

.nav3 #lugar{
    background-color: rgba(255, 255, 255, 0.664);
}

.nav3 #backgroundL{
    background-color: rgba(167, 234, 236, 0.424);
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
    text-decoration: none;
}
.title{
    position: relative;
    top: 95px;
    right: 35px;
    
}
.contenedor-bg{
    position: relative;
    display: flex;
    width: 90%;
    height: 100%;
    margin-top: 140px;
    margin-right: auto;
    margin-left: auto;
    background: linear-gradient(rgba(33, 69, 90, 0.75), rgba(0, 0, 0, 0.75));
    z-index: 2;
}

.contenedor-bg .lugar1{
    position: absolute;
    width: 30rem;
    height: 20rem;
    left: 6rem;
    top: 2rem;
    z-index: 2;
    background-image: url("../assets/lugares1.jpg");
    background-size: cover;
}
.contenedor-bg .lugar2{
    position: absolute;
    left: 6rem;
    top: 27rem;
    width: 30rem;
    height: 20rem;
    z-index: 2;
    background-image: url("../assets/lugares2.jpg");
    background-size: cover;
}

.contenedor-bg .lugar3{
    position: absolute;
    left: 6rem;
    top: 52rem;
    width: 30rem;
    height: 20rem;
    z-index: 2;
    background-image: url("../assets/lugares3.jpg");
    background-size: cover;
}
.contenedor-bg .lugar1 .descripcion{
    position: relative;
    bottom: 1.3em;
    left: 35rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}
.contenedor-bg .lugar2 .descripcion{
    position: relative;
    bottom: 1.3em;
    left: 35rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}

.contenedor-bg .lugar3 .descripcion{
    position: relative;
    bottom: 1.3em;
    left: 35rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}

.contenedor-bg .lugar1 .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.contenedor-bg .lugar2 .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.contenedor-bg .lugar3 .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.descripcion .parrafo-lugar{
    line-height: 30px;
    margin-top: -0.3em;
    font-size: 1.40em;
    color: #e4e4e4fa;
    font-family: Lato;
}

.map-popup{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
}
.modal-overlay{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.746);
}
.modal{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
}
.modal .close{
    position: absolute;
    right: 20px;
    top: 10px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: rgb(245, 245, 245);
    background: rgb(75, 75, 75);
    border: none;
    border-radius: 10px;
}
.map-popup .map{
    position: absolute;
    right: 0;
    width: 100px;
    height: 90px;
    background-color: rgba(255, 255, 255, 0.514);
    align-items: center;
    display: inline-grid;
    text-decoration: none;
    border: none;
}
.map-popup .map .fa-map-marker-alt:hover{
    transform: rotate(-35deg);
    transition: 0.5s;
}
.map-popup .map .fa-map-marker-alt{
    color: rgb(241, 67, 67);
    font-size: 40px;
    transform: rotate(25deg);
    text-align: center;
    transition: 0.5s;
}
.modal-overlay-form{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.582);
}
.content-form{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.modal-form{
    position: fixed;
    z-index: 105;
    background: rgb(231, 231, 231);
    width: 60vh;
    height: 85vh;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 2px 9px 6px rgba(0, 0, 0, 0.53);
}
.modal-form .close-form{
    position: absolute;
    right: 0;
    width: 1.875em;
    height: 1.875em;
    font-size: 1.25em;
    cursor: pointer;
    margin: 1em;
}
.input-contenedorHm{
    padding: 1.875em;
    margin-top: 5em;
    height: 100%;
    width: 100%;
    display: grid;
    text-align: center;
    justify-items: center;
    justify-content: center;
    border: 1px solid rgb(170, 170, 170);
    background: #ffffff38;
}
.input-contenedorHm .number{
    width: 6.25em;
    font-size: 1.25em;
    text-align: center;
}
.input-contenedorHm .tittle{
    text-align: center;
    width: 31.25rem;
    margin-bottom: 15px;
    font-size: 1.875em;
}
.input-contenedorHm .valor{
    text-align: center;
    width: 31.25rem;
    margin-bottom: 15px;
    font-size: 1.563em;
}
.input-contenedorHm input{
    margin-top: 0px;
    margin-bottom: 20px;
}

.input-contenedorHm input {
    margin-top: 0px;
    margin-bottom: 0px;
}
</style>