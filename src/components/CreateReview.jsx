import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 10,
  },
  button: theme.button,
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const RATING_MSG = 'Rating should be a number between 0 and 100';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .typeError(RATING_MSG)
    .min(0, RATING_MSG)
    .max(100, RATING_MSG),
});

const ReviewForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.form}>
      <Text color="error">{error}</Text>
      <FormikTextInput testID="ownerName" name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput testID="repositoryName" name="repositoryName" placeholder="Repository name" />
      <FormikTextInput testID="rating" name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput testID="text" name="text" placeholder="Review" multiline numberOfLines={4} />
      <TouchableWithoutFeedback testID="createReviewButton" onPress={onSubmit}>
        <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button}>Create a review</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const ReviewFormContainer = ({ onSubmit, error }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} error={error} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [error, setError] = useState('');
  const createReview = useCreateReview();

  const doSubmit = async (values) => {
    try {
      await createReview(values);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return <ReviewFormContainer onSubmit={doSubmit} error={error} />;
};

export default CreateReview;