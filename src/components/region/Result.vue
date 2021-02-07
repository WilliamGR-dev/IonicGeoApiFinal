<template>
    <ion-toolbar class="in-toolbar md toolbar-title-default hydrated" v-if="mainData.length>0">
        <ion-title class="md title-md title-default hydrated"><strong>{{mainData.length}}</strong> <span v-if="mainData.length>2">départements</span><span v-else>département</span></ion-title>
    </ion-toolbar>
    <ion-card v-for="departement in mainData" :key="departement" class="sc-ion-card-md-h sc-ion-card-md-s md hydrated">
        <ion-card-header class="md hydrated">
            <ion-card-subtitle class="ion-text-center md hydrated" role="heading" aria-level="3">{{departement.code}}</ion-card-subtitle>
            <ion-card-title class="ion-text-center md hydrated" role="heading" aria-level="2">{{departement.nom}}</ion-card-title>
        </ion-card-header>
    </ion-card>
</template>

<script>
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonToolbar, IonTitle } from '@ionic/vue';
    export default {
        name: "Result",
        props: ['mainData'],
        components: {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonToolbar, IonTitle}
    }
</script>

<style scoped>

</style>