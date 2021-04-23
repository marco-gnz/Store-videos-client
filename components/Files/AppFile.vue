<template>
    <div>
        <b-list-group-item class="d-flex">
            <span class="text-truncate">{{file.name}}</span>
            <div class="ml-auto pl-2">
                <b-button variant="light" size="sm">Compartir</b-button>
                <b-button variant="danger" size="sm">Eliminar</b-button>
            </div>
        </b-list-group-item>
    </div>
</template>

<script>
export default {
    props: {
        file: {
            required: true,
            type: Object
        }
    }
}
</script>