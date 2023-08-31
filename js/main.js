const { createApp } = Vue

  createApp({
    data() {
      return {
        toDo: [
            {
                text: 'Cucinare',
                done: false,
            },
            {
                text: 'Lavare la macchina',
                done: false,
            },
            {
                text: 'Visita dal medico',
                done: false,
            },
        ],
        message: 
                {
                    text: '',
                    done: false,   
                },
    
      };
    },

    methods: {
        checkItem(index) {
            this.toDo[index].done = true;
            
        },
        deleteItems(index) {
            this.toDo.splice(index,1);
        },

        addList() {
            this.toDo.unshift(this.message);
            this.message = 
                            {
                                text: '',
                                done: false,   
                            }
        },
        unCheckItem(index) {
            this.toDo[index].done = false;
            
        },


    }
  }).mount('#app')