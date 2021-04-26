<template>
    <div class="container mt-5">
        <b-row>
            <b-col class="px-2" lg="4" offset-lg="4" md="6" offset-md="3" sm="10" offset-sm="1">
                <h3>Iniciar sesión</h3><hr>
                <b-form @submit.prevent="login">
                    <b-form-group label="Email" label-for="email">
                        <b-form-input v-model="form.email" id="email" type="email" placeholder="Ingrese email" :state="!errors.email && null"></b-form-input>
                        <b-form-invalid-feedback v-if="errors.email">{{errors.email[0]}}</b-form-invalid-feedback>
                    </b-form-group>
                    <b-form-group label="Contraseña" label-for="password">
                        <b-form-input v-model="form.password" id="password" type="password" placeholder="*********" :state="!errors.password && null">    
                        </b-form-input>
                        <b-form-invalid-feedback v-if="errors.password">{{errors.password[0]}}</b-form-invalid-feedback>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Iniciar sesión</b-button>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            errors: {

            }
        }
    },
    methods: {
        //metodo asincrono, ya que vamos a realizar peticiones al servidor
        async login(){
            try {
                //petición para  obtener cookie de laravel sanctum
                // await this.$axios.$get("/sanctum/csrf-cookie");
                
                await this.$auth.loginWith("laravelSanctum", {
                    data: this.form
                });
            
            this.$router.push('/');

            } catch (error) {
                if(error.response.status === 422) {
                //para obtener errores más detallados usamos error.response.data
                this.errors = error.response.data.errors;

                }else if(error.response.status === 401) {
                    this.errors = { password: [] }
                    this.errors.password[0] = 'El correo electronico o la contraseña es incorrecto.';
                }
                
            }
        }
    }
}
</script>