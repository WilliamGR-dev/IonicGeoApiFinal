<template>
    <ion-item>
        <ion-label position="stacked">Code postal ou ville</ion-label>
        <ion-input placeholder="Effectuez une recherche via le code postal pour afficher les communes correspondantes ou recherchez une ville pour afficher les communes du même nom." v-model="inputSearch"></ion-input>
    </ion-item>
    <ion-button type="submit" color="primary" expand="block" class="ion-color ion-color-primary md button button-block button-solid ion-activatable ion-focusable hydrated" @click="sendInput" @keyup.enter="sendInput" :disabled="!inputSearch">Recherche</ion-button>
</template>

<script>
    import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
    export default {
        emits: ["sendData"],
        data() {
            return {
                inputSearch: "",
                message: {
                    className: "",
                    textContent: ""
                },
                data: [],
            }
        },
        name: "Search",
        methods: {
            sendInput() {
                if (parseInt(this.inputSearch)){
                    fetch(`https://geo.api.gouv.fr/communes?codePostal=`+this.inputSearch+`&fields=region,departement,population,codesPostaux&boost=population`).then((response)=>{
                        response.json().then((data)=> {
                            if (data.length === 0){
                                const toast = document.createElement('ion-toast');
                                toast.message = "Le code postal n'existe pas";
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
                else{
                        fetch(`https://geo.api.gouv.fr/communes?nom=`+this.inputSearch+`&fields=region,departement,population,codesPostaux&boost=population`).then((response)=>{
                            response.json().then((data)=> {
                                if (data.length === 0){
                                    const toast = document.createElement('ion-toast');
                                    toast.message = "La ville n'existe pas";
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

            }

        },
        components: {
            IonItem, IonLabel, IonInput, IonButton

        }
    }

</script>

<style scoped>

</style>