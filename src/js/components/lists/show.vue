<template>
  <div>
      <h1>{{this.$route.params.name}}</h1>
      <vue-json-editor v-model="list" :showBtns="false"></vue-json-editor>
  </div>
</template>

<script>
import store from '../../store.js'
import vueJsonEditor from 'vue-json-editor'

export default {
  mounted() {
    this.refresh();
  },
  components: {
    vueJsonEditor
  },
  data() {
    return {
      list: null,
      customToolbar: []
    }
  },
  methods: {
    refresh() {
      this.list = JSON.parse(store.loadFile(this.$route.params.name));
    }
  },
  watch: {
    '$route.params.name': function() {
      this.refresh();
    }
  }
}
</script>