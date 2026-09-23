<script setup>

</script>

<template>
    <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-carousel cycle hide-delimiters>
                    <v-carousel-item src="/Images/carousel1.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/Images/carousel2.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/Images/carousel3.jpg" cover></v-carousel-item>
                    <v-carousel-item src="/Images/carousel4.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>

    <!-- About us -->
     <v-container max-width="100%">
        <v-row>
            <v-col>
                <v-card align ="center">
                    <v-card-title>Welcome to the RosaCare Hospital</v-card-title>
                    <v-card-text class="text-body-large">Welcome to RosaCare Hospital, where compassionate healing meets medical excellence. Our state-of-the-art facility provides comprehensive, patient-centered care with advanced technology to ensure a comfortable, safe, and supportive environment for everyone.</v-card-text>
                    <v-card-text class="text-body-large">Our dedicated team of experienced physicians and specialists delivers exceptional clinical outcomes. From routine wellness checks to urgent emergency services, RosaCare offers trusted, personalized medical care designed for your family's health.</v-card-text>
                </v-card>
            </v-col>
        </v-row>
     </v-container>
<!-- Clinics -->
     <v-container max-width="100%">
        <v-row>
            <v-col md="3">
                <v-card width="300px" color = "primary">
                    <v-img src="/Images/clinic1.jpg" cover></v-img>
                    <v-card-title> Laboratory Services</v-card-title>
                    <v-card-text>Some text about the lab</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px" color = "primary">
                    <v-img src="/Images/clinic2.jpg" cover></v-img>
                    <v-card-title> Oncology Clinics</v-card-title>
                    <v-card-text>Some text about the clinic</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px" color = "primary">
                    <v-img src="/Images/clinic3.jpg" cover></v-img>
                    <v-card-title> Physiotherapy Clinic.</v-card-title>
                    <v-card-text>Some text about the clinic</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>

            <v-col md="3">
                <v-card width="300px" color = "primary">
                    <v-img src="/Images/clinic4.jpg" cover></v-img>
                    <v-card-title> Pediatric Clinic</v-card-title>
                    <v-card-text>Some text about the clinic</v-card-text>
                    <v-btn class="ma-4">Learn More</v-btn>
                </v-card>
            </v-col>
        </v-row>
     </v-container>

     <!-- Footer -->
     <v-container max-width="100%" class="mt-6 bg-secondary">
        <v-row>
            <v-col md = "4">
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Subscribe to our mailing list</v-card-title>
                    <v-card-text>Get the latest news, health tips, and hospital updates delivered to your inbox.</v-card-text>
                    <v-text-field v-model="inputValue" label="Email Address" outlined class = "ma-4">
                        <template v-slot:append-inner>
                            <v-btn color="primary">Subscribe</v-btn>
                        </template>
                    </v-text-field>
                    <div class="text-center mb-4">
                        <p>Follow us on:</p>
                        <v-icon icon="mdi-instagram"></v-icon>
                        <v-icon icon="mdi-twitter"></v-icon>
                        <v-icon icon="mdi-facebook"></v-icon>
                    </div>
                </v-card>
            </v-col>
            <v-col md = "4">
                <v-card height="300px" color = "secondary" flat>
                    <v-card-title>Contact Information</v-card-title>
                    <v-card-text>
                        <p>
                            <v-icon icon="mdi-map-marker-radius-outline"></v-icon>
                            The RosaCare Hospital
                        </p>
                        <p> 123, Main Street Union, Nairobi</p>
                        <p>
                            <v-icon icon="mdi-phone-outline"></v-icon>
                            +254789479745
                        </p>
                        <p>
                            <v-icon icon="mdi-email-outline"></v-icon>
                            info@rosacarehospital.com
                        </p>
                    </v-card-text>
                </v-card>                
            </v-col>
            <v-col>
                <v-card height="300px" color="secondary" flat>
                    <v-card-title>Quick Links</v-card-title>
                    <v-card-title>About us</v-card-title>
                    <v-card-title>Clinics</v-card-title>
                    <v-card-title>Find a Doctor</v-card-title>
                    <v-card-title>News and Events</v-card-title>
                </v-card>
            </v-col>
        </v-row>

     </v-container>
</template>