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
  - (Pssst... Implementation can be seen in `SignInPage`, starting with `handleSubmit`)
 
## Screenshots
Page: `/`

![Screenshot 2023-11-20 at 9 33 25 AM](https://github.com/tiffbacher/Webflix/assets/56415813/111f1dca-9452-45b6-9c52-df15ece7ad49)

Page: `/sign-in`

![Screenshot 2023-11-20 at 9 34 29 AM](https://github.com/tiffbacher/Webflix/assets/56415813/c1452a80-e556-41a9-9093-00eb83b849df)


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
