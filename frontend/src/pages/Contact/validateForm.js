export default function validateForm({ email, message }) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    return "Email required";
  } else if (regex.test(email.toLocalLowerCase)) {
    return "Email address is invalid";
  }
  if (!message) {
    return "Message is required";
  } else if (message.length < 0) {
    return "Please write a message";
  }

  return null;
}
