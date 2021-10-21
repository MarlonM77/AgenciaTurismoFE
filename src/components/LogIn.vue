<template>
<div class="body">
    <div class="home">
        <a href="" v-on:click="loadhome"><i class="fas fa-home"></i></a>
    </div>
    <form class="formulario" v-on:submit.prevent="processLogInUser">
    <h1>Login</h1>
        <div class="contenedor">    
            <p>Por favor ingresar nombre de usuario y contraseña.</p>

            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="text" v-model="user.username" placeholder="Username or Email">
            </div>

            <div class="input-contenedor">
                <i class="fas fa-key icon"></i>
                <input type="password" v-model="user.password" placeholder="Password">
            </div>

            <input type="submit" value="Login" class="button_login">
            <p>Olvidaste tu contraseña?</p> 
        </div>

        <div class="button">
            <i class="fab fa-google"></i>
            <a class="link-sign" href="#">Iniciar con google</a>
        </div>
        <div>
        <p class="member">No tienes una cuenta aún? <button class="register" v-on:click="loadSignUp" > Registrarse </button></p>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LogIn",
    
    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processLogInUser: function(){
            axios.post(
                "https://agencia-logiclayer.herokuapp.com/login/",
                this.user,
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }

                    this.$emit('completedLogIn', dataLogIn)

                })
                .catch((error) => {
                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                });
        },
        loadSignUp: function(){
            this.$router.push({name: "signUp"})
        },

        loadhome: function(){
            this.$router.push({name: "home"})
        },
    }
}
</script>


<style>

.body{
    position: absolute;
    height: 100vh;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    background-size: cover;
    background-attachment: fixed;
    padding: 0%;
    background-image: url("../assets/fondo.jpg");
    box-sizing: border-box;
}

.home{
    position: relative;
    width: 50px;
    height: 50px;
    font-size: 30px;
    top: 25px;
    left: 40px;
}

.home a .fas{
    color: #9d605e;
    transition: 0.7s;
}
.home a .fas:hover{
    color: #ffff;
}

.logIn_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_logIn_user {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logIn_user h2{
    color: #283747;
}

.logIn_user form{
    width: 70%;
}

.logIn_user input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}

.register {
    width: 100px;
    height: 30px;
    color: #FF4F4F;
    border: 1px solid #FF4F4F;
    background: transparent;
    border-radius: 5px;
    padding: 10px, 10px, 10px;
    margin-left:50px;
    transition: 00.5s;
}

.register:hover{
    background-color: #FF4F4F;
    color: #ffff;
}

.logIn_user button:hover{
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}



</style>