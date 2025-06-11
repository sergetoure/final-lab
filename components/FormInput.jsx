const FormInput = ({
  id,
  label,
  type,
  value,
  isValid,
  errorMessage,
  onChange,
  pattern,
  list,
  required,
}) => {
  return (
    <div>
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      {id === "message" && (
        <textarea
          name={id}
          id={id}
          className="form__message"
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
        ></textarea>
      )}
      {id !== "message" && (
        <>
          <input
            type={type}
            name={id}
            id={id}
            className={`form__input`}
            value={value}
            onChange={onChange}
            required={required}
            pattern={pattern}
            list={list ? list.name : undefined}
          />
          {list && (
            <datalist id={list.name}>
              {list.options.map((item, index) => (
                <option key={index} value={item} />
              ))}
            </datalist>
          )}
        </>
      )}
      {!isValid && <p className="form__error-message">{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
