<template>
<div class="body">
    <form class="formulario" v-on:submit.prevent="processSignUp">
    
        <h1>Registrate ahora</h1>
        <div class="contenedor">

            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="text" v-model="user.username" placeholder="UserName">
            </div>
            <div class="input-contenedor">
                <i class="fas fa-key icon"></i>
                <input type="password" v-model="user.password" placeholder="Password">
            </div>
            <div class="input-contenedor">
                <i class="fas fa-user icon"></i>
                <input type="text" v-model="user.name" placeholder="FullName">
            </div>
            <div class="input-contenedor">
                <i class="fas fa-envelope icon"></i>
                <input type="text" v-model="user.email" placeholder="Email">
            </div>
            <input type="submit" value="Register" class="button_login">
            <p>Ya tienes una cuenta?<button class="login" v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button></p>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SignUp",

    data: function(){
        return {
            user: {
                username: "",
                password: "",
                name: "",
                email: "",
            },
        is_auth: false
        }
    },

    components: {
    },

    methods: {
        processSignUp: function(){
            axios.post(
                "https://agencia-logiclayer.herokuapp.com/user/",
                this.user,
                {headers: {}})
                .then((result) => {
                    let dataSignUp = {
                        username:       this.user.username,
                        token_access:   result.data.access,
                        token_refresh:  result.data.refresh,
                    }
                    this.$emit('completedSignUp', dataSignUp)   
                })

                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
        },
        loadLogIn: function(){
            this.$router.push({name: "logIn"})
        },
    },
}
</script>


<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    background-image: url("/assets/fondo.jpg");
    background-size: cover;
    background-attachment: fixed;
    padding: 0%;
    box-sizing: border-box;
}

* {
    box-sizing: border-box;
}
.contenedor{
    width: 100%;
    padding: 15px;
}
.formulario{
    background: none;
    margin-top: 150px;
    padding: 3px;
}
h1{
    text-align: center;
    color: #ffffff;
    font-size: 40px;
}
input[type="text"],
input[type="password"]{
    font-size: 20px;
    width: 82%;
    padding: 10px;
    border: none;
    background: none;
}
.input-contenedor{
    margin-bottom: 17px;
    border: 1px solid #ffffff;
    outline: none;
    border-radius: 10px;
}
.input-contenedor :focus{
    outline: none;
}
.icon{
    min-width: 50px;
    text-align: center;
    color: #3d3d3d;
}
.button{
    border: 1px solid #1A1B22;
    width: 100%;
    height: 60px;
    color: #ffffff;
    font-size: 20px;
    background-color:#1A1B22;
    padding: 15px 20px;
    border-radius: 15px;
    cursor: pointer;
}
.button_login {
    border: 1px solid #FF4F4F;
    width: 100%;
    color: #FF4F4F;
    font-size: 20px;
    background:  none;
    padding: 15px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: 00.5s;
}
.button_login:hover{
    background: #FF4F4F;
    color: #ffffff;
}
.button:hover{
    background: rgb(82, 82, 82);
}

p{
    text-align: center;
    font-size:  14px;
    color: #ffffff;
}


.link-sign{
    margin-left: 100px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    
}

.link{
    margin-left: 100px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    
}
.link:hover{
    color: #FF4F4F;
}
.login {
    width: 100px;
    height: 30px;
    color: #fffF;
    border: 1px solid #FF4F4F;
    background: transparent;
    border-radius: 5px;
    padding: 10px, 10px, 10px;
    margin-left:50px;
    transition: 00.5s;
}
.login:hover{
    background-color: #1b1b1b;
    color: #ffff;
    border: 1px solid #1b1b1b;
}

@media(min-width:768px)
{
    .formulario{
        margin: auto;
        width: 500px;
        margin-top: 150px;
        border-radius: 2%;
    }
}
</style>