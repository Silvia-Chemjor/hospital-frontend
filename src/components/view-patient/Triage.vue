<script setup>
import {ref, computed} from 'vue'
import { usePatientsStore } from '../../stores/patients'
const patientsStore = usePatientsStore()

// models
const visitDate = ref(null)
const time = ref(null)
const weight = ref(null)
const height = ref(null)
const bp = ref(null)
const temperature = ref(null)
const pulseRate = ref(null)
const complaint =ref(null)

function handleNewTriage(){
    const patientId = patientsStore.selectedPatient.id
    const data = {
        visitDate: visitDate.value,
        time: time.value,
        weight: weight.value,
        height: height.value,
        bp:  bp.value,
        temperature: temperature.value,
        pulseRate: pulseRate.value,
        complaint: complaint.value,
    }
    patientsStore.newTriage(data, patientId)
    console.log(patientsStore.patients)
}

//used to display triage data
const data = computed(() => {
  return patientsStore.selectedPatient?.triage
})
const fields = [
  { label: 'Visit Date', key: 'visitDate' },
  { label: 'Time', key: 'time' },
  { label: 'Weight', key: 'weight', unit: 'kg' },
  { label: 'Height', key: 'height', unit: 'cm' },
  { label: 'Blood Pressure', key: 'bp' },
  { label: 'Temperature', key: 'temperature', unit: '°C' },
  { label: 'Pulse Rate', key: 'pulseRate', unit: 'bpm' },
  { label: 'Complaint', key: 'complaint' },
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
                        <v-date-input label="Visit Date" variant="outlined" v-model="visitDate"></v-date-input>
                    </v-col>
                    <v-col md="6">
                        
                        <v-text-field label="Time" variant="outlined" type="time" prepend-icon="mdi-" v-model="time" ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Weight" variant="outlined" prepend-icon="mdi-weight" v-model="weight"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Height" variant="outlined" prepend-icon="mdi-human-male-height-variant" v-model="height"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Blood Pressure" variant="outlined" prepend-icon="mdi-heart-pulse" v-model="bp"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Temperature" variant="outlined" prepend-icon="mdi-thermometer" v-model="temperature"></v-text-field>
                    </v-col>
                </v-row>
                <v-row><v-col md="6">
                        <v-text-field label="Pulse Rate" variant="outlined" prepend-icon="mdi-pulse" v-model="pulseRate"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-textarea label="Complaint" variant="outlined" prepend-icon="mdi-file-document-outline" v-model="complaint"></v-textarea>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-close" ></v-icon> Close </v-btn> 
                            <v-spacer/>
                            <v-btn color="primary" variant="outlined" @click="handleNewTriage()"> <v-icon icon="mdi-content-save-outline" ></v-icon> Save </v-btn> 
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </div>
</template>