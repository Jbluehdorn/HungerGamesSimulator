<template>
    <div>
        <div class="form-group">
            <label>Select List:</label>
            <select class="form-control" v-model="fileName">
                <option :value="null" selected="selected">Please choose a list...</option>
                <option :value="name" v-for="name in fileNames" :key="name">{{name}}</option>
            </select>
        </div>

        <!-- This is demonstrative. Delete it once more is added. -->
        <table class="table-responsive table">
            <tbody>
                <tr v-for="character in characters" :key="character.id">
                    <td>{{character.name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import player from './game/player'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {player},
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