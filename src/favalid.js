// import {tester, combineWithReducer, shape, minLength, maxLength, regexp, required} from "favalid";
//  import { string, object } from 'yup';
// import joi from 'joi-browser';
import {tester, combine} from 'favalid';

// const REQUIRED_EMAIL_MESSAGE = () => "required.";
// 
// const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// const REGEXP_MESSAGE = () => "invalid email.";
// 
// const EMAIL_MAX_LENGTH = 100;
// const MAX_LENGTH_MESSAGE = () => "exceeds 100 letters.";
// 
// const EMAIL_MIN_LENGTH = 10;
// const MIN_LENGTH_MESSAGE = () => "at least 10 letters.";
// 
// const emailValidator = (email) => {
//   const reducer = (prevError, currentError) => {
//     if (currentError.error) {
//       prevError.push(currentError);
//     }
//     return prevError;
//   };
// 
//   return combineWithReducer(
//     [
//       required(REQUIRED_EMAIL_MESSAGE),
//       minLength(EMAIL_MIN_LENGTH, MIN_LENGTH_MESSAGE),
//       maxLength(EMAIL_MAX_LENGTH, MAX_LENGTH_MESSAGE),
//       regexp(EMAIL_REGEXP, REGEXP_MESSAGE, {})
//     ],
//     reducer,
//     []
//   )(email);
// };
// 
// const validator = shape({
//   email: emailValidator,
//   password: combine(
//     minLength(10, () => "at least 10 letters."),
//     maxLength(16, () => "maximum: 16 letters.")
//   )
// });
// 
// 
// 
