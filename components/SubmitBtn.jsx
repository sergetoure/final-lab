const SubmitBtn = ({ isSubmitting, children }) => {
  return (
    <button type="submit" className="form__submit-btn" disabled={isSubmitting}>
      {children}
    </button>
  );
};

export default SubmitBtn;
