<template>
  <div>
      <div class="col-xs-4">
          <h1>Here's a thing!</h1>
          <router-link tag="a" to="/lists/show">Sub Route</router-link>
      </div>
      <div class="col-xs-8">
          <router-view></router-view>
      </div>
  </div>
</template>
