<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Départements</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <Search @sendData="sendData"></Search>
      <Result :mainData="mainData"></Result>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import Result from "@/components/departement/Result";
  import Search from "@/components/departement/Search";
export default defineComponent ({
  name: 'Departements',
  components: {Search, Result, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return {
      mainData: [],
      display: false,
    }
  },
  methods: {
    sendData(value) {
      this.mainData = value
    }
  }
})
</script>