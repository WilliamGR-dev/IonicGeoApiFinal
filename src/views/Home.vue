<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Acceuil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <h1 class="ion-text-center">Découpage administratif</h1>
      <ul class="ion-text-center">
        <li>
          Recherche de communes par code postal et par nom
        </li>
        <li>
          Recherche des communes par département
        </li>
        <li>
          Recherche des département par région
        </li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent( {
  name: 'Communes',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

});
</script>