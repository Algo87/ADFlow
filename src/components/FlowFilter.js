import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import GoogleService from "../assets/img/Google_Ads.svg";
import LinkedInService from "../assets/img/linkedIn.svg";
import MyTargetService from "../assets/img/myTarget.svg";
import TwitterService from "../assets/img/twitter.svg";
import VkService from "../assets/img/vk.svg";
import FbService from "../assets/img/fb.svg";
import YandexDirectService from "../assets/img/yandex-direct.svg";
import YandexMarketService from "../assets/img/yandex-market.svg";
import { Select } from "./UIElements/Select";
import { getFlowFilterList } from "../redux/actions/flowListActions";

const FlowFilter = () => {
  const ImgService = ({ scrIcon }) => {
    return <img src={scrIcon} alt={" "} />;
  };
  const dispatch = useDispatch();
  const { flowsAll } = useSelector((state) => state.flowList);
  const [testFlow, setTestFlow] = useState(flowsAll);

  const serviceOptions = [
    { label: "Все", value: "" },
    { label: <ImgService scrIcon={GoogleService} />, value: "GoogleService" },
    {
      label: <ImgService scrIcon={LinkedInService} />,
      value: "LinkedInService",
    },
    {
      label: <ImgService scrIcon={MyTargetService} />,
      value: "MyTargetService",
    },
    { label: <ImgService scrIcon={TwitterService} />, value: "TwitterService" },
    { label: <ImgService scrIcon={VkService} />, value: "VkService" },
    { label: <ImgService scrIcon={FbService} />, value: "FbService" },
    {
      label: <ImgService scrIcon={YandexDirectService} />,
      value: "YandexDirectService",
    },
    {
      label: <ImgService scrIcon={YandexMarketService} />,
      value: "YandexMarketService",
    },
  ];

  const siteOptions = [
    { label: "Все", value: "" },
    { label: "test.by", value: "test.by" },
    { label: "abs.by", value: "abs.by" },
  ];
  const [serviceActiveOption, setServiceActiveOption] = useState(
    serviceOptions[0]
  );

  const [siteActiveOption, setSiteActiveOption] = useState(siteOptions[0]);

  const [searchInputValue, setSearchInputValue] = useState("");
  const filteredFlows = () => {
    return testFlow.filter(
      ({
        service,
        idAccount,
        region,
        site,
        counter,
        ViewID,
        currency,
        dataSet,
        specialist,
        dateCreated,
        dateUpdated,
      }) => {
        if (
          !searchInputValue &&
          !serviceActiveOption.value &&
          !siteActiveOption.value
        ) {
          return true;
        }

        const regex = new RegExp(searchInputValue, "i");

        return (
          (regex.test(site) ||
            regex.test(service) ||
            regex.test(idAccount) ||
            regex.test(counter) ||
            regex.test(ViewID) ||
            regex.test(currency) ||
            regex.test(dataSet) ||
            regex.test(specialist) ||
            regex.test(dateCreated) ||
            regex.test(dateUpdated) ||
            regex.test(region)) &&
          (!siteActiveOption.value || siteActiveOption.value === site) &&
          (!serviceActiveOption.value || serviceActiveOption.value === service)
        );
      }
    );
  };

  const searchSubmit = (e) => {
    e.preventDefault();

    if (
      !searchInputValue &&
      !serviceActiveOption.value &&
      !siteActiveOption.value
    ) {
      dispatch(getFlowFilterList(flowsAll));
    } else {
      dispatch(getFlowFilterList(filteredFlows()));
    }
  };
  return (
    <form
      className="d-flex mb-4 pb-3"
      onSubmit={(e) => {
        searchSubmit(e);
      }}
    >
      <div className="input-group">
        <label className="element-label d-block text-secondary">
          Укажите слова для поиска
        </label>
        <input
          placeholder="Поиск"
          type="text"
          className="form-control input-text form-element d-block w-100"
          placeholder="Поиск"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
      </div>
      <div className="input-group ml-3">
        <label className="element-label d-block text-secondary">
          Выберите сервис для поиска
        </label>
        <Select
          className="w-100"
          onChange={(e) => setServiceActiveOption(e)}
          value={serviceActiveOption}
          options={serviceOptions}
        />
      </div>
      <div className="input-group ml-3">
        <label className="element-label d-block text-secondary">
          Выберите сайт для поиска
        </label>
        <Select
          className="w-100"
          onChange={(e) => setSiteActiveOption(e)}
          value={siteActiveOption}
          options={siteOptions}
        />
      </div>
      <button className="btn-outline-success h-32 mt-auto mb-0 ml-3 w-25">
        Найти
      </button>
    </form>
  );
};
export default FlowFilter;
