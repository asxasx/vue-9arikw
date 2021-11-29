const { createApp } = require('vue');

const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
};

createApp(ListRendering).mount('#list-rendering')
