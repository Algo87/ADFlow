import React from "react";
import { Field } from "formik";

const FormikSwitchField = ({ name, className, label, disabled, show }) => {
  return (
    <div className={className}>
      <Field name={name}>
        {({ field, form: { touched, errors, setFieldValue } }) => {
          return (
            <div hidden={disabled && !show}>
              <div
                className="d-flex flex-row switched-text"
                onClick={() =>
                  disabled ? null : setFieldValue(name, !field.value)
                }
              >
                <div
                  className={`switch_btn my-auto col-auto px-0 mr-2 ${
                    field.value && "active"
                  }`}
                >
                  <div className={`switch_circle ${field.value && "active"}`} />
                </div>
                {label}
              </div>
              {touched[field.name] && errors[field.name] && (
                <div className="text-danger">{errors[field.name]}</div>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default FormikSwitchField;
