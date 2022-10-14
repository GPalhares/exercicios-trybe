import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';
import App from './App';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  
});
test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } />);
 
    const isInValid = screen.getByText('Email Inválido');
    expect(isInValid).toBeInTheDocument();
    render(<App />);
    const inputEmail = screen.getByTestId('id-send')
    expect(inputEmail).toHaveTextContent('');
  });
  