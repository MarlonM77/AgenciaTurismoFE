<template>
    <div class="main-ms">
        <header class="header-main-ms">
            <a href="#">Viaja por Colombia.com</a>
            <div class="links-header-main">
                <a href="#" v-on:click="loadNosotros">Acerca de Nosotros</a>
                <a href="#">Más Información</a>
                <a href="#" class="btn-login" v-on:click="LoadProfile"><i class="fas fa-user" id="user-icon"></i></a>
            </div>
        </header>
        <h1 class="tittleN">Desarrolladores de este proyecto:</h1>
        <div class="integrante">
            <p>Este proyecto fue desarrollado por estudiantes de Tercer ciclo de MisionTic2022 - Universidad Nacional
                de Colombia.
            </p>
        </div>
    </div>
</template>

<script>
export default {
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
        }
    }
}

</script>

<style>

.header-main-ms{
    display: flex;
    position: absolute;
    text-align: center;
    top: 0px;
    left: 0;
    width: 100%;
    height: 200px;
    justify-content: space-around;
    background-color: rgba(5, 5, 5, 0.596);
    animation: fadeIn 4s;
}


.header-main-ms a{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.main-ms .header-main-ms a {
    position: relative;
    top: 0;
    left: -20px;
    text-decoration: none;
    font-size: 17px;
    color: #fff;
    text-decoration: none;
}

.main-ms{
    width: 100%;
    height: 100vh;
    position: absolute;
    margin-top: 0;
    background: linear-gradient(rgba(49, 92, 117, 0.75), rgba(0, 0, 0, 0.801)),
    url("../assets/misionticBG.jpg");
    background-position: center;
}

.tittleN{
    position: relative;
    margin-right: auto;
    margin-left: auto;  
    margin-top: 6em;
}

.integrante{
    width: 100%;
    height: 450px;
    background-color: rgba(175, 175, 175, 0.007);
    margin-top: 0;
    position: absolute;
}

.integrante p{
    color: rgb(255, 255, 255);
    font-size: 25px;
}

</style>
