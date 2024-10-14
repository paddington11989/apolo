// src/ApolloProvider.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Создайте HTTP-ссылку на ваш GraphQL эндпоинт
const httpLink = createHttpLink({
  uri: 'https://api.tanda.kg/graphql/', // Замените на ваш GraphQL эндпоинт
});

// Если требуется аутентификация, настройте заголовки
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken'); // Или другой способ получения токена
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// Создайте экземпляр Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Используйте authLink, если требуется аутентификация
  cache: new InMemoryCache(),
});

const ApolloAppProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export default ApolloAppProvider;

