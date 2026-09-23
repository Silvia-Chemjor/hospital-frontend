<script setup>

</script>

<template>
    <v-form>
        <v-card class="pa-12">
            <v-row>
                <v-col md="4">
                    <v-text-field label="Test Name" variant="outlined" prepend-icon="mdi-test-tube-empty"></v-text-field>
                </v-col>
                <v-col md="4">
                    
                    <v-date-input label="Order Date" variant="outlined"></v-date-input>
                </v-col>
                <v-col md="4">
                    <v-select label="Status" variant="outlined" :items="['Pending', 'Processing', 'Completed']" prepend-icon="mdi-progress-helper"> </v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea label="Results" variant="outlined" prepend-icon="mdi-file-document-outline"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea label="Lab Technician's Notes" variant="outlined" prepend-icon="mdi-file-account-outline"></v-textarea>
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