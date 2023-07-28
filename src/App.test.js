import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  // Проверяем, что компоненты RegistrationWindow и WindowChat отрисованы
  const registrationWindow = screen.getByTestId('registration-window');
  const windowChat = screen.getByTestId('window-chat');
  expect(registrationWindow).toBeInTheDocument();
  expect(windowChat).toBeInTheDocument();
});
