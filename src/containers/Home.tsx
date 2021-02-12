import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';

interface Props {}

const Home: FunctionComponent<Props> = ({}) => {
  const { data } = useQuery(gql`
    query {
      posts {
        title
        author
      }
    }
  `);

  const posts = data && data.posts ? data.books : [];

  return (
    <View style={styles.container}>
      {data &&
        data.posts.map((post: any, idx: number) => {
          return <Text key={idx}>title: {post.title}</Text>;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
