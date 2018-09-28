import Vue from 'vue';


//styles
import './styles';

//fonts
import './assects/fonts';


import App from './app.vue';

let vm = new Vue({
    el: '#app',
    render: h => h(App)
});