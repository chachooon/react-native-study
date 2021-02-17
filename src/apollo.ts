import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);
export const postDataVar = makeVar([
  {
    writer: '야자수',
    address: '서울시 구로구',
    content: '인스타그램을 시작했어요!',
  },
]);

export const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});
