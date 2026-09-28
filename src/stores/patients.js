import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRender } from 'vuetify/lib/util/useRender.mjs'
import Patients from '@/components/Patients.vue'

export const usePatientsStore = defineStore('patients', () => {
  
    const patients = ref(
        [
    {
        id:1,
        firstName:"John",
        lastName:"Doe",
        email:"johndoe@gmail.com",
        phone:"0731223383",
        residence:"123, Main Street",
        nationalId:"12345678",
        dob:"2000-04-03"
    },
    {
        id:2,
        firstName:"James",
        lastName:"Ochieng",
        email:"jamesochieng@gmail.com",
        phone:"0733833122",
        residence:"234, Side Street",
        nationalId:"23456789",
        dob:"1999-06-23"
    },
    {
        id:3,
        firstName:"Lesley",
        lastName:"Ndunge",
        email:"lezndunge@gmail.com",
        phone:"0731332283",
        residence:"567, Corner Street",
        nationalId:"09876543",
        dob:"2001-12-12"
    },
    {
        id:4,
        firstName:"Jane",
        lastName:"Miller",
        email:"janemiller@gmail.com",
        phone:"0789674523",
        residence:"456, Main Street",
        nationalId:"67890543",
        dob:"2002-08-23"
    }
]
    )
    const selectedPatientId = ref(null)
    const selectedPatient = computed(() => {
        return patients.value.find(user => user.id === selectedPatientId.value)
    })

    function selectPatient(id){
        selectedPatientId.value = id
    }

    function addPatient(data){
        const lastId = patients.value.length > 0 ? patients.value[patients.value.length - 1].id: 0
        data.id = lastId + 1
        patients.value.push(data)
    }
  return { patients, addPatient, selectedPatientId, selectedPatient, selectPatient }
})
