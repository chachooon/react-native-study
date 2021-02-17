import React from 'react';
import styled from '@emotion/native';

interface IPostProps {
  post: {
    writer: string;
    address: string;
    content: string;
  };
}

export const Post: React.FC<IPostProps> = ({ post }) => {
  return (
    <Container>
      <Header>
        <Writer>{post.writer}</Writer>
        <Address>{post.address}</Address>
      </Header>
      <Content>{post.content}</Content>
    </Container>
  );
};

const Container = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 8px;
  background-color: white;
  margin-bottom: 8px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Writer = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

const Address = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

const Content = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;
