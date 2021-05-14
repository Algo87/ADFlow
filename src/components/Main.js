import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "../assets/img/add.svg";

import OffBtn from "../assets/img/componentImg/offIcon";
import FlowFilter from "./FlowFilter";
import StartModal from "./Modal/StartModal";
import NewFlowModal from "./Modal/NewFlowModal";

const Main = () => {
  const { flowsFilter } = useSelector((state) => state.flowList);
  const [showStartModal, setShowSartModal] = useState(true);
  const [showNewFlowModal, setShowNewFlowModal] = useState(false);

  const closeStartModal = () => {
    setShowSartModal(false);
    setShowNewFlowModal(true);
  };
  const closeNewFlowModal = () => {
    setShowNewFlowModal(false);
  };

  return (
    <div className="mx-5 px-2">
      <StartModal show={showStartModal} closeCallback={closeStartModal} />
      <NewFlowModal show={showNewFlowModal} closeCallback={closeNewFlowModal} />
      <h1 className="m-0 py-5 px-0">Управление Потоками</h1>

      <FlowFilter />
      <button className="btn btn-success text-nowrap d-block btn-with-img h-32">
        <img src={AddIcon} alt="add new flow" />
        Создать новый поток
      </button>
      <div>
        <table className="flow-table w-100">
          <thead>
            <tr>
              <th>Рекламный сервис</th>
              <th>ID Аккаунта / логин</th>
              <th>Регион</th>
              <th>Сайт</th>
              <th>№ счетчика</th>
              <th>ID Представления</th>
              <th>Валюта системы</th>
              <th>Набор данных</th>
              <th className="text-center">Специалист</th>
              <th>Дата создания</th>
              <th>Последнее обновление</th>
              <th>Показывать по</th>
            </tr>
          </thead>
          <tbody>
            {flowsFilter.map((flow) => {
              return (
                <tr
                  key={flow.idAccount}
                  className={`${flow.isOff ? "off-flow" : ""}`}
                >
                  <td>
                    <img src={flow.serviceImg} alt={flow.service} />
                  </td>
                  <td>{flow.idAccount}</td>
                  <td>{flow.region}</td>
                  <td>{flow.site}</td>
                  <td className="text-center">{flow.counter}</td>
                  <td>{flow.ViewID}</td>
                  <td className="text-center">{flow.currency}</td>
                  <td>{flow.dataSet}</td>
                  <td className="text-center" style={{ width: "120px" }}>
                    {flow.specialist}
                  </td>
                  <td className="text-center">{flow.dateCreated}</td>
                  <td className="text-center">{flow.dateUpdated}</td>
                  <td>
                    <button
                      className={`btn  d-flex align-items-center pr-3 pl-2 h-32 ${
                        flow.isOff ? "btn-warning-outline" : "btn-warning"
                      }`}
                    >
                      <OffBtn color={flow.isOff ? "#FF9800" : "#ffffff"} />
                      <span className="ml-2 d-block">Отключить</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {flowsFilter.length === 0 ? <>Нет данных </> : null}
      </div>
    </div>
  );
};

export default Main;
