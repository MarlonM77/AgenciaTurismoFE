<template>
<div class="main">
    <!----------Ventanadas Modal para Reservar Planes (POPUPS)----------------->

    <!----------Reservar Plan1----------------->

    <transition name="fade">
        <div class="modal-overlay-form" v-if="ShowForm"></div>
    </transition>
    <transition name="fade">
        <div class="content-form">
            <div class="modal-form" v-if="ShowForm">
                <button class = "close-form" @click="ShowForm = false"><i class="fas fa-times"></i></button>
                <form>
                    <div class="input-contenedorHm">
                        <input type="text" value="Plan Senderismo de ensueño" class="tittle" readonly>
                        <h2>Fecha Inicio:</h2>
                        <Datepicker v-model="dataPlan.dateI" class="dateI" :minDate="new Date()" 
                            v-on:update:modelValue="checkIn" locale="es" autoApply :closeOnAutoApply="false"></Datepicker>
                        <h2>Fecha Fin:</h2>
                        <Datepicker v-model="dataPlan.dateF" class="dateF" :minDate="new Date()"
                            v-on:update:modelValue="checkIn2" locale="es" autoApply :closeOnAutoApply="false"></Datepicker>
                        <h2>Cantidad de Personas: </h2> 
                        <input type="number" placeholder="Personas" v-model="reserva.plan_data.cant_personas" min="1" max="6" class="number" 
                            id="number" v-on:change="calculateValue">
                        <h2>Valor:</h2>
                        <span class="valor">${{reserva.plan_data.valor}} COP</span>
                    </div>
                    <input type="text" value="Reservar" class="btn-reservar" v-on:click="processReserve" readonly>
                </form>
            </div>
        </div>
    </transition>

    <!----------Reservar Plan2----------------->

    <transition name="fade">
        <div class="modal-overlay-form" v-if="ShowForm2"></div>
    </transition>

    <transition name="fade">
        <div class="content-form">
            <div class="modal-form" v-if="ShowForm2">
                <button class = "close-form" @click="ShowForm2 = false"><i class="fas fa-times"></i></button>
                <form action="formulario" v-on:submit.prevent="processBook">
                    <div class="input-contenedorHm">
                        <input type="text" name="nombre_plan" value="Playa Privada Santa Marta" class="tittle" readonly>
                        <h2>Fecha Inicio:</h2>
                        <datetime format="YYYY-MM-DD h:i:s" width="200px" v-model="dataPlan.date_inicio"></datetime>
                        <h2>Fecha Fin:</h2>
                        <datetime format="YYYY-MM-DD h:i:s" width="200px" v-model="dataPlan.date_fin" ></datetime>
                        <h2>Cantidad de Personas: </h2>
                        <input type="number" placeholder="Personas" v-model="dataPlan.cant_personas" min="1" max="6" class="number" 
                            id="number" v-on:change="calculateValue">
                        <h2>Valor:</h2>
                        <span class="valor">${{dataPlan.valor}} COP</span>
                    </div>
                    <input type="submit" value="Reservar" class="btn-reservar">
                </form>
            </div>
        </div>
    </transition>

    <!-- <Contenido PRINCIPAL DE LA PAGINA /> -->
    <div class="contenidofade">
    <header class="header-main">
    <a href="#">Viaja por Colombia.com</a>
    <div class="links-header-main">
        <a href="#" v-on:click="loadNosotros">Acerca de Nosotros</a>
        <a href="#">Más Información</a>
        <a href="#" class="btn-login" v-on:click="LoadProfile"><i class="fas fa-user" id="user-icon"></i></a>
    </div>
    </header>
    <navBar class="nav2"> </navBar>
    <div class="title">
        <h1>Planes de Santa Marta <br>
        con los mejores hoteles</h1>
    </div>
    
        <div class="contenedor-bg">
            <div class="plan"><a href=""></a>

                <div class="map-popup">
                    <button class="map" @click="ShowModal = true"><i class="fas fa-map-marker-alt"></i></button>
                    <transition name="fade">
                        <div class="modal-overlay" v-if="ShowModal"></div>
                    </transition>

                    <transition name="fade">
                        <div class="modal" v-if="ShowModal">
                            <iframe class="frame" align="left" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7234190916524!2d-74.230050685196!3d11.133964592079531!2m3!1f
                            0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4591e80c0ce69%3A0xac41dcadd7325b79!2sSanta%20Marta%20Marriott%20Resort%20Playa%
                            20Dormida!5e0!3m2!1ses!2sco!4v1634701733388!5m2!1ses!2sco"  
                            width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>

                            <button class = "close" @click="ShowModal = false"><i class="fas fa-times"></i></button>
                        </div>
                    </transition>
                </div>
                <div  class="ec-stars-wrapper" >
                <a href="#" data-value="1" v-on:click="puntua1" title="Califica con 1 estrella" id="star1">&#9733;</a>
                <a href="#" data-value="2" title="Califica con 2 estrellas">&#9733;</a>
                <a href="#" data-value="3" title="Califica con 3 estrellas">&#9733;</a>
                <a href="#" data-value="4" title="Califica con 4 estrellas">&#9733;</a>
                <a href="#" data-value="5" title="Califica con 5 estrellas">&#9733;</a>
                </div>
                
                <div class="descripcion">
                    <h2>Plan Senderismo</h2>
                    <p class="parrafo-plan">Esta actividad está caracterizada por sus impactantes vistas y recorridos<br> exuberantes a través de caminos empinados y bosques de niebla
                    <br> Ideal para aquellos enamorados de las caminatas de montaña,<br>una experiencia única con un amanecer a 
                    3,100 metros de altura sobre<br><b>los picos nevados y el mar Caribe.</b></p>

                    <button class="consultar" @click="ShowForm = true"><p class="btn-txt">Consultar</p></button>
                </div>
            </div>

            <div class="plan2"><a href=""></a>

                <div class="map-popup">
                    <button class="map" @click="ShowModal2 = true"><i class="fas fa-map-marker-alt"></i></button>
                    <transition name="fade">
                        <div class="modal-overlay" v-if="ShowModal2"></div>
                    </transition>

                    <transition name="fade">
                        <div class="modal" v-if="ShowModal2">
                            <iframe class="frame" align="left" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7234190916524!2d-74.230050685196!3d11.133964592079531!2m3!1f
                            0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4591e80c0ce69%3A0xac41dcadd7325b79!2sSanta%20Marta%20Marriott%20Resort%20Playa%
                            20Dormida!5e0!3m2!1ses!2sco!4v1634701733388!5m2!1ses!2sco"  
                            width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>
                            <button class = "close" @click="ShowModal2 = false"><i class="fas fa-times"></i></button>
                        </div>
                    </transition>
                </div>
                <div  class="ec-stars-wrapper2">
                <a href="#" data-value="1"  title="Califica con 1 estrella" id="star2">&#9733;</a>
                <a href="#" data-value="2"  title="Califica con 2 estrellas">&#9733;</a>
                <a href="#" data-value="3"  title="Califica con 3 estrellas">&#9733;</a>
                <a href="#" data-value="4"  title="Califica con 4 estrellas">&#9733;</a>
                <a href="#" data-value="5"  title="Califica con 5 estrellas">&#9733;</a>
                </div>
                <div class="descripcion">
                    <h2>Plan playa</h2>
                    <p class="parrafo-plan">con playa privada en Santa Marta, aquí descubrirá la combinación<br> perfecta de servicios de alta tecnología y comodidades de primera 
                    <br>  categoría. Frente a la playa más al sur de Santa Marta, Colombia, <br>  ofrecemos una ubicación conveniente cerca de lugares de interés  
                    <br> como <b>Playa Blanca, Ciudad Perdida y el Parque de los Novios.</b></p>

                    <button class="consultar" @click="ShowForm2 = true"><p class="btn-txt">Consultar</p></button>
                </div>
            </div>
        </div>
    <div class="cover"></div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

