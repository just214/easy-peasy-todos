import { effect, select } from 'easy-peasy';

// * The subscription (function) is defined outside of the store
// * so the reference is available to the unsubscribe function
// * With Firestore, you remove the listener by just calling it..
let subscription;

const state = {
  ready: false,
  allTodos: [],
  filter: 'Active',
};

const selectors = {
  filteredTodos: select(state => {
    switch (state.filter) {
      case 'All':
        return state.allTodos;
      case 'Active':
        return state.allTodos.filter(todo => !todo.isCompleted);
      case 'Completed':
        return state.allTodos.filter(todo => todo.isCompleted);
      default:
        return state.allTodos;
    }
  }),
  filteredTodosCount: select(state => state.filteredTodos.length),
};

const actions = {
  setTodos: (state, payload) => {
    state.allTodos = payload;
  },

  setReadyState: (state, payload) => {
    state.ready = payload;
  },

  setFilter: (state, payload) => {
    state.filter = payload;
  },
};

const effects = {
  subscribe: effect((dispatch, payload, getState, injections) => {
    const { db } = injections;
    const userId = getState().auth.userData.uid;
    subscription = db
      .collection('todos')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .onSnapshot(function(querySnapshot) {
        let allTodos = [];
        querySnapshot.forEach(function(doc) {
          allTodos.push(doc.data());
        });
        dispatch.todos.setReadyState(true);
        dispatch.todos.setTodos(allTodos);
      });
  }),

  unsubscribe: effect(dispatch => {
    subscription();
    // * Reset the state
    dispatch.todos.setReadyState(false);
    dispatch.todos.setTodos([]);
  }),

  addTodo: effect((dispatch, payload, getState, injections) => {
    const { db } = injections;
    const ref = db.collection('todos').doc();

    ref.set({
      id: ref.id,
      userId: getState().auth.userData.uid,
      title: payload,
      isCompleted: false,
      // * We want to sort by date added, so we include a timestamp.
      createdAt: new Date().toString(),
    });
  }),

  deleteTodo: effect((dispatch, payload, getState, injections) => {
    const { db } = injections;
    const ref = db.collection('todos').doc(payload);

    ref.delete();
  }),

  toggleTodoStatus: effect((dispatch, payload, getState, injections) => {
    const { db } = injections;
    const newTodoRef = db.collection('todos').doc(payload.id);

    newTodoRef.set(
      {
        isCompleted: !payload.isCompleted,
      },
      { merge: true },
    );
  }),
};

const todos = {
  ...state,
  ...selectors,
  ...actions,
  ...effects,
};

export default todos;
