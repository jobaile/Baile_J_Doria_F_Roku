<template>
  <div>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
          <li>
            <a href="#Item-1">TV</a>
            <ul class="menu">
              <li><a href="#Item-1A">Item 1A</a></li>
              <li><a href="#Item-1C">Item 1C</a></li>
              <li><a href="#Item-1C">Item 1C</a></li>
            </ul>
          </li>
          <li>
            <a href="#Item-1">Movies</a>
            <ul class="menu">
              <li><a href="#Item-1A">Item 1A</a></li>
              <li><a href="#Item-1C">Item 1C</a></li>
              <li><a href="#Item-1C">Item 1C</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="dropdown menu" data-dropdown-menu>
          <li>
            <a href="#Item-1">User</a>
            <ul class="menu">
              <li><a href="#Item-1A">Item 1A</a></li>
              <li><a href="#Item-1C">Item 1C</a></li>
              <li v-on:click="logout()"><a href="#">Log Out</a></li>
            </ul>
          </li>
          </ul>
          <li v-on:click="logout()"><a href="#">Log Out</a></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
