<script setup>

</script>

<template>
    <v-app-bar color="primary">
        <v-app-bar-title>
            <router-link to="/">
                <v-img src ="white2logo.png" width="20%" height="20%"></v-img>
            </router-link>
        </v-app-bar-title>
        <v-btn to="/homepage">Home</v-btn>
        <v-btn to="/patients">Patients</v-btn>
        <v-btn to="/login">Login</v-btn>
        <v-btn to="/profile">Profile</v-btn>
    </v-app-bar>
</template>