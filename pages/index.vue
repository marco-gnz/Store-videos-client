<template>
  <div>
    <b-jumbotron fluid header="iVideo" lead="Sube tus videos, compartelos y descargalos!">
      <b-button variant="primary">Comienza ahora</b-button>
    </b-jumbotron>
    <PlansList/>
  </div>
</template>

<script>
import PlansList from '@/components/PlansList';
export default {
    middleware: 'auth',
    components: {
      PlansList
    }
}
</script>

<style>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>
