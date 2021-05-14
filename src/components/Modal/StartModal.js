import React from "react";

import Modal from "../UIElements/Modal";

const StartModal = ({ show, className = "", closeCallback, style }) => {
  return (
    <Modal
      show={show}
      closeCallback={closeCallback}
      style={style}
      className={`${className} p-4 shadow col-12 col-lg-5`}
    >
      <h2
        className="p-3 text-center font-weight-normal"
        style={{ fontSize: "24px" }}
      >
        Добро пожаловать в ADFlow!
      </h2>
      <p className="p-2 text-center font-weight-light mb-0">
        С помощью сервиса вы сможете получить информацию о расходах любой вашей
        рекламной кампании в любом рекламном сервисе и импортировать их в Google
        Analitics. Таким образом вы сможете тщательнее отслеживать и планировать
        ваши маркетинговые кампании.
      </p>
      <p className="p-3 text-center mb-0">
        Импорт расходов осуществляется всего в 2 шага
      </p>
      <button
        className="btn btn-success mx-auto mt-3 mb-2 d-block w-160 h-32"
        onClick={closeCallback}
      >
        Начать
      </button>
    </Modal>
  );
};

export default StartModal;
