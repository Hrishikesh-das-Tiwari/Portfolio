import { memo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import { Backdrop } from '@mui/material';
import { CircularProgress } from '@mui/material';
import useInput from '../hooks/use-input';
import Footer from './Footer';
import classes from './Css Modules/Contact.module.css';

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [disable, setDisable] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const form = useRef();
  const {
    value: enteredFName,
    valueIsValid: fNameIsValid,
    hasError: fNameHasError,
    valueInputHandler: fNameHandler,
    touchInputHandler: fNameTouchHandler,
    reset: resetFName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLName,
    valueIsValid: lNameIsValid,
    hasError: lNameHasError,
    valueInputHandler: lNameHandler,
    touchInputHandler: lNameTouchHandler,
    reset: resetLName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueInputHandler: emailHandler,
    touchInputHandler: emailTouchHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@') && value.includes('.'));

  const {
    value: enteredCollege,
    valueIsValid: collegeIsValid,
    hasError: collegeHasError,
    valueInputHandler: collegeHandler,
    touchInputHandler: collegeTouchHandler,
    reset: resetcollege,
  } = useInput((value) => value.trim() !== '');

  const formIsValid =
    fNameIsValid && lNameIsValid && emailIsValid && collegeIsValid;

  const closeSuccessAlert = () => {
    setShowSuccess(false);
  };
  const closeFailureAlert = () => {
    setShowFailure(false);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setDisable(true);
    setIsSend(true);
    emailjs
      .sendForm(
        'service_0d5qplg',
        'template_98098zg',
        form.current,
        'YD_wFNv9EPq4cy_UB'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(false);
          setShowSuccess(true);
        },
        (error) => {
          console.log('💥', error.text);
          setShowFailure(true);
        }
      );
    setDisable(false);
    resetFName();
    resetLName();
    resetEmail();
    resetcollege();
  };

  const fNameInputClasses = fNameHasError ? 'invalid' : '';
  const lNameInputClasses = lNameHasError ? ' invalid' : '';
  const emailInputClasses = emailHasError ? ' invalid' : '';
  const colInputClasses = collegeHasError ? ' invalid' : '';

  return (
    <div id={classes.contact} className="contact">
      <div className={classes.contact}>
        <div className={classes['contact-head']}>
          HEY! {'\n'}
          LET'S CHAT
        </div>
        <h2 className={classes.tellme}>Tell me more about you ✦</h2>
        <p className={classes.spam}>Don't worry. I won't spam you!</p>
        <br />
        <br />
        <br />
        <form ref={form} className="row form" onSubmit={formSubmitHandler}>
          <div
            className={`col ${classes.fn} mb-3 ${
              classes[`${fNameInputClasses}`]
            }`}
          >
            <input
              type="text"
              onChange={fNameHandler}
              onBlur={fNameTouchHandler}
              className={`${classes['form-control']} form-control`}
              placeholder="First name"
              name="to_fname"
              value={enteredFName}
              aria-label="First name"
            />
            {fNameHasError && (
              <p className={classes['error-text']}>
                First Name must not be Empty
              </p>
            )}
          </div>
          <div
            className={`col ${classes.ln} mb-3 ${
              classes[`${lNameInputClasses}`]
            }`}
          >
            <input
              type="text"
              onChange={lNameHandler}
              onBlur={lNameTouchHandler}
              className={`${classes['form-control']} form-control`}
              placeholder="Last name"
              name="to_lname"
              value={enteredLName}
              aria-label="Last name"
            />
            {lNameHasError && (
              <p className={classes['error-text']}>
                Last Name must not be Empty
              </p>
            )}
          </div>
          <div
            className={`${classes['form-floating']} form-floating mb-3 ${
              classes[`${emailInputClasses}`]
            }`}
          >
            <input
              type="email"
              onChange={emailHandler}
              onBlur={emailTouchHandler}
              id="floatingInput"
              className={`${classes['form-control']} form-control`}
              placeholder="name@example.com"
              name="to_email"
              value={enteredEmail}
            />
            {emailHasError && (
              <p className={classes['error-text']}>Email is Invalid</p>
            )}
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div
            className={`${classes['form-floating']} form-floating mb-3 ${
              classes[`${colInputClasses}`]
            }`}
          >
            <input
              type="text"
              onChange={collegeHandler}
              onBlur={collegeTouchHandler}
              id="floatingInput"
              className={`${classes['form-control']} form-control`}
              placeholder="Your College/Company name"
              name="college_name"
              value={enteredCollege}
            />
            {collegeHasError && (
              <p className={classes['error-text']}>
                College Name must not be Empty
              </p>
            )}
            <label htmlFor="floatingInput">Your College/Company name</label>
          </div>
          <button
            type="submit"
            className={classes['btn-send']}
            onClick={() => {
              setIsSend(true);
            }}
            disabled={!formIsValid || disable}
          >
            Send
          </button>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isSend}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Footer />
          {showSuccess && (
            <Alert
              className={classes.alert}
              variant="filled"
              onClose={closeSuccessAlert}
              severity="success"
            >
              Message sent successfully!
            </Alert>
          )}
          {showFailure && (
            <Alert
              className={classes.alert}
              variant="filled"
              severity="error"
              onClose={closeFailureAlert}
            >
              Something went wrong! Try Again!
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}

export default memo(Contact);
