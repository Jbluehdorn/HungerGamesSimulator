<template>
    <div class="row">
        <div class="col-xs-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Lists
                        <router-link tag="button" class="btn btn-xs btn-primary pull-right" to="/lists/create">
                            <i class="fa fa-plus"></i>
                        </router-link>
                    </h3>
                </div>
                <table class="table-responsive table table-striped table-hover">
                    <tbody>
                    <router-link tag="tr" :to="`/lists/${list.fileName}`" v-for="list in filteredLists" :key="list.fileName">
                        <td>{{list.name}}</td>
                    </router-link>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-xs-8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import store from "../../store/file-store.js";
import _ from 'lodash'

export default {
    mounted() {
        this.load();
    },
    data() {
        return {
        lists: []
        };
    },
    methods: {
        load() {
        this.lists = store.getLists();
        }
    },
    computed: {
        filteredLists() {
            return _.map(this.lists, function(value) {
                return {
                    fileName: value,
                    name: value.slice(0, value.indexOf('.'))
                }
            });
        }
    }
};
</script>