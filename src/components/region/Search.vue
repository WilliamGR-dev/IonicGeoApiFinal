<template>
    <ion-item class="item-label item-interactive item-select item-has-placeholder item md ion-activatable ion-focusable hydrated">
        <ion-label class="sc-ion-label-md-h sc-ion-label-md-s md hydrated" id="ion-sel-2-lbl">Régions</ion-label>
        <ion-select v-model="regionSelected" placeholder="Sélectionner" role="combobox" aria-haspopup="dialog" aria-expanded="false" aria-labelledby="ion-sel-2-lbl" class="md in-item hydrated">
            <ion-select-option v-for="region in allRegion" :key="region" :value="region.code" role="option" id="ion-selopt-218" class="md hydrated">{{region.code}} — {{region.nom}}</ion-select-option>
            <input type="hidden" class="aux-input" name="ion-sel-2" value="">
        </ion-select>
    </ion-item>
    <ion-button type="submit" color="primary" expand="block" class="ion-color ion-color-primary md button button-block button-solid ion-activatable ion-focusable hydrated" @click="sendInput" @keyup.enter="sendInput" :disabled="!regionSelected">Recherche</ion-button>
</template>

<script>
    import { IonItem, IonLabel,  IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
    export default {
        emits: ["sendData"],
        data() {
            return {
                inputSearch: "",
                message: {
                    className: "",
                    textContent: ""
                },
                regionSelected: "",
                allRegion: [],
                data: [],
            }
        },
        name: "Search",
        methods: {
            findallRegion() {
                fetch(`https://geo.api.gouv.fr/regions`).then((response)=>{
                    response.json().then((data)=> {
                        this.allRegion = data;
                    });
                });


            },
            sendInput() {
                fetch(`https://geo.api.gouv.fr/regions/`+ this.regionSelected +`/departements`).then((response)=>{
                    response.json().then((data)=> {
                        if (data.length === 0){
                            const toast = document.createElement('ion-toast');
                            toast.message = "La regions n'existe pas";
                            toast.color = "danger";
                            toast.duration = 2000;

                            document.body.appendChild(toast);
                            return toast.present();
                        }
                        else {
                            this.data = data;
                            this.$emit('sendData', this.data);
                        }
                    });
                });

            }

        },
        components: {
            IonItem, IonLabel, IonButton, IonSelect, IonSelectOption,

        },
        mounted() {
            this.findallRegion();
        }
    }

</script>

<style scoped>

</style>