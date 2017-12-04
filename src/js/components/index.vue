<template>
    <div>
        <div class="form-group">
            <label>Select List:</label>
            <select class="form-control" v-model="fileName">
                <option :value="null" selected="selected">Please choose a list...</option>
                <option :value="name" v-for="name in fileNames" :key="name">{{name}}</option>
            </select>
        </div>

        <game-board v-model="characters"></game-board>
    </div>
</template>

<script>
  import player from './game/player'
  import gameBoard from './game/index'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {player, gameBoard},
    data() {
        return {
            fileName: null
        }
    },
    computed: {
        ...mapGetters([
            'characters',
            'fileNames'
        ])
    },
    methods: {
        ...mapActions([
            'loadFile'
        ])
    },
    watch: {
        'fileName': function(val) {
            this.loadFile(val);
        }
    }
  }
</script>