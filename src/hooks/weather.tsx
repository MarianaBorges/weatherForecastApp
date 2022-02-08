import React,{
    createContext, 
    useContext, 
    useState, 
    ReactNode,
    useEffect
} from "react";
import apiOpenWeather from "../services/apiOpenWeather";

export type WeatherProps = {
    temperature: string;
    maximum: string;
    minimum: string,
    weather: string; 
}

type WeatherContextData = {
    fetchCurrentWeatherCity: (lat: string, lon: string) => Promise<WeatherProps>;
}

type WeatherProviderProps = {
    children: ReactNode;
}

const CITY_COLLECTION = '@RN_weatherForecastApp:cities';
const API_KEY = '1e860dca884ec42ba7e223f05b36ab39';

export const WeatherContext = createContext({} as WeatherContextData);

function WeatherProvider({ children }: WeatherProviderProps){

    async function fetchCurrentWeatherCity(lat: string, lon: string){
        try {
            const response = await apiOpenWeather.get(`weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`);

            return {
                temperature: response.data.main.temp,
                maximum: response.data.main.temp_max,
                minimum: response.data.main.temp_min,
                weather: response.data.weather[0].description, 
            };
        } catch (error) {
            throw new Error("Não foi possivel buscar os dados solicitados");
        }
    }

    return (
        <WeatherContext.Provider value={{
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