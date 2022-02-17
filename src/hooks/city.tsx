import React,{
    createContext, 
    useContext, 
    useState, 
    ReactNode,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type CityProps = {
    id: string;
    estate: string;
    country: string;
    city: string;
    latitude: string;
    longitude: string;
    isFavorite: boolean;
}

type CityContextData = {
    isLoading: boolean;
    cities: CityProps[];
    fechMyCities: () => Promise<void>;
    updatedFavoriteCity: (id: string) => Promise<void>;
}

type CityProviderProps = {
    children: ReactNode;
}

const CITY_COLLECTION = '@RN_weatherForecastApp:cities';

export const CityContext = createContext({} as CityContextData);

function CityProvider({ children }: CityProviderProps){
    const [cities, setCities] = useState<CityProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fechMyCities(){
        try {
            const response = await AsyncStorage.getItem(CITY_COLLECTION);
            const storageCities = response ? JSON.parse(response): [];
         
            setCities(storageCities);
        } catch (error) {
            Alert.alert('Oops ocorreu um problema ao buscar as cidades.');
        }
    }

    async function updatedFavoriteCity(id: string){
        try {
            const response = await AsyncStorage.getItem(CITY_COLLECTION);
            const storageCities = response ? JSON.parse(response): [];
            
            const updateCities: CityProps[] = storageCities.map((storageCity: CityProps) => {
                if(storageCity.id === id){
                    return {
                        id: storageCity.id,
                        estate: storageCity.estate,
                        country: storageCity.country,
                        city: storageCity.city,
                        latitude: storageCity.latitude,
                        longitude: storageCity.latitude,
                        isFavorite: !storageCity.isFavorite 
                    }
                }else{
                    return storageCity;
                }
            });
            await AsyncStorage.setItem(CITY_COLLECTION, JSON.stringify(updateCities));
            
        } catch (error) {
            Alert.alert('Oops ocorreu um problema ao favoritar.');
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <CityContext.Provider value={{
            isLoading, 
            cities,
            updatedFavoriteCity,
            fechMyCities
        }}>
            {children}
        </CityContext.Provider>
    )
}

function useCity(){
    const context = useContext(CityContext);

    return context;
}

export { useCity, CityProvider}