// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

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
                for(let i = 0; i < 10; i++) {
                    this.getRandomEmail();
                }
                
        }
    }
);


// const app = new Vue(
//     {
//         el: '#root',
//         data: {
//             emails: [],
//         },
//         methods: {
            
//         },
//         created: function (){
//             for (let i = 0; i < 10; i++){
//                 axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//                 .then((response) => {
//                 this.emails.push(response.data.response);
//             });
//             }
//             console.log(this.emails)
//         }
//     }
// );

