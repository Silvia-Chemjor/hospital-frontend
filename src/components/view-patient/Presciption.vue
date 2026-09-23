<script setup>

</script>

<template>
     <v-form>
        <v-card class="pa-12">
            <v-row>
                <v-col md="6">
                    <v-text-field label="Medication Name" variant="outlined" prepend-icon="mdi-medication-outline" ></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-text-field label="Dosage" variant="outlined" prepend-icon="mdi-pill" ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-text-field label="Frequency" variant="outlined" prepend-icon="mdi-counter"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-text-field label="Duration" variant="outlined" prepend-icon="mdi-calendar-today"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-textarea label="Instructions" variant="outlined" prepend-icon="mdi-file-document-outline"></v-textarea>
                </v-col>
                <v-col md="6">
                    <v-checkbox> <template v-slot:label><span class="text-grey-darken-1">Was the drug issued</span></template></v-checkbox>
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