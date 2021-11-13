<template>
<div class="containerNav">   
    <navBar class="nav"></navBar> 
    <a href="#" class="leave" v-on:click="logOut"><i class="fas fa-sign-out-alt"></i></a>> 
</div>
<div class="container">
    <h1 class="tittle">Información de su cuenta</h1>
        <div v-if="loaded" class="information">
            <h2>Nombre: <span>{{name}}</span></h2>
            <h2>Usuario: <span>{{username}}</span></h2>
            <h2>Correo electrónico: <span>{{email}}</span></h2>
        </div>
        <div class="reserva" v-if="sinReservas">
            <h2>Mis Reservas:
<!--                <a href="" title="Elimina Reserva" class="delete"
                v-on:click="processDelete"><i class="fas fa-trash-alt"></i></a> -->
            </h2>   
            <h2><span>{{nombre_plan}}</span></h2>
            <h2>descripcion: <br><span>{{descripcion}}</span></h2>
            <h2>cantidad de personas: <span>{{cant_personas}}</span></h2>
            <h2>valor: <span>{{valor}}COP</span></h2>
            <h2>fecha_inicio: <span>{{fecha_inicio}}</span></h2>
            <h2>fecha_fin: <span>{{fecha_fin}}</span></h2>
            <div class="delete">
            </div>
        </div>
</div> 
</template>

<script>
    import Swal from 'sweetalert2'
    import navBar from "@/components/navBar.vue";
    
    import jwt_decode from "jwt-decode";

    import axios from 'axios';

    export default {
        name: "Plan",
        components: {   
            navBar
        },

        data: function(){
            return {
                is_auth:         false,
                sinReservas:     false,

                username:        "",
                name:            "",
                email:           "",
                nombre_plan:     "",
                descripcion:     "",
                cant_personas:   0,
                valor:           0,
                fecha_inicio:    0,
                fecha_fin:       0, 
                loaded:          false,

            }
        },

        methods: {
            created: function(){
                this.verifyAuth()
            },
            logOut: function () {
                Swal.fire({
                    title: 'Estás seguro?',
                    text: "Si es así, te esperamos pronto!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, deseo salir'
                }).then((result) => {
                    if (result.isConfirmed) {
                    Swal.fire(
                    'Sesion cerrada',
                    )
                    localStorage.clear();
                }
                this.verifyAuth();
                })
                
            },   
            verifyAuth: function() {
                this.is_auth = localStorage.getItem("isAuth") || false;
                if (this.is_auth == false)
                    this.$router.push({ name: "logIn" });
                else
                    this.$router.push({ name: "plan" });
            },

            getData: async function () {
                if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
                    this.$emit('logOut');
                    return;
                }

                await this.verifyToken();

                let token = localStorage.getItem("token_access");
                let userId  = jwt_decode(token).user_id.toString();  

                axios.get(`https://agencia-logiclayer.herokuapp.com/plan/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
                .then((result) => {
                    const data = result.data[0];
                        this.username       = data.user.username; 
                        this.name           = data.user.name;
                        this.email          = data.user.email;
                        this.nombre_plan    = data.reservas.nombre_plan;
                        this.descripcion    = data.reservas.descripcion;
                        this.cant_personas  = data.reservas.cant_personas;
                        this.valor          = data.reservas.valor;
                        this.fecha_inicio   = data.reservas.fecha_inicio;
                        this.fecha_fin      = data.reservas.fecha_fin;
                        this.sinReservas    = true;               
                        this.loaded         = true;

                })
                .catch(() => {
                    
                    axios.get(`https://agencia-logiclayer.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
                    .then((result) => {
                        this.username       = result.data.username; 
                        this.name           = result.data.name;
                        this.email          = result.data.email;           
                        this.loaded         = true;
                        })
                        .catch(() => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Parece que ha ocurrido un error',
                                footer: 'Viaja por colombia error de petición'
                            })
                            this.$emit('logOut');
                        });
                    });
                },  
                verifyToken: function () {
                    return axios.post("https://agencia-logiclayer.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, 
                    {headers: {}})
                    .then((result) => {
                        localStorage.setItem("token_access", result.data.access);
                    })
                    .catch(() => {
                        this.$emit('logOut');
                    });
                }
            },
            created: async function(){
                this.getData();
            },
}
</script>

<style>

.container {
    position: absolute;
    top: 0px;
    padding: 0%;
    width: 100%;
    height: 100vh;
    display: grid;
    flex-direction: row;
    background: rgb(241, 139, 139);
    align-content: center;
}

.nav a{
    text-decoration: none;
}

.plan{
    display: block;
    justify-items: center;
    text-align: center;
    margin-bottom: 45px;
}

.nav{
    display: flex;
    position: relative;
    top: 1em;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    width: 36.25em;
    color: #fff;
    z-index: 90;
}

.leave{
    position: absolute;
    right: 2em;
    top: 1em;
    z-index: 90;
    font-size: 40px;
    color: #fafafafa;
}

.container .information{
    text-align: center;
    margin-bottom: 2em;
}

.container .reserva{
    text-align: center;
}

.container .tittle{
    margin-bottom: 1em;
}

.perfil{
    margin-top: 0;
    width: 100%;
    height: 100%;
}

.reserva h2{
    font-size: 25px;
    color: #2a2a2a;
}

.reserva span{
    color: crimson;
    font-weight: bold;
}

.reserva .delete{
    position: absolute;
    font-size: 35px;
    margin-left: 6.5em;
    color: rgb(0, 0, 0);
    transition: 0.5s;
}

.reserva .delete:hover{
    transform: scale(1.2);
    color: rgb(255, 255, 255);
}

.information h2{
    font-size: 25px;
    color: #2a2a2a;
}

.information span{
    color: crimson;
    font-weight: bold;
}

</style>