import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';

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
  password: '',
  passwordConfirm: ''
};

const USERNAME_LEN_MSG = 'Username length should be between 1 and 30';
const PASSWORD_LEN_MSG = 'Password length should be between 5 and 50';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, USERNAME_LEN_MSG)
    .max(30, USERNAME_LEN_MSG)
    .required('Username is required'),
  password: yup
    .string()
    .min(5, PASSWORD_LEN_MSG)
    .max(50, PASSWORD_LEN_MSG)
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password confirm should be same with Password')
    .required('Password confirm is required')
});

const SingUpForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.form}>
      <Text color="error">{error}</Text>
      <FormikTextInput testID="username" name="username" placeholder="Username" />
      <FormikTextInput testID="password" name="password" placeholder="Password" />
      <FormikTextInput testID="passwordConfirm" name="passwordConfirm" placeholder="Password confirmation" />
      <TouchableWithoutFeedback testID="signUpButton" onPress={onSubmit}>
        <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button}>Sign up</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const SingUpContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SingUpForm onSubmit={handleSubmit} error={error} />}
    </Formik>
  );
};

const SignUp = () => {
  const [error, setError] = useState('');
  const signUp = useSignUp();

  const doSignUp = async (values) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { passwordConfirm, ...userPwd } = values;
      await signUp(userPwd);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return <SingUpContainer onSubmit={doSignUp} error={error} />;
};

export default SignUp;