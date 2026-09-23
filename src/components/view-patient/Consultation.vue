<script setup>

</script>

<template>
    <v-form>
        <v-card class="pa-12">
            <v-row>
                <v-col>
                    <v-textarea label="Symptoms" variant="outlined" prepend-icon="mdi-human"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea label="Examination Notes" variant="outlined" prepend-icon="mdi-file-document-outline"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea label="Diagnosis" variant="outlined" prepend-icon="mdi-account-search"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6">
                    <v-text-field label="Doctor's Name" variant="outlined" prepend-icon="mdi-account"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-date-input label="Follow-up Date" variant="outlined"></v-date-input>
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