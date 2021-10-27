<template>
    <div class="circulos-links-main">
        <div class="contenedor-hm" id="backgroundL">
            <a href="#" class="circulo"  v-on:click="loadLugares" id="lugar"><i class="fas fa-map-marker-alt"></i></a>
            <div class="texto-hm">
                <p>Lugares</p>
            </div>
        </div>
        <div class="contenedor-hm">
            <a href="#" class="circulo" v-on:click="marker2"><i class="fab fa-slideshare"></i></a>
            <div class="texto-hm">
                <p>Guías</p>
            </div>
        </div>
        <div class="contenedor-hm" id="backgroundP">
            <a href="#" class="circulo" v-on:click="loadPlanes" id="plan"><i class="fas fa-tram"></i></a>
            <div class="texto-hm">
                <p>Planes</p>
            </div>
        </div>
    </div>
</template> 

<script>

export default {
    name: 'navBar',

    methods: {
        loadPlanes: function(){
            this.$router.push({name: "homeLog"})
        },
        loadLugares: function(){
            this.$router.push({name: "lugares"})
        }
    }
}
</script>


<style>

.circulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.5s;
}

.circulo:hover {
    transform: scale(1.2);
}

.main .contenedor-hm {
    justify-content: center;
    position: relative;
    display: grid;
    top: 0;
    padding-top: 15px;
    box-sizing: border-box;
    width: 6.5em;
    height: 6em;
    background-color: rgba(39, 36, 36, 0.815);
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

#user-icon{
    font-size: 30px;
    transition: 0.5s;
}

.fa-user:hover{
    color: rgb(32, 32, 32);
}

.texto-hm p{
    position: absolute; 
    font-size: 20px;
}
</style>