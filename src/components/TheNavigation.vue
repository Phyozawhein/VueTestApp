<template>
  <div id="app">
    <div id="nav">
      <ul class="nav-links">
        <li class="links">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="links">
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li class="links">
          <router-link to="/store">
            Store
          </router-link>
        </li>
        <li class="links">
          <router-link to="/travel">
            Travel
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "Navigation",
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #1bb423;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: greenyellow;
  font-weight: bold;
}
</style>
