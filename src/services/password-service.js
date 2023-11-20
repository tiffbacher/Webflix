export default function getPassword(password) {
  const randomNum = Math.floor(Math.random() * 50);
  console.log({ randomNum });

  return new Promise((resolve, reject) => {
    if (password === "password" || randomNum < 25) {
      return setTimeout(() => resolve(true), 500);
    }

    setTimeout(
      () => reject(new Error("Password is not valid. Please try again.")),
      500,
    );
  });
}
