# Webflix

Mini sign-in and registration flow inspired by Netflix

## Get started

To run locally:

- run `npm install`
- run `npm run dev`

## Behavior to expect

- User can input their email on `/` and click "Sign In"
- Email input validation errors will show as a console error
- Clicking "Sign In" will take user to `/sign-in`
- User can input their email and password on `sign-in`
- An empty email or an invalid email will result in error messages
- An empty password will result in an error message
- Submitting the form with "email@email.com" and "password" will successfully take the user to `/browse`
- Submitting the form with any other email or password will result in error messages

## TODO

- ADD TESTS! 🤪
- Update with Typescript
- Add field validation feedback to home page input
- Build registration flow
- Build pricing page
- Add banner linking to pricing page
- Build profiles page

## Technologies
- React + Vite, React Router, Tailwind
