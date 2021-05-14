import React from "react";
import { Field } from "formik";

const FormikField = ({
  name,
  className,
  title,
  disabled,
  placeholder,
  autoComplete,
  type,
  textWhenDisabled,

  tooltip,
  tooltipTextWidth,
}) => (
  <div className={className}>
    <Field name={name}>
      {({ field, form: { touched, errors, values } }) => {
        function showFieldValue() {
          if (disabled) {
            return textWhenDisabled || field.value;
          }

          return field.value;
        }

        showFieldValue();

        return (
          <>
            {title && <label className="input-element-label">{title}</label>}
            <div className="pb-3 mb-0 w-100">
              <input
                {...field}
                autoComplete={"nope"}
                value={showFieldValue()}
                // autoComplete={autoComplete}
                disabled={disabled}
                // placeholder={placeholder}
                type={type ? type : "text"}
                className={`form-control h-32 ${
                  touched[field.name] && errors[field.name]
                    ? "border-danger"
                    : ""
                }`}
              />
              {touched[field.name] && errors[field.name] && (
                <div className="text-danger">{errors[field.name]}</div>
              )}
            </div>
          </>
        );
      }}
    </Field>
    {tooltip && (
      <div className="tooltip_container tooltip-input">
        <div
          className="tooltip_text"
          style={
            tooltipTextWidth ? { width: tooltipTextWidth } : { width: "auto" }
          }
        >
          {tooltip}
        </div>
      </div>
    )}
  </div>
);

export default FormikField;
