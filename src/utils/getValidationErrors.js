import { ValidationError } from "yup";


export default function getVaidationErrors(err) {
  const validationErrors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}