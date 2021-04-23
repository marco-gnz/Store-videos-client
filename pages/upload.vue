<template>
    <b-container class="mt-5">
        <div class="mb-4">
            componente videos
        </div>
        <div class="mb-4">
            <h4>Tus videos</h4>
            <hr>
            <b-list-group v-if="files.length > 0">
                <AppFile v-for="file in files" :key="file.uuid" :file="file"/>
            </b-list-group>

        </div>
    </b-container>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import AppFile from '@/components/Files/AppFile';
export default {
    components: {
        AppFile
    },
    methods: {
        ...mapActions({
            getFiles: 'files/getFiles'
        })
    },
    computed: {
        ...mapGetters({
            files: 'files/files'
        })
    },
    mounted(){
        this.getFiles();
    }
}
</script>