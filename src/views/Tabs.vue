<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/Home">
          <ion-icon :icon="home" />
          <ion-label>Acceuil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Communes" href="/tabs/Communes">
          <ion-icon :icon="map" />
          <ion-label>Communes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Departements" href="/tabs/Departements">
          <ion-icon :icon="pin" />
          <ion-label>Départements</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Regions" href="/tabs/Regions">
          <ion-icon :icon="location"/>
          <ion-label>Régions</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { location, pin, map, home } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      location,
      pin,
      map,
      home
    }
  }
}
</script>