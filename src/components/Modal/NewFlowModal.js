import React, { useState } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";

import Modal from "../UIElements/Modal";

import GoogleService from "../../assets/img/Google_Ads.svg";
import LinkedInService from "../../assets/img/linkedIn.svg";
import MyTargetService from "../../assets/img/myTarget.svg";
import TwitterService from "../../assets/img/twitter.svg";

import VkService from "../../assets/img/vk.svg";
import FbService from "../../assets/img/fb.svg";
import YandexDirectService from "../../assets/img/yandex-direct.svg";
import YandexMarketService from "../../assets/img/yandex-market.svg";
import CloseIcon from "../../assets/img/close.svg";
import FormikSelectField from "../UIElements/FormikSelectField";
import FormikField from "../UIElements/FormikField";
import FormikDateSelectField from "../UIElements/FormikDateSelectField";
import FormikSwitchField from "../UIElements/FormikSwitchField";

const NewFlowModal = ({ show, closeCallback, style }) => {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const showFirstStep = () => {
    setShowSettingsModal(false);
  };

  const showSecondStep = () => {
    setShowSettingsModal(true);
  };
  const newFlowValidationSchema = Yup.object().shape({
    accountId: Yup.object().required("Обязательное поле"),
    region: Yup.object().required("Обязательное поле"),
    site: Yup.object().required("Обязательное поле"),
    counter: Yup.string()
      .required("Обязательное поле")
      .max(60, "Не больше 60 символов")
      .min(2, "Не меньше 2 символов"),
    viewID: Yup.string().required("Обязательное поле"),
    setData: Yup.string().required("Обязательное поле"),
    currency: Yup.string().required("Обязательное поле"),
    date: Yup.string()
      .required("Обязательное поле")
      .nullable()
      .required("Обязательное поле"),
  });
  return (
    <Modal
      show={show}
      className={`p-4 col-12 col-lg-4`}
      closeCallback={closeCallback}
    >
      {!showSettingsModal ? (
        <div className="position-relative">
          <button
            className="position-absolute bg-transparent border-0"
            style={{
              top: "-24px",
              right: "-52px",
            }}
            onClick={closeCallback}
          >
            <img src={CloseIcon} alt="Close" />
          </button>
          <h2
            className="text-center font-weight-light"
            style={{ fontSize: "14px" }}
          >
            Выберите рекламный сервис
          </h2>
          <div className="d-flex flex-wrap p-2 justify-content-between">
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={GoogleService} alt="Google ads service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={LinkedInService} alt="LinkedIn service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={MyTargetService} alt="MyTarget service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={TwitterService} alt="Twitter service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={VkService} alt="Vk service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={FbService} alt="Fb service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={YandexDirectService} alt="YandexDirect service" />
            </div>
            <div className="bg-white shadow-sm rounded-sm py-3 px-4 w-48 mb-3 text-center">
              <img src={YandexMarketService} alt="YandexMarket service" />
            </div>
            <button
              className="btn btn-success d-block mx-auto mt-4 w-160 h-32"
              onClick={showSecondStep}
            >
              Далее
            </button>
          </div>
        </div>
      ) : (
        <div className="position-relative">
          <button
            className="position-absolute bg-transparent border-0"
            style={{
              top: "-24px",
              right: "-52px",
            }}
            onClick={closeCallback}
          >
            <img src={CloseIcon} alt="Close" />
          </button>
          <h2
            className="text-center font-weight-light mb-4"
            style={{ fontSize: "14px" }}
          >
            Настройка импорта расходов
          </h2>
          <Formik
            initialValues={{
              accountId: "",
              region: "",
              site: "",
              counter: "",
              viewID: "",
              setData: "",
              currency: "",
              date: "",
              autoUpdate: true,
            }}
            validationSchema={newFlowValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                console.log("values", values);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="mt-2">
                <FormikSelectField
                  name="accountId"
                  title="Укажите ID Аккаунта / логин"
                  className="w-100"
                  options={[
                    { label: "test1", value: "t1" },
                    { label: "test2", value: "t2" },
                    { label: "test3", value: "t3" },
                  ]}
                />
                <FormikSelectField
                  name="region"
                  title="Выберите регион"
                  className="w-100"
                  options={[
                    { label: "Беларусь", value: "by" },
                    { label: "Россия", value: "ru" },
                    { label: "Казахстан", value: "rz" },
                  ]}
                />
                <FormikSelectField
                  name="site"
                  title="Выберите сайт"
                  className="w-100"
                  options={[
                    { label: "test.by", value: "by" },
                    { label: "test.ru", value: "ru" },
                    { label: "test.kz", value: "rz" },
                  ]}
                />
                <FormikField
                  name="counter"
                  className="w-100 position-relative d-flex flex-column"
                  title="Укажите № счетчика"
                  placeholder="Укажите № счетчика"
                  type="text"
                />

                <FormikField
                  name="viewID"
                  className="w-100 position-relative d-flex flex-column"
                  title="Укажите ID Представления"
                  placeholder="Укажите ID Представления"
                  type="text"
                />

                <FormikField
                  name="setData"
                  className="w-100 position-relative d-flex flex-column"
                  title="Укажите набор данных"
                  placeholder="Укажите набор данных"
                  type="text"
                />

                <FormikField
                  name="currency"
                  className="w-100 position-relative d-flex flex-column"
                  title="Выберите валюту системы"
                  placeholder="Выберите валюту системы"
                  type="text"
                />
                <FormikDateSelectField
                  name="date"
                  className="w-100 position-relative d-flex flex-column pb-3"
                  title="Выберите период импорта"
                  type="text"
                />
                <FormikSwitchField
                  name="autoUpdate"
                  className="w-100 position-relative d-flex flex-column mt-3"
                  label="Автоматическое обновление"
                />
                <div className="d-flex mt-4 justify-content-center">
                  <button
                    className="btn btn-outline-success mr-3 h-32"
                    onClick={showFirstStep}
                  >
                    Назад
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-success h-32"
                  >
                    Создать поток в GA
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      )}
    </Modal>
  );
};

export default NewFlowModal;
