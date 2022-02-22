import React,{
    createContext, 
    useContext, 
    useState, 
    ReactNode,
} from "react";

import apiOpenWeather from "../services/apiOpenWeather";

export type ResponseOpenWeather = {
    dt: string,
    dt_txt: string,
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
    dt?: string;
    dt_txt?: string;
    temperature: string;
    maximum: string;
    minimum: string,
    weather: string; 
}

type WeatherContextData = {
    isLoading: boolean;
    weatherFiveDays: WeatherProps[];
    fetchCurrentWeatherCity: (lat: string, lon: string) => Promise<WeatherProps>;
    fetchWeekWeatherCity: (lat: string, lon: string) => Promise<void>;
}

type WeatherProviderProps = {
    children: ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextData);

function WeatherProvider({ children }: WeatherProviderProps){
    const [isLoading, setIsLoading] = useState(false);
    const [weatherFiveDays, setWeatherFiveDays] = useState<WeatherProps[]>([]);

    async function fetchCurrentWeatherCity(lat: string, lon: string){
        try {
            const response = await apiOpenWeather.get<ResponseOpenWeather>(`weather?lat=${lat}&lon=${lon}`);
                
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

    async function fetchWeekWeatherCity(lat: string, lon: string){
        try {
            setIsLoading(true);
            const response = await apiOpenWeather.get(`forecast?lat=${lat}&lon=${lon}`)    
            
            const dataFormatted: WeatherProps[] = response.data.list.map((data: ResponseOpenWeather)=>{
                return {
                    dt: data.dt,
                    dtText: data.dt_txt,
                    temperature: data.main.temp,
                    maximum: data.main.temp_max,
                    minimum: data.main.temp_min,
                    weather: data.weather[0].description, 
                }
            });

            setWeatherFiveDays(dataFormatted);
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
        }
        
    }

    return (
        <WeatherContext.Provider value={{
            weatherFiveDays,
            isLoading,
            fetchCurrentWeatherCity,
            fetchWeekWeatherCity
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