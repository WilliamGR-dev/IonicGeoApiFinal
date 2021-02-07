<template>
    <ion-toolbar class="in-toolbar md toolbar-title-default hydrated" v-if="mainData.length>0">
        <ion-title class="md title-md title-default hydrated"><strong>{{mainData.length}}</strong><span v-if="mainData.length>2">communes</span><span v-else>commune</span> </ion-title>
    </ion-toolbar>
    <ion-card v-for="area in mainData" :key="area" class="sc-ion-card-md-h sc-ion-card-md-s md hydrated">
        <ion-card-header class="md hydrated"><ion-card-subtitle class="ion-text-center md hydrated" role="heading" aria-level="3">{{area.code}}</ion-card-subtitle>
            <ion-card-title class="ion-text-center md hydrated" role="heading" aria-level="2">{{area.nom}}</ion-card-title></ion-card-header>
        <ion-card-content class="md card-content-md hydrated">
            <ion-list class="md list-md hydrated">
                <ion-item class="item-label item md in-list ion-focusable hydrated">
                    <ion-label class="sc-ion-label-md-h sc-ion-label-md-s md hydrated">Département</ion-label>
                    <ion-note slot="end" color="primary" class="ion-color ion-color-primary md hydrated">{{area.departement.code}}</ion-note>
                </ion-item>
                <ion-item class="item-label item md in-list ion-focusable hydrated">
                    <ion-label class="sc-ion-label-md-h sc-ion-label-md-s md hydrated">Région</ion-label>
                    <ion-note slot="end" color="primary" class="ion-color ion-color-primary md hydrated">{{area.region.nom}}</ion-note>
                </ion-item>
                <ion-item class="item-label item md in-list ion-focusable hydrated">
                    <ion-label class="sc-ion-label-md-h sc-ion-label-md-s md hydrated">Code postaux</ion-label>
                    <ion-note slot="end" color="primary" class="ion-color ion-color-primary md hydrated">{{area.codesPostaux.join()}}</ion-note>
                </ion-item>
                <ion-item class="item-label item md in-list ion-focusable hydrated">
                    <ion-label class="sc-ion-label-md-h sc-ion-label-md-s md hydrated">Population</ion-label>
                    <ion-note slot="end" color="primary" class="ion-color ion-color-primary md hydrated">{{area.population}} hab.</ion-note>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>

<script>
    import { IonCard, IonCardHeader, IonCardSubtitle, IonLabel, IonNote, IonCardTitle, IonItem, IonList, IonCardContent, IonToolbar, IonTitle} from '@ionic/vue';
    export default {
        name: "Result",
        props: ['mainData'],
        components: {IonCard, IonCardHeader, IonCardSubtitle, IonLabel, IonNote, IonCardTitle, IonItem, IonList, IonCardContent, IonToolbar, IonTitle}
    }
</script>

<style scoped>

</style>