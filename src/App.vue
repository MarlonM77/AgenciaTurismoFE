<template>
    <div class="main-component">
      <router-view
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:completedReserve="completedReserve"
        v-on:logOut="logOut">
      </router-view>
    </div>
</template>

<script>
import Swal from 'sweetalert2'


export default {
  name: 'App',

  data: function(){
      return{
        is_auth: false
      }
  },

  components: {
  },

  methods:{
    created: function(){
      this.verifyAuth()
  },
    
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "homeLog" });
    },

    loadHome: function() {
      this.$router.push({ name: "homeLog" });
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },
    
    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    loadPlan: function () {
      this.$router.push({name: "plan"});
    },

    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Usuario Autenticado',
        showConfirmButton: false,
        timer: 1500
      })
      this.verifyAuth();
    },

    completedSignUp: function(data) {
        Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Registro Exitoso',
        showConfirmButton: false,
        timer: 1500
      })
      this.completedLogIn(data);
    },

    completedReserve: function() {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Reserva exitosa',
        showConfirmButton: false,
        timer: 1500
      })
    },
  },

}
</script>
