import React, { useState } from "react";
import { Field } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import getYear from "date-fns/getYear";
import ru from "date-fns/locale/ru";

registerLocale("ru", { ...ru, options: { ...ru.options, weekStartsOn: 1 } });

const FormikDateSelectField = ({ name, className, title, disabled }) => {
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const [calandarMonth, setCalandarMonth] = useState(new Date().getMonth());
  return (
    <div className={className}>
      <Field name={name}>
        {({
          field,
          form: { touched, errors, setFieldValue, setTouched, values },
        }) => (
          // <div hidden={disabled && !field.value}>
          <>
            <label className="input-element-label">{title}</label>
            <div onBlur={() => setTouched({ [name]: true })}>
              <DatePicker
                locale="ru"
                dateFormat="dd.MM.yyyy"
                disabled={disabled}
                selected={field.value}
                onChange={(date) => setFieldValue(name, date)}
                className={`form-control w-100 d-block h-32 ${
                  touched[field.name] && errors[field.name]
                    ? "border-danger"
                    : ""
                }`}
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => {
                  return (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <select
                        style={{
                          marginRight: "16px",
                          height: "28px",
                          width: "50%",
                          border: "1px solid #aeaeae",
                          borderRadius: "4px",
                        }}
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        style={{
                          height: "28px",
                          width: "50%",
                          border: "1px solid #aeaeae",
                          borderRadius: "4px",
                        }}
                        value={calandarMonth}
                        onChange={({ target: { value } }) => {
                          changeMonth(months.indexOf(value));
                          setCalandarMonth(value);
                        }}
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }}
              />
            </div>

            {touched[field.name] && errors[field.name] && (
              <div className="text-danger">{errors[field.name]}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

export default FormikDateSelectField;
