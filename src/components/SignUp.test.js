import SignUp from "./SignUp";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import axios from 'axios'

// describe groups multiple tests together into a test suite. An example of when to use describe is to group together all the tests
// for a specific page. 
describe('SignUp page', () => {
    // You can also put test suites into test suites to group them out even more. 
    describe('Layout', () => {
         // it creaates a test closure, it takes two arguments, the name of the test as a string, and a callback function that is the test
        it('has a header', () => {
            // checks that an element is rendered
            render(<SignUp/>)
            // queries an element on the screen by its ARIA role
            const header = screen.queryByRole('heading', {name: 'Sign Up'})
            // expect is an assertion that tests an element, along with a method determining something about the element. In this case 
            // testing that its in the document. 
            expect(header).toBeInTheDocument()
        })

        it('has a username input', () => {
            render(<SignUp/>)
            // Should always use screen methods over container methods. 
            const input = screen.getByLabelText('Username:')
            expect(input).toBeInTheDocument()
        })

        it('has an email input', () => {
            render(<SignUp/>)
            // If testing multiple inputs in the same suite use getByLabelText over getByRole. Alternatively use getByPlaceholderText
            const input = screen.getByLabelText('Email:')
            expect(input).toBeInTheDocument()
        })

        it('has an email type for email input', () => {
            render(<SignUp/>)
            const input = screen.getByLabelText('Email:')
            // Tests what the type of an input is.
            expect(input.type).toBe('email')
        })

        it('has a password input', () => {
            render(<SignUp/>)
            const input = screen.getByLabelText('Password:')
            expect(input).toBeInTheDocument()
        })

        it('has a password type for password input', () => {
            render(<SignUp/>)
            const input = screen.getByLabelText('Password:')
            // Tests what the type of an input is.
            expect(input.type).toBe('password')
        })

        it('has a password confirmation input', () => {
            render(<SignUp/>)
            const input = screen.getByLabelText('Password Confirmation:')
            expect(input).toBeInTheDocument()
        })

        it('has a password type for password confirmation input', () => {
            render(<SignUp/>)
            const input = screen.getByLabelText('Password Confirmation:')
            expect(input.type).toBe('password')
        })

        it('has a submit button', () => {
            render(<SignUp/>)
            const button = screen.queryByRole('button', {name: 'Sign Up'})
            expect(button).toBeInTheDocument()
        })

        it('disables button initially', () => {
            render(<SignUp/>)
            const button = screen.queryByRole('button', {name: 'Sign Up'})
            expect(button).toBeDisabled()
        })
    })

    describe('Interactions', () => {
        it('enables the button when password and password confirmation match', () => {
            render(<SignUp/>)

            const password = screen.getByLabelText('Password:')
            const passwordConfirmation = screen.getByLabelText('Password Confirmation:')

            // To simulate events utilize the userEvent object.
            userEvent.type(password, 'P4ssword')
            userEvent.type(passwordConfirmation, 'P4ssword')

            const button = screen.queryByRole('button', {name: 'Sign Up'})
            // can use the not propserty on expects to switch the meaning of a boolean oriented method such as toBeDisabled.
            expect(button).not.toBeDisabled()
        })

        it('submits form on button click', () => {
            render(<SignUp/>)
            const user = screen.getByLabelText('Username:')
            const email = screen.getByLabelText('Email:')
            const password = screen.getByLabelText('Password:')
            const passwordConfirmation = screen.getByLabelText('Password Confirmation:')
            const button = screen.queryByRole('button', {name: 'Sign Up'})

            userEvent.type(user, 'user1')
            userEvent.type(email, 'user1@gmail.com')
            userEvent.type(password, 'P4ssword')
            userEvent.type(passwordConfirmation, 'P4ssword')

            expect(button).not.toBeDisabled()
        })
    })
}) 