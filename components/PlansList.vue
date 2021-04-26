<template>
    <div>
    <b-container align-v="center"> 
        <h3>Planes disponibles</h3>
        <div class="mt-3">
            <b-card-group deck class="mb-3">
                <b-card border-variant="default" header="Gratis" header-bg-variant="secondary" header-text-variant="white" align="center" title="$0/mes" class="mb-5 mt-2">
                    <b-card-text class="pt-2">
                        Prueba gratis iVideo, si te gusta la prueba gratis puedes cambiarte a otro plan.
                    </b-card-text>
                    <b-card-text>
                        <b-list-group flush>
                            <b-list-group-item></b-list-group-item>
                            <b-list-group-item>500 mb gratis de almacenamiento</b-list-group-item>
                            <b-list-group-item>1GB gratis de ancho de banda</b-list-group-item>
                            <b-list-group-item></b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                    <b-button variant="secondary" class="btn-block">Probar</b-button>
                </b-card>

                <b-card border-variant="info" header="Plata" header-bg-variant="info" header-text-variant="white" align="center" title="$5/mes" class="mb-5 mt-2">
                    <b-card-text class="pt-2">
                        Plan plata de iVideo
                    </b-card-text>
                    <b-card-text>
                        <b-list-group flush>
                            <b-list-group-item></b-list-group-item>
                            <b-list-group-item>50 GB de almacenamiento</b-list-group-item>
                            <b-list-group-item>100GB de ancho de banda</b-list-group-item>
                            <b-list-group-item></b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                    <b-button variant="info" class="btn-block">Adquirir</b-button>
                </b-card>

                <b-card border-variant="primary" header="Oro" header-bg-variant="primary" header-text-variant="white" align="center" title="$10/mes" class="mb-5 mt-2">
                    <b-card-text class="pt-2">
                        Plan oro de iVideo
                    </b-card-text>
                    <b-card-text>
                        <b-list-group flush>
                            <b-list-group-item></b-list-group-item>
                            <b-list-group-item>500 GB de almacenamiento</b-list-group-item>
                            <b-list-group-item>Ancho de banda ilimitado</b-list-group-item>
                            <b-list-group-item></b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                    <b-button variant="primary" class="btn-block">Adquirir</b-button>
                </b-card>
            </b-card-group>
        </div>
    </b-container>    
    </div>
</template>

<script>
export default {
    
}
</script>