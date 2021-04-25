<template>
    <b-container class="mt-5">
        <div class="mb-4">
            <AppUploader />
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
import AppUploader from '@/components/Files/AppUploader';
export default {
    middleware: 'auth',
    components: {
        AppFile,
        AppUploader
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