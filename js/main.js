// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;

const app = new Vue (
    {
        el:'#root',
        data: {
            emails:[],
        },
        methods: {
            getRandomEmail: function () {
                axios
                .get(
                    'https://flynn.boolean.careers/exercises/api/random/mail', 
                )
                .then((response) => {
                    const randEmail = response.data.response;
                    this.emails.push(randEmail);
                });
            }
        },
        created: function() {
                for(let index = 0; index < 10; index++) {
                    this.getRandomEmail();
                }
                
        }
    }
);

