<template>
    <div>
        <input type="file" multiple ref="file" />
    </div>
</template>

<script>

import * as Filepond from 'filepond';
import es_Es from "@/node_modules/filepond/locale/es-es";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { supportedFiles } from "@/config/supportedFiles";
export default {
    mounted() {
        Filepond.registerPlugin(FilePondPluginFileValidateType);
        Filepond.setOptions(es_Es);
        const pond = Filepond.create(this.$refs.file, {
            acceptedFileTypes: supportedFiles
        });
    }
}
</script>