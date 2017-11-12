<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">New List</h3>
        </div>
        <div class="panel-body">
            {{loading}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        }
    }
}
</script>