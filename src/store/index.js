import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import example from './module-example'
import _ from 'lodash';
 
Vue.use(Vuex)
Vue.prototype.$qs = qs
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      user: {},
      token: "",
      title: ''
    },
    modules: {
      example
    },
    getters: {
      user(state){
        if (!_.size(state.user)) {
          var user = {};
          var u = JSON.parse(window.localStorage.getItem("user"));
          if (u) {
            user = u;
          }
          localStorage.setItem("user", JSON.stringify(user));
          state.user = user; //this.$store.commit("setUser", user);
          return user;
        }
        return state.user
      },
      token(state){
        return state.token
      }
 
    },
    mutations: {
      setUser (state, user) {
        var _user = _.merge({}, state.user);
        if (!_.size(_user)) {
          _user = {};
        }
        _.each(user, function (value, key) {
          _user[key] = value;
        })
        sessionStorage.setItem("user", JSON.stringify(_user));
        state.user = _user;
      },
      setToken (state, token) {
          sessionStorage.setItem("token", token);
          state.token = token;
      },
      LOGOUT (state){
        sessionStorage.clear();
        state.user = {};
        state.token = null
      },
 
    }
  })
 
  return Store
}
