<script setup>
import {ref} from 'vue';
import Triage from './view-patient/Triage.vue';
import Consultation from './view-patient/Consultation.vue';
import Lab from './view-patient/Lab.vue';
import Presciption from './view-patient/Presciption.vue';

const tab = ref(null)

</script>

<template>
    <v-container class="mt-12">
        <v-row>
            <v-col md ="3">
                <v-btn color = "primary" icon="mdi-arrow-left" to="/patients"></v-btn>
            </v-col>

            <v-col md="3">
                <div class="text-title-medium font-weight-medium">Name</div>
            </v-col>

            <v-col md="3">
                <div class="text-title-medium font-weight-medium">Age</div>
            </v-col>
                
            <v-col md="3">
                <div class="text-title-medium font-weight-medium">Outpatients</div>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="mt-4">
        <v-tabs v-model="tab" color="secondary" slider-color="secondary" bg-color="primary" grow stacked>
            <v-tab :value="1" class="text-title-medium"><v-icon icon="mdi-pulse"></v-icon>Triage</v-tab>
            <v-tab :value="2" class="text-title-medium"><v-icon icon="mdi-doctor"></v-icon>Consultation</v-tab>
            <v-tab :value="3" class="text-title-medium"><v-icon icon="mdi-test-tube"></v-icon>Lab Test</v-tab>
            <v-tab :value="4" class="text-title-medium"><v-icon icon="mdi-pill"></v-icon>Prescription</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
            <!-- Triage -->
             <v-tabs-window-item :value="1">
                <Triage/>
             </v-tabs-window-item>

             <!-- Consultation -->
             <v-tabs-window-item :value="2">
                <Consultation/>
             </v-tabs-window-item>

             <!-- Lab Test -->
             <v-tabs-window-item :value="3">
                <Lab/>
             </v-tabs-window-item>

             <!-- Prescription -->
             <v-tabs-window-item :value="4">
                <Presciption/>
             </v-tabs-window-item>
        </v-tabs-window>
    </v-container>
</template>