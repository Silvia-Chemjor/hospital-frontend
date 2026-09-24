<script setup>
import { ref } from 'vue'
import {useAuth} from '../services/auth'
import { useRouter} from "vue-router"

const router = useRouter();
const { login } = useAuth()

//DATA MODELS
const email = ref(null)
const password = ref(null) //model
const showpassword = ref(false)
const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters'
 }

 function handleLogin()
 {
    const data = {
        email: email.value,
        password: password.value,
    }
    login(data)
    router.push('/homepage').then(() => {
        router.go(0)
    });
 }

</script>

<template>
    <v-container align="center" class="mt-12">
        <v-row>
            <v-col>
                <v-card max-width="80%" class="bg-secondary">
                    <v-img src="/purplelogo.png" height="100" width="200" class="mt-4"></v-img>
                    <v-card-title class="ma-5"> Login</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="ma-8">
                        <v-row>
                            <v-col md="4">
                                <div class="text-right"> Email</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field v-model="email" variant="outlined"></v-text-field>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col md="4">
                                <div class="text-right"> Password</div>
                            </v-col>
                            <v-col md="6">
                                <v-text-field 
                                v-model="password"
                                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn @click="handleLogin()" >Login</v-btn>
                            </v-col>
                             </v-row>
                        <v-row>
                            <v-col>
                                <div>
                                    New user? 
                                    <router-link to="/signup">Create an account</router-link>
                                </div>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>