import { render, screen } from '@testing-library/react'
import PrimaryButton from '../components/PrimaryButton'


describe('Primary Button()', () => {
    it('should render correctly', () => {
        render(<PrimaryButton />)
        const button = screen.getByText('Click to Add')
        expect(button).toBeInTheDocument()
    })
    it('should render correctly with the action if provided', () => {
        const action = 'Post'
        render(<PrimaryButton action={action} />)
        const button = screen.getByText('Click to ' + action)
        expect(button).toBeInTheDocument()
    })
})
