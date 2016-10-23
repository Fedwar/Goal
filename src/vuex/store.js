import goal from './modules/goal';
import notifications from './modules/notifications';
import subgoals from './modules/subgoals';
import user from './modules/user';

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).

export default {
  modules: {
    goal,
    notifications,
    subgoals,
    user,
  },
  strict: true,
};
