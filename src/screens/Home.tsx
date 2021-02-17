import React from 'react';
import styled from '@emotion/native';
import { useReactiveVar } from '@apollo/client';
import { Post } from '~/components/Post';
import { postDataVar } from '~/apollo';

export const HomeScreen = () => {
  const postData = useReactiveVar(postDataVar);
  console.log(postData);
  return (
    <Container>
      <Posts>
        {postData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Posts>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: white;
  flex: 1;
  padding: 16px;
`;

const Posts = styled.View`
  padding-bottom: 16px;
`;
