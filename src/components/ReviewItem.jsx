import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { useHistory } from 'react-router-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    alignItems: 'stretch',
    padding: 10
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  rightContainer: {
    display: 'flex',
    paddingLeft: 10,
    flexShrink: 1
  },
  rightItem: {
    marginTop: 5,
    marginBottom: 5,
  },
  leftContainer: {
    display: 'flex',
    width: 50,
    height: 50,
    borderRadius: 35,
    borderStyle: "solid",
    borderWidth: 3,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary
  },
  rating: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
    color: theme.colors.primary
  },
  button: {
    ...theme.button,
    flexGrow: 1
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [day, month, year].join('.');
};

const ReviewItem = ({ review, showUser, deleteReview }) => {
  const history = useHistory();
  const createAlert = (id) => {
    Alert.alert(
      "Delete review",
      "Are you sure you you want to delete this review",
      [
        {
          text: "CANCEL",
          style: "cancel"
        },
        { text: "DELETE", onPress: () => deleteReview(id) }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text color='main' style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.rightContainer}>
          {showUser
            ? <Text fontSize='subheading' fontWeight='bold' style={styles.rightItem}>{review.user.username}</Text>
            : <Text fontSize='subheading' fontWeight='bold' style={styles.rightItem}>{review.repositoryId.replace('.', '/')}</Text>
          }
          <Text color='textSecondary' style={styles.rightItem}>{formatDate(review.createdAt)}</Text>
          <Text color='textLabel' style={styles.rightItem}>{review.text}</Text>
        </View>
      </View>
      {!showUser &&
        <View style={styles.buttonsContainer}>
          <TouchableWithoutFeedback>
            <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button} onPress={() => history.push(`/repo/${review.repositoryId}`)}>View repository</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text color='delete' fontSize='subheading' fontWeight='bold' style={styles.button} onPress={() => createAlert(review.id)}>Delete review</Text>
          </TouchableWithoutFeedback>
        </View>
      }
    </View>
  );
};

export default ReviewItem;