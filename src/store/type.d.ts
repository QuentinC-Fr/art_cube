interface ICity {
  cityName: string;
  mine: boolean;
}

type CityState = {
  cities: ICity[];
};

type CityAction = {
  type: string;
  cities: ICity[];
};

type DispatchType = (args: CityAction) => CityAction;
