import Vue from 'vue'
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import App from './App.vue';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount('#app')
