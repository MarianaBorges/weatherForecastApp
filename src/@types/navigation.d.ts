export type DetailsNavigationProps = {
    city: string;
    lat: string;
    lon: string;
}

export declare global {
    namespace ReactNavigation{
        interface RootParamList{
            Home: undefined;
            Seach: undefined;
            Details: DetailsNavigationProps;
        }
    }
}