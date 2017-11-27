<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">New List</h3>
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" v-model="fileName" class="form-control">
            </div>
            <vue-json-editor v-model="json" :showBtns="false"></vue-json-editor>
            <br>
            <button class="btn btn-primary pull-right" @click="submit" :disabled="loading">Submit</button>
        </div>
    </div>
</template>

<script>
import store from '../../store/file-store.js'
import vueJsonEditor from 'vue-json-editor'

export default {
    components: {vueJsonEditor},
    data() {
        return {
            loading: false,
            fileName: '',
            json: []
        }
    },
    methods: {
        submit() {
            let self = this;
            this.loading = true;

            store.writeFile(this.fileName, this.json, function() {
                self.loading = false;

                self.$router.push(`/lists/${self.fileName}.json`);
            });
        }
    }
}
</script>