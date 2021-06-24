import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';

import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      await act(async () => {
        fireEvent.changeText(getByTestId('username'), 'orhan');
      });
      await act(async () => {
        fireEvent.changeText(getByTestId('password'), 'password');
      });
      await act(async () => {
        fireEvent.press(getByTestId('signInButton'));
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'orhan',
          password: 'password',
        });
      });
    });
  });
});