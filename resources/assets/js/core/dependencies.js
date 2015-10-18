/*
 * Load Vue & Vue-Resource.
 */
window.Vue = require('vue');

require('vue-resource');
Vue.http.headers.common['X-CSRF-TOKEN'] = Zendcon.csrfToken;

/*
 * Load jQuery and Bootstrap jQuery, used for front-end interaction.
 */
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');

/*
 * Load Underscore.js, used for map / reduce on arrays.
 */
window._ = require('underscore');
