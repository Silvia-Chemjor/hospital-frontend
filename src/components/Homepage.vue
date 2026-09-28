<script setup>

</script>

<template>
    <v-container class="py-10">
        <v-row justify="center">
            <v-col md="10" class="text-center">
                <h1 class="text-h3 font-weight-bold mb-4">
                    Welcome to RosaCare Hospital
                </h1>

                <p class="text-h6 text-medium-emphasis">
                    How can we help you today?
                </p>
            </v-col>
        </v-row>

        <v-row class="mt-6">
            <v-col md="4">
                <v-card class="pa-6 text-center">
                    <v-icon icon="mdi-calendar-check" size="50" color="primary" class="mb-4"></v-icon>
                    <v-card-title>Book an Appointment</v-card-title>
                    <v-card-text>Schedule an appointment with one of our doctors.</v-card-text>
                    <v-btn color="primary">Book Now</v-btn>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card class="pa-6 text-center">
                    <v-icon icon="mdi-doctor" size="50" color="primary" class="mb-4"></v-icon>
                    <v-card-title>Find a Doctor</v-card-title>
                    <v-card-text>Find experienced doctors and specialists at RosaCare.</v-card-text>
                    <v-btn color="primary">View Doctors</v-btn>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card class="pa-6 text-center">
                    <v-icon icon="mdi-hospital-building" size="50" color="primary" class="mb-4"></v-icon>
                    <v-card-title>Our Departments</v-card-title>
                    <v-card-text>Explore our medical departments and services.</v-card-text>
                    <v-btn color="primary">View Departments</v-btn>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card class="pa-6 text-center">
                    <v-icon icon="mdi-flask-outline" size="50" color="primary" class="mb-4"></v-icon>
                    <v-card-title>Laboratory Services</v-card-title>
                    <v-card-text>Access reliable laboratory testing and diagnostic services.</v-card-text>
                    <v-btn color="primary">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card class="pa-6 text-center">
                    <v-icon icon="mdi-pill" size="50" color="primary"class="mb-4"></v-icon>
                    <v-card-title>Pharmacy</v-card-title>
                    <v-card-text>Get information about our pharmacy and available services.</v-card-text>
                    <v-btn color="primary">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="4">
                <v-card class="pa-6 text-center">
                    <v-icon icon="mdi-phone" size="50" color="primary" class="mb-4"></v-icon>
                    <v-card-title>Contact Us</v-card-title>
                    <v-card-text>Have a question? Get in touch with RosaCare Hospital</v-card-text>
                    <v-btn color="primary">Contact Us</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>