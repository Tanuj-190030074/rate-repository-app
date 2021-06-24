import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import useSignIn from '../hooks/useSignIn';
import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 10,
  },
  button: theme.button,
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput testID="username" name="username" placeholder="Username" />
      <FormikTextInput testID="password" name="password" placeholder="Password" secureTextEntry={true} />
      <TouchableWithoutFeedback testID="signInButton" onPress={onSubmit}>
        <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const signIn = useSignIn();

  const doSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={doSubmit} />;
};

export default SignIn;