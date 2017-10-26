<template>
  <div>
    <nav-bar></nav-bar>
      
    <div class="container-fluid">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navBar from './components/navbar'

export default {
    components: {
        navBar
    }
}
</script>
