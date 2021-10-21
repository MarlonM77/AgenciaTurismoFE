<template>

    <div v-if="loaded" class="information"> 
        <h1 class="tittle">Información de su cuenta</h1>
        <h2>Nombre: <span>{{name}}</span></h2>
        <h2>Usuario: <span>{{username}}</span></h2>
        <h2>Correo electrónico: <span>{{email}}</span></h2>
        <h2>Mis Reservas: 
        <span>{{nombre_plan}}</span></h2>
        <h2>descripcion: <span>{{descripcion}}</span></h2>
        <h2>cantidad de personas: <span>{{cant_personas}}</span></h2>
        <h2>valor: <span>{{valor}}COP</span></h2>
        <h2>fecha_inicio: <span>{{fecha_inicio}}</span></h2>
        <h2>fecha_fin: <span>{{fecha_fin}}</span></h2>
        
    </div>

</template>

<script>
    import jwt_decode from "jwt-decode";
    import axios from 'axios';

    export default {
        name: "Plan",

        data: function(){
            return {
                username:        "",
                name:            "",
                email:           "",
                nombre_plan:     "",
                descripcion:     "",
                cant_personas:   0,
                valor:           0,
                fecha_inicio:    0,
                fecha_fin:       0, 
                loaded: false,
            }
        },

        methods: {
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
                    console.log(data);
                        this.username       = data.user.username; 
                        this.name           = data.user.name;
                        this.email          = data.user.email;
                        this.nombre_plan    = data.reservas.nombre_plan;
                        this.descripcion    = data.reservas.descripcion;
                        this.cant_personas  = data.reservas.cant_personas;
                        this.valor          = data.reservas.valor;
                        this.fecha_inicio   = data.reservas.fecha_inicio;
                        this.fecha_fin      = data.reservas.fecha_fin;
                    

                    this.loaded = true;
                })
                .catch((error) => {
                    console.log(error);
                    //this.$emit('logOut');
                });
            },

            verifyToken: function () {
                return axios.post("https://agencia-logiclayer.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}})
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
.information {
    margin-top: 50px;
    padding: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    
.tittle{
    font-size: 30px;
    margin-bottom: 110px;
    color: black;
}

.information h2{
    font-size: 25px;
    color: #283747;
}

.information span{
    color: crimson;
    font-weight: bold;
}
</style>