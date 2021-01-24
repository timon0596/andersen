import React from 'react';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { store } from '../../store/store';
import CreateTodo from '../create-todo/create-todo';
import Stats from '../stats/stats';
import TodoList from '../todo-list/todo-list';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <CreateTodo />
      <Stats />
      <TodoList />
    </Provider>
  </ApolloProvider>
);
