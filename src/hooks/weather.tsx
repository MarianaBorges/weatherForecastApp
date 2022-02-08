import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{
    createContext, 
    useContext, 
    useState, 
    ReactNode,
    useEffect
} from "react";

import apiOpenWeather from "../services/apiOpenWeather";

type ResponseOpenWeather = {
    main:{
        temp: string;
        temp_max: string;
        temp_min: string;
    },
    weather:[{
        description: string,
    }];
 };
 

export type WeatherProps = {
    temperature: string;
    maximum: string;
    minimum: string,
    weather: string; 
}

type WeatherContextData = {
    isLoading: boolean;
    fetchCurrentWeatherCity: (lat: string, lon: string) => Promise<WeatherProps>;
}

type WeatherProviderProps = {
    children: ReactNode;
}

const CITY_COLLECTION = '@RN_weatherForecastApp:cities';
const API_KEY = '1e860dca884ec42ba7e223f05b36ab39';

export const WeatherContext = createContext({} as WeatherContextData);

function WeatherProvider({ children }: WeatherProviderProps){
    const [isLoading, setIsLoading] = useState(false);

    async function fetchCurrentWeatherCity(lat: string, lon: string){
        try {
            const response = await apiOpenWeather.get<ResponseOpenWeather>(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`);
                
            return {
                temperature: response.data.main.temp,
                maximum: response.data.main.temp_max,
                minimum: response.data.main.temp_min,
                weather: response.data.weather[0].description, 
            }
            
        } catch (error) {
            throw new Error("Não foi possivel buscar os dados solicitados");
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <WeatherContext.Provider value={{
            isLoading,
            fetchCurrentWeatherCity
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

function useWeather(){
    const context = useContext(WeatherContext);

    return context;
}

export { useWeather, WeatherProvider}