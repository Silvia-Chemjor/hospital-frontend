<script setup>
import {ref} from 'vue'

const patients = [
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

const showAddDialog =ref(false)

</script>

<template>
    <v-container class="mt-6">
        <v-row>
            <v-col md="10">
                <h1>Patients</h1>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="secondary" icon="mdi-plus" @click="showAddDialog = true"></v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-table class="border" striped="even">
                    <thead>
                        <tr>
                            <th><b>Name</b></th>
                            <th><b>Phone</b></th>
                            <th><b>Email</b></th>
                            <th><b>Residence</b></th>
                            <th><b>National ID</b></th>
                            <th><b>Date of Birth</b></th>
                            <th><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstName + " " + item.lastName }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.residence }}</td>
                            <td>{{ item.nationalId }}</td>
                            <td>{{ item.dob }}</td>
                            <td>
                                <v-btn color="primary" size="small" to="/viewpatient">
                                <v-icon icon="mdi-eye"></v-icon>
                                View
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>

    <!-- Add Patients -->
    <v-dialog v-model="showAddDialog" max-width="50%">
        <v-form>
            <v-card class="pa-4">
                <v-row>
                    <v-card-text>Add Patient</v-card-text>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="secondary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" variant="outlined" prepend-icon="mdi-account-outline"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" variant ="outlined" prepend-icon="mdi-account-outline"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Phone" variant="outlined" prepend-icon="mdi-phone-outline"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Email" variant ="outlined"prepend-icon="mdi-email-outline"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Residence" variant="outlined" prepend-icon="mdi-home-outline"></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="National ID" variant="outlined" prepend-icon="mdi-id-card"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-date-input label="Date of Birth" variant="outlined"></v-date-input>
                    </v-col>
                </v-row>
                <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-btn color="secondary" variant="outlined"><v-icon icon="mdi-close"></v-icon>Close</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="secondary" variant="outlined"><v-icon icon="mdi-content-save-outline"></v-icon>Save</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>