<script setup>
import {ref, computed} from 'vue'
import { usePatientsStore } from '../../stores/patients'
const patientsStore = usePatientsStore()

const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

//models
const testName = ref(null)
const orderDate = ref(null)
const status = ref(null)
const results = ref(null)
const labNotes = ref(null)

function handleNewLab(){
    const patientId = patientsStore.selectedPatient.id
    const data = {
        testName: testName.value,
        orderDate: orderDate.value,
        status: status.value,
        results: results.value,
        labNotes: labNotes.value,
    }
    patientsStore.newLab(data, patientId)
    console.log(patientsStore.patients)
}

//consultation data
const data = computed(() => {
  return patientsStore.selectedPatient?.lab
})
const fields = [
  { label: 'Test Name', key: 'testName' },
  { label: 'Order Date', key: 'orderDate' },
  { label: 'Status', key: 'status' },
  { label: 'Results', key: 'results' },
  { label: 'Lab Technician Notes', key: 'labNotes' },
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
                    <v-col md="4">
                        <v-text-field label="Test Name" variant="outlined" prepend-icon="mdi-test-tube-empty" v-model="testName"></v-text-field>
                    </v-col>
                    <v-col md="4">
                        
                        <v-date-input label="Order Date" variant="outlined" v-model="orderDate"></v-date-input>
                    </v-col>
                    <v-col md="4">
                        <v-select label="Status" variant="outlined" v-model="status" :items="['Pending', 'Processing', 'Completed']" prepend-icon="mdi-progress-helper"> </v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Results" variant="outlined" prepend-icon="mdi-file-document-outline" v-model="results"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea label="Lab Technician's Notes" variant="outlined" prepend-icon="mdi-file-account-outline" v-model="labNotes"></v-textarea>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-close" ></v-icon> Close </v-btn> 
                            <v-spacer/>
                            <v-btn color="primary" variant="outlined" @click="handleNewLab()"> <v-icon icon="mdi-content-save-outline" ></v-icon> Save </v-btn> 
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </div>
</template>