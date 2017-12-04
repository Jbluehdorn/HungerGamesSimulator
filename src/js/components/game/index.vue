<template>
    <div>
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
import controller from './controller'

export default {
    model: {
        prop: 'characters'
    },
    props: ['characters'],
    mounted() {
        controller.test();
    }
}
</script>