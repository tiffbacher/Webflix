export default function getUsername(username) {
  return new Promise((resolve, reject) => {
    if (username === "email@email.com") {
      return setTimeout(() => resolve(true), 1000);
    }

    setTimeout(
      () =>
        reject(
          new Error(
            "An account with that email address was not found. Please try again.",
          ),
        ),
      1000,
    );
  });
}
