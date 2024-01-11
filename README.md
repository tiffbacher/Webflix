# Webflix

Mini sign-in and registration flow inspired by Netflix (Still very much a WIP). 

## Personal objective

The purpose of this project for me was to re-familiarize myself with React after working in Vue for the last few years. Coming back to React has been like riding a bicycle and has been extremely fun and satisfying. I did not even realize how much I missed React until I started working on this project!

## Get started

To run locally:

1. ```bash
   git clone https://github.com/tiffbacher/Webflix.git
   ```
2. ```bash
   cd Webflix
   ```
3. ```bash
   npm install
   ```
4. ```bash
   npm run dev
   ```

## Behavior to expect

- User can input their email on `/` and click "Sign In"
- Clicking "Sign In" will validate email input
  - An empty or invalid email will result in error messages
- Successful email validation will take user to `/sign-in`
- User can input their email and password on `sign-in` and click "Sign In"
- Clicking "Sign In" will validate email and password inputs
  - An empty email or an invalid email will result in error messages
  - An empty password will result in an error message
- Submitting the form with "email@email.com" and "password" will successfully take the user to `/browse`
- Submitting the form with an incorrect email or password will result in error messages

## Screenshots

Page: `/`

![Screenshot 2023-11-20 at 9 33 25 AM](https://github.com/tiffbacher/Webflix/assets/56415813/111f1dca-9452-45b6-9c52-df15ece7ad49)

Page: `/sign-in`

![Screenshot 2023-11-20 at 9 34 29 AM](https://github.com/tiffbacher/Webflix/assets/56415813/c1452a80-e556-41a9-9093-00eb83b849df)

## TODO

- ADD TESTS! 🤪
- Update with Typescript
- Build registration flow
- Build mock landing page

## Technologies + Tools

- React + Vite
- React Router
- Tailwind
- Prettier + ESLint
