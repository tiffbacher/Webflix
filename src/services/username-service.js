export default function getUsername(username) {
  const randomNum = Math.floor(Math.random() * 50);

  return new Promise((resolve, reject) => {
    if (username === "email@email.com" || randomNum < 25) {
      return setTimeout(() => resolve(true), 500);
    }

    setTimeout(
      () =>
        reject(
          new Error(
            "An account with that email address was not found. Please try again.",
          ),
        ),
      500,
    );
  });
}
