import { render, screen } from '@testing-library/react'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from './redux/store';

it('should render hello world', () => {
    render(<Provider store={createStore()}><App /></Provider>);
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
})