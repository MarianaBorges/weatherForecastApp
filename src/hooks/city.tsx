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
    handleNewCity:(id: string) => Promise<void>;
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

    async function handleNewCity(id: string){
        const city = cities.find(city => city.id === id);

        if(city){
            const response = await AsyncStorage.getItem(CITY_COLLECTION);
            const data = response ? JSON.parse(response) : [];

            const verifyCity = data.find( (cityStorage: CityProps) => cityStorage.id === id )
            
            if(verifyCity){
                return Alert.alert('Oops!', 'Você já adicionou essa cidade!')
            }

            data.push(city);

            await AsyncStorage.setItem(CITY_COLLECTION, JSON.stringify(data));
            Alert.alert('Legal!',"Cidade adicionada a sua lista!");
        }else{
            Alert.alert('Oops!',"Algo deu errado");
        }
    }


    async function fechMyCities(){
        try {
            const response = await AsyncStorage.getItem(CITY_COLLECTION);
            const storageCities = response ? JSON.parse(response): [];
            //console.log('storageCities', storageCities )
            setCities(storageCities);
        } catch (error) {
            Alert.alert('Oops ocorreu um problema ao buscar as cidades.');
        }finally{
            setIsLoading(false);
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

            console.log('updateCities', updateCities );

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
            handleNewCity, 
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