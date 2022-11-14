var app = new Vue({
    el: '#app',
    data: {
        errorMsg: '',
        newMsg: '',
        list: [

            {
               text: 'Fare esercizio del pomeriggio',
               done: false,
            },
            {
               text: 'Fare la spesa',
               done: false,
            },
            {
               text: 'Andare in palestra',
               done: false,
            },

         ],
    },
    methods: {
        removeItem(index) {
            console.log(index);
            this.errorMsg = '';
            if(this.list[index].done) {
                this.list.splice(index, 1)
            }else {
                this.errorMsg = 'Attenzione! Non puoi eliminare una task se non l\'hai ancora completata'
            }
        },
        createItem() {
            this.errorMsg = '';
    
            if(this.newMsg.length < 5) {
                this.errorMsg = 'Attenzione! Il messaggio deve avere almeno 5 caratteri.';
            }else {
                const newItem = {
                    text: this.newMsg,
                    done: false
                }
                this.list.unshift(newItem);
                this.newMsg = '';
            }
        }
    },
  
  })