import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";

const ContactMe = () => {
  const [formState, setState] = useState({
    isValid: false,
    formInputs: [
      {
        id: "name",
        label: "Name",
        value: "",
        isValid: false,
        type: "text",
        pattern: "^[a-zA-Z ]{2,200}$",
        errorMessage:
          "Name must be 2-200 characters long and contain only letters and spaces.",
        required: true,
        isTouched: false,
      },
      {
        id: "email",
        label: "Email",
        value: "",
        isValid: false,
        type: "email",
        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
        errorMessage: "Please enter a valid email address.",
        required: true,
        isTouched: false,
      },
      {
        id: "type",
        label: "Type of enquiry",
        value: "",
        isValid: false,
        type: "text",
        list: {
          name: "enquiryTypes",
          options: ["General Inquiry", "Technical Support", "Billing", "Other"],
        },
        errorMessage: "Type is required",
        required: true,
        isTouched: false,
      },
      {
        id: "message",
        label: "Your message",
        value: "",
        isValid: false,
        type: "text",
        pattern: "^[a-zA-Z0-9.,!?\\s]{2,200}$",
        errorMessage:
          "Message must be 2-200 characters long and can contain letters, numbers, and basic punctuation.",
        required: true,
        isTouched: false,
      },
    ],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formState.formInputs);
    // Reset form state after submission
    setState((prevState) => ({
      isValid: false,
      formInputs: prevState.formInputs.map((input) => ({
        ...input,
        value: "",
        isValid: false,
        isTouched: false,
      })),
    }));
  };
  //   const handleBlur = (e) => {
  //     const isValid = prevState.formInputs.every((input) => input.isValid);
  //     setState({
  //       ...prevState,
  //       isValid,
  //     });
  //   };
  const handleChange = (e) => {
    const { id, value, validity, validationMessage } = e.target;

    setState((prevState) => ({
      ...prevState,
      isValid: prevState.formInputs.every((input) => input.isValid),
      // Update the specific form input based on its index
      formInputs: prevState.formInputs.map((formInput, index) =>
        formInput.id === id
          ? {
              ...formInput,
              value,
              isValid: validity.valid,
              errorMessage: validationMessage,
              isTouched: true,
              // If the input is valid, clear the error message
            }
          : formInput
      ),
    }));
  };
  return (
    <>
      <section className="contact-me" id="contact-me">
        <h1
          style={{
            fontSize: "2rem",
            padding: "5rem 1rem 1rem 5rem",
            fontWeight: "bold",
          }}
        >
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="form">
          {formState.formInputs.map((input) => (
            <FormInput
              key={input.id}
              id={input.id}
              label={input.label}
              type={input.type}
              value={input.value}
              isValid={input.isValid}
              errorMessage={
                input.isTouched && input.value ? input.errorMessage : ""
              }
              onChange={handleChange}
              list={input.list}
              pattern={input.pattern}
              required={input.required}
            />
          ))}
          <SubmitBtn isSubmitting={!formState.isValid}>Submit</SubmitBtn>
        </form>
      </section>
    </>
  );
};

export default ContactMe;
