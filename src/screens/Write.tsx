import React from 'react';
import styled from '@emotion/native';
import { postDataVar } from '~/apollo';
import { useReactiveVar } from '@apollo/client';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

interface IFromProps {
  writer: string;
  address: string;
  content: string;
}

export const WriteScreen = () => {
  const navigation = useNavigation();
  const postData = useReactiveVar(postDataVar);

  const { control, handleSubmit, errors } = useForm<IFromProps>({
    mode: 'onChange',
  });

  const onSubmit = () => {
    const { writer, address, content } = control.getValues();

    postDataVar([{ writer, address, content }, ...postData]);
    navigation.navigate('Home');

    control.setValue('writer', '');
    control.setValue('address', '');
    control.setValue('content', '');
  };

  return (
    <Container>
      <Form>
        <FormItem>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <Input
                placeholder="작성자를 입력해주세요"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="writer"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.writer && <FormError>This is required.</FormError>}
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <Input
                placeholder="주소를 입력해주세요"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="address"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.address && <FormError>This is required.</FormError>}
        </FormItem>
        <FormItem>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <Input
                placeholder="내용을 입력해주세요"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="content"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.content && <FormError>This is required.</FormError>}
        </FormItem>
        <Submit onPress={handleSubmit(onSubmit)}>
          <SubmitText>Submit</SubmitText>
        </Submit>
      </Form>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
`;

const Form = styled.View`
  width: 100%;
`;

const FormItem = styled.View`
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  border: solid 1px rgba(0, 0, 0, 0.23);
  padding: 16px;
`;

const Submit = styled.TouchableOpacity`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.23);
  justify-content: center;
  align-items: center;
`;

const SubmitText = styled.Text``;

const FormError = styled.Text`
  color: red;
  margin-top: 4px;
`;
