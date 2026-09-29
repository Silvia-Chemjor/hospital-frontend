<script setup>

import {ref, computed} from 'vue'
import { usePatientsStore } from '../../stores/patients'
const patientsStore = usePatientsStore()

const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

//models
const symptoms = ref(null)
const examinationNotes = ref(null)
const diagnosis = ref(null)
const doctorName = ref(null)
const followupDate = ref(null)

function handleNewConsultation(){
    const patientId = patientsStore.selectedPatient.id
    const data = {
        symptoms: symptoms.value,
        examinationNotes: examinationNotes.value,
        diagnosis: diagnosis.value,
        doctorName: doctorName.value,
        followupDate: followupDate.value,
    }
    patientsStore.newConsultation(data, patientId)
    console.log(patientsStore.patients)
}

//consultation data
const data = computed(() => {
  return patientsStore.selectedPatient?.consultation
})
const fields = [
  { label: 'Symptoms', key: 'symptoms' },
  { label: 'Examination Notes', key: 'examinationNotes' },
  { label: 'Diagnosis', key: 'diagnosis' },
  { label: 'Doctor', key: 'doctorName' },
  { label: 'Follow Up Date', key: 'followupDate' },
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
                    <v-col>
                        <v-textarea label="Symptoms" variant="outlined" prepend-icon="mdi-human" v-model="symptoms"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Examination Notes" variant="outlined" prepend-icon="mdi-file-document-outline" v-model="examinationNotes"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Diagnosis" variant="outlined" prepend-icon="mdi-account-search" v-model="diagnosis"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Doctor's Name" variant="outlined" prepend-icon="mdi-account" v-model="doctorName"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-date-input label="Follow-up Date" variant="outlined" v-model="followupDate"></v-date-input>
                    </v-col>
                </v-row>
                
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-close" ></v-icon> Close </v-btn> 
                            <v-spacer/>
                            <v-btn color="primary" variant="outlined" @click="handleNewConsultation()"> <v-icon icon="mdi-content-save-outline" ></v-icon> Save </v-btn> 
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </div>
</template>