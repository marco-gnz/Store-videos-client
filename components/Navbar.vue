<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">iVideo</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <template v-if="$auth.loggedIn">
            <b-nav-item href="" to="/upload">Mis videos</b-nav-item>
          </template>
          <b-nav-item href="">Planes</b-nav-item>
        </b-navbar-nav>
        
        <client-only>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="$auth.loggedIn">
              <template #button-content>{{$auth.user.name}}</template>
              <b-dropdown-item href="" to="/dashboard">Mi cuenta</b-dropdown-item>
              <b-dropdown-item href="" @click.prevent="logout">Cerrar sesión</b-dropdown-item>
            </b-nav-item-dropdown>

            <template v-if="!$auth.loggedIn">
              <b-nav-item to="/login">Iniciar sesión</b-nav-item>
              <b-nav-item href="" to="/register">Crear cuenta</b-nav-item>
            </template>
          </b-navbar-nav>
        </client-only>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    //es asyncronico xq se hace una petición al servidor
    async logout(){
      await this.$auth.logout();

      this.$router.replace({name: 'login'});
    }
  }
};
</script>