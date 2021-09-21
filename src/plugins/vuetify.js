import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#182333',
        secondary: '#2c5799',
        accent: '#8c9eff',
        error: '#c73336',
      },
    },
  }  
});