import Swal from 'sweetalert2'

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

import navBar from "@/components/navBar.vue";

import jwt_decode from "jwt-decode";

export default {
    components: {  
        Datepicker,
        navBar
    },
    data: function(){
        return{
            is_auth:        false,

            ShowModal:      false,
            ShowModal2:     false,
            ShowForm:       false,
            ShowForm2:      false,

            dataPlan:{
                valor:          100000,
                dateI:          null,
                dateF:          null,
                cant_personas:  1
            },

            reserva: {
                user_id:             0,
                plan_data:{
                    user:            0,
                    valor:           100000,
                    fecha_inicio:    "2021-02-05 18:30:00",
                    fecha_fin:       "2021-02-10 18:30:00",
                    nombre_plan:     "Plan Senderismo de ensueño",
                    descripcion:     "Este Plan de senderismo en Santa Marta se caracteriza por sus impactantes vistas y recorridos",
                    cant_personas:   1
                }
            }
        }
    }, 

    methods: {
        created: function(){
                this.verifyAuth()
            },  
            verifyAuth: function() {
                this.is_auth = localStorage.getItem("isAuth") || false;
                if (this.is_auth == false)
                    this.$router.push({ name: "logIn" });
                else
                    this.$router.push({ name: "home" });
            },

        loadLogIn: function(){
            this.$router.push({name: "logIn"})
        },

        loadNosotros: function(){
            this.$router.push({name: "nosotros"})
        },
        
        LoadProfile: function(){
            this.$router.push({name: "plan"});
        },

        calculateValue: function(){
            let cant_personas = this.reserva.plan_data.cant_personas;
            if(cant_personas == 1){
                this.reserva.plan_data.valor = 100000;
            }
            else if(cant_personas == 2){
                this.reserva.plan_data.valor = 250000;
            }
            else if(cant_personas == 3){
                this.reserva.plan_data.valor = 500000;
            }
            else if(cant_personas == 4){
                this.reserva.plan_data.valor = 750000;
            }
            else if(cant_personas == 5){
                this.reserva.plan_data.valor = 1000000;
            }
            else if(cant_personas == 6){
                this.reserva.plan_data.valor = 1250000;
            }
        },

        processReserve: async function(){

            if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                this.$emit('logOut');
                return;
            }

            await this.verifyToken();

            let token       = localStorage.getItem("token_access");
            let userId      = jwt_decode(token).user_id.toString();  

            this.reserva.user_id           = userId;
            this.reserva.plan_data.user    = userId;

            console.log(this.reserva);

            axios.post(
                "https://agencia-logiclayer.herokuapp.com/plan/",
                this.reserva, {headers: {'Authorization':`Bearer ${token}`}})
                .then(() => {
                    this.$emit('completedReserve')  
                })
                .catch((error) => {
                    if (error.response.status == "401")
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Parece que ha ocurrido un error, comprueba que los campos se hayan llenado correctamente',
                        footer: 'Viaja por colombia Error de reserva'
                        })
                })
        },

        verifyToken: async function () {
            return axios.post("https://agencia-logiclayer.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, 
            {headers: {}})
            .then((result) => {
                localStorage.setItem("token_access", result.data.access);
            })
            .catch(() => {
                this.$emit('logOut');
                });
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

.cover{
    position: relative;
    top: -353px;
    height: 38vh;
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

.nav2{
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
.nav2 #plan{
    background-color: rgba(255, 255, 255, 0.664);
}

.nav2 #backgroundP{
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

.ec-stars-wrapper {	
    position: relative;
	font-size: 0;
    display: inline-block;
    box-sizing: border-box;
    width: 8.4rem;
    height: 2.5rem;
    margin-left: 0;
    top: 20rem
}


.ec-stars-wrapper a {
	text-decoration: none;
	display: inline-block;
	/* Volver a dar tamaño al texto */
	font-size: 2rem;
	
	color: rgb(146, 226, 255);
}

.ec-stars-wrapper:hover a {
	color: yellow;
}
/*
 * El selector de hijo, es necesario para aumentar la especifidad
 */
.ec-stars-wrapper > a:hover ~ a {
	color: rgb(146, 226, 255);
}

.ec-stars-wrapper2 {	
    position: relative;
	font-size: 0;
    display: inline-block;
    box-sizing: border-box;
    width: 9rem;
    height: 2.5rem;
    margin-left: 10rem;
    top: 20rem
}


.ec-stars-wrapper2 a {
	text-decoration: none;
	display: inline-block;
	/* Volver a dar tamaño al texto */
	font-size: 2rem;
	
	color: rgb(146, 226, 255);
}

.ec-stars-wrapper2:hover a {
	color: yellow;
}
/*
 * El selector de hijo, es necesario para aumentar la especifidad
 */
.ec-stars-wrapper2 > a:hover ~ a {
	color: rgb(146, 226, 255);
}


.contenedor-bg .plan{
    position: absolute;
    width: 30rem;
    height: 20rem;
    left: 6rem;
    top: 2rem;
    z-index: 2;
    background-image: url("../assets/Plan1.jpg");
    background-size: cover;
}

.contenedor-bg .plan2{
    position: absolute;
    left: 6rem;
    top: 27rem;
    width: 30rem;
    height: 20rem;
    z-index: 2;
    background-image: url("../assets/Plan4.jpg");
    background-size: cover;
}

.contenedor-bg .plan .descripcion{
    position: relative;
    bottom: 1.3em;
    left: 35rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}

.contenedor-bg .plan2 .descripcion{
    position: relative;
    bottom: 1.3em;
    left: 35rem;
    height: 15em;
    width: 55em;
    background-color: rgba(255, 255, 255, 0.24);
}

.contenedor-bg .plan .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.contenedor-bg .plan2 .descripcion h2{
    padding-top: 0.5em;
    text-align: center;
    color: #fafafafa;
}

.descripcion .parrafo-plan{
    line-height: 30px;
    margin-top: -0.3em;
    font-size: 1.40em;
    color: #e4e4e4fa;
    font-family: Lato;
}

.descripcion .consultar {
    position: absolute;
    text-align: center;
    left: 25em;
    background: rgb(146, 226, 255);
    width: 15em;
    height: 3.5em;
    border-radius: 0.5em;
    transition: 0.3s;
    border: none;
}

.consultar .btn-txt{
    font-size: 20px;
    margin-top: 10px;
    color: rgb(10, 10, 10);
}

.descripcion .consultar:hover {
    background: rgb(255, 224, 47);
    transform: scale(1.08);
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


.modal-form .btn-reservar{
    margin-top: 2rem;
    display: flex;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    width: 200px;
    height: 50px;
    background-color: #cfcfcffa;
    border: 1px solid rgb(2, 2, 2);
    border-radius: 8px;
    transition: 0.5s;
    cursor: pointer;
}

.modal-form .btn-reservar:hover{
    background-color: #b9b9b9fa;
    transform: scale(1.03)
}

.input-contenedorHm input {
    margin-top: 0px;
    margin-bottom: 0px;
}

</style>