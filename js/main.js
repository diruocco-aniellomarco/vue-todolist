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
    }
  }).mount('#app')