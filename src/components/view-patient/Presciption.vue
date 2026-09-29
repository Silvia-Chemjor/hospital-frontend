<script setup>

import {ref, computed} from 'vue'
import { usePatientsStore } from '../../stores/patients'
const patientsStore = usePatientsStore()

//models
const medicationName = ref(null)
const dosage = ref(null)
const frequency = ref(null)
const duration = ref(null)
const instructions = ref(null)
const issueStatus = ref(null)

function handleNewPrescription(){
    const patientId = patientsStore.selectedPatient.id
    const data = {
        medicationName: medicationName.value,
        dosage: dosage.value,
        frequency: frequency.value,
        duration: duration.value,
        instructions: instructions.value,
        issueStatus: issueStatus.value,
    }
    patientsStore.newPrescription(data, patientId)
    console.log(patientsStore.patients)
}

//consultation data
const data = computed(() => {
  return patientsStore.selectedPatient?.prescription
})
const fields = [
  { label: 'Medication Name', key: 'medicationName' },
  { label: 'Dosage', key: 'dosage' },
  { label: 'Frequency', key: 'frequency' },
  { label: 'Duration', key: 'duration' },
  { label: 'Instructions', key: 'instructions'},
  { label: 'Issue Status', key: 'issueStatus' },
]

</script>

<template>
    <div v-if="data"> 
        <v-card class="pa-4 ma-4" rounded="lg">
            <v-row class="mt-2"> 
                <v-col v-for="field in fields" :key="field.key" cols="12" sm="6" >
                    <div class="text-caption text-medium-emphasis"> {{ field.label }} </div>
                    <div class="text-body-1 font-weight-medium"> {{ data[field.key] }} {{ field.unit || '' }} </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
    <div v-else>  
    
        <v-form>
            <v-card class="pa-12">
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Medication Name" variant="outlined" prepend-icon="mdi-medication-outline" v-model="medicationName" ></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Dosage" variant="outlined" prepend-icon="mdi-pill" v-model="dosage" ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Frequency" variant="outlined" prepend-icon="mdi-counter" v-model="frequency"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Duration" variant="outlined" prepend-icon="mdi-calendar-today" v-model="duration"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-textarea label="Instructions" variant="outlined" prepend-icon="mdi-file-document-outline" v-model="instructions"></v-textarea>
                    </v-col>
                    <v-col md="6">
                        <v-checkbox v-model="issueStatus"> <template v-slot:label><span class="text-grey-darken-1">Was the drug issued</span></template></v-checkbox>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-close" ></v-icon> Close </v-btn> 
                            <v-spacer/>
                            <v-btn color="primary" variant="outlined" @click="handleNewPrescription()"> <v-icon icon="mdi-content-save-outline" ></v-icon> Save </v-btn> 
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </div>
</template>