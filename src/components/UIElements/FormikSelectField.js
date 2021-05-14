import React from "react";
import { Field } from "formik";
import { Select } from "./Select";

const FormikSelectField = ({
  name,
  className,
  title,
  options,
  bindWith,
  disabled,
}) => (
  <>
    <Field name={name}>
      {({ field, form: { touched, errors, setFieldValue, values } }) => {
        console.log("val", values);
        return (
          <div hidden={disabled && !field.value} className="input-group pb-3">
            <label className="input-element-label">{title}</label>

            <Select
              {...field}
              className={`${className} ${
                touched[field.name] && errors[field.name] ? "border-danger" : ""
              }`}
              disabled={disabled}
              options={options}
              onChange={(e) => {
                if (bindWith) {
                  bindWith.forEach((field) => {
                    setFieldValue(field, e);
                  });
                }
                setFieldValue(name, e);
              }}
            />
            {touched[field.name] && errors[field.name] && (
              <div className="text-danger">{errors[field.name]}</div>
            )}
          </div>
        );
      }}
    </Field>
  </>
);

export default FormikSelectField;
