<script setup>
import {ref} from 'vue'


</script>

<template>
    <v-form>
        <v-card class="pa-12">
            <v-row>
                <v-col md="6">
                    <v-date-input label="Visit Date" variant="outlined"></v-date-input>
                </v-col>
                <v-col md="6">
                    
                    <v-text-field label="Time" variant="outlined" type="time" prepend-icon="mdi-" ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-text-field label="Weight" variant="outlined" prepend-icon="mdi-weight"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-text-field label="Height" variant="outlined" prepend-icon="mdi-human-male-height-variant"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-text-field label="Blood Pressure" variant="outlined" prepend-icon="mdi-heart-pulse"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-text-field label="Temperature" variant="outlined" prepend-icon="mdi-thermometer"></v-text-field>
                </v-col>
            </v-row>
            <v-row><v-col md="6">
                    <v-text-field label="Pulse Rate" variant="outlined" prepend-icon="mdi-pulse"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-textarea label="Complaint" variant="outlined" prepend-icon="mdi-file-document-outline"></v-textarea>
                </v-col>
            </v-row>
            <v-divider class="mb-4" color="primary" opacity=".7" thickness="3" gradient></v-divider>
            <v-row>
                <v-col>
                    <v-card-actions>
                        <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-close" ></v-icon> Close </v-btn> 
                        <v-spacer/>
                        <v-btn color="primary" variant="outlined"> <v-icon icon="mdi-content-save-outline" ></v-icon> Save </v-btn> 
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-form>
</template>