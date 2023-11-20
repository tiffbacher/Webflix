export default function getPassword(password) {
  return new Promise((resolve, reject) => {
    if (password === "password") {
      return setTimeout(() => resolve(true), 1000);
    }

    setTimeout(
      () => reject(new Error("Password is not valid. Please try again.")),
      1000,
    );
  });
}
