// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;

const app = new Vue (
    {
        el:'#root',
        data: {
            randomEmail: null,
        },
        methods: {
            
        },
        created: function() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    const serverRandomEmail = response.data.response;
                    this.randomEmail = serverRandomEmail;
                    // console.log(response.data.response);
                });
        }
    }
);

