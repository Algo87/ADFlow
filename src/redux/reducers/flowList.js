import { ACTION_TYPES } from "../actions/flowListActions";
import GoogleService from "../../assets/img/Google_Ads.svg";
import YandexDirectService from "../../assets/img/yandex-direct.svg";
import FbService from "../../assets/img/fb.svg";

const initialState = {
  inProcess: false,
  flowsAll: [
    {
      service: "GoogleService",
      serviceImg: GoogleService,
      idAccount: "РА_AdBroker (webcom-kz)",
      region: "Беларусь",
      site: "test.by",
      counter: "UA-12345-1",
      ViewID: "1212324313",
      currency: "BYN",
      dataSet: "1212324313",
      specialist: "Иванов Иван Иванович",
      dateCreated: "21-12-21",
      dateUpdated: "21-12-21",
      isOff: false,
    },
    {
      service: "YandexDirectService",
      serviceImg: YandexDirectService,
      idAccount: "РА_AdBroker (webcom-kz1)",
      region: "Беларусь",
      site: "abs.by",
      counter: "UA-12345-1",
      ViewID: "1212324313",
      currency: "USD",
      dataSet: "1212324313",
      specialist: "Петров Иван Иванович",
      dateCreated: "21-12-21",
      dateUpdated: "21-12-21",
      isOff: true,
    },
    {
      service: "FbService",
      serviceImg: FbService,
      idAccount: "РА_AdBroker (webcom-kz)2",
      region: "Беларусь",
      site: "abc.by",
      counter: "UA-12345-1",
      ViewID: "1212324313",
      currency: "RUB",
      dataSet: "1212324313",
      specialist: "Сидоров Иван Иванович",
      dateCreated: "21-12-21",
      dateUpdated: "21-12-21",
      isOff: false,
    },
  ],
  flowsFilter: [
    {
      service: "GoogleService",
      serviceImg: GoogleService,
      idAccount: "РА_AdBroker (webcom-kz)",
      region: "Беларусь",
      site: "test.by",
      counter: "UA-12345-1",
      ViewID: "1212324313",
      currency: "BYN",
      dataSet: "1212324313",
      specialist: "Иванов Иван Иванович",
      dateCreated: "21-12-21",
      dateUpdated: "21-12-21",
      isOff: false,
    },
    {
      service: "YandexDirectService",
      serviceImg: YandexDirectService,
      idAccount: "РА_AdBroker (webcom-kz1)",
      region: "Беларусь",
      site: "abs.by",
      counter: "UA-12345-1",
      ViewID: "1212324313",
      currency: "USD",
      dataSet: "1212324313",
      specialist: "Петров Иван Иванович",
      dateCreated: "21-12-21",
      dateUpdated: "21-12-21",
      isOff: true,
    },
    {
      service: "FbService",
      serviceImg: FbService,
      idAccount: "РА_AdBroker (webcom-kz)2",
      region: "Беларусь",
      site: "abc.by",
      counter: "UA-12345-1",
      ViewID: "1212324313",
      currency: "RUB",
      dataSet: "1212324313",
      specialist: "Сидоров Иван Иванович",
      dateCreated: "21-12-21",
      dateUpdated: "21-12-21",
      isOff: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FLOW_LIST_INPROGRESS:
      return {
        ...state,
        inProcess: action.payload,
      };
    case ACTION_TYPES.GET_FLOW_ALL_LIST:
      return {
        ...state,
        flowsAll: action.payload || initialState.flowsAll,
      };
    case ACTION_TYPES.GET_FLOW_FILTER_LIST:
      return {
        ...state,
        flowsFilter: action.payload || initialState.flowsFilter,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
