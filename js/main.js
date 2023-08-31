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
        ]
      }
    },

    methods: {
        checkItem(index) {
            this.toDo[index].done = true
        }
    }
  }).mount('#app')