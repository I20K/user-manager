<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">User Manager</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-for="nav in navs" :key="nav.route" :to="nav.route">
            <b-nav-item active-class="active" :to="nav.route">{{
              nav.text
            }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container class="mt-3" fluid>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          text: "Usuários",
          route: "/",
        },
      ],
    };
  },
};
</script>
