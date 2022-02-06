export type DetailsNavigationProps = {
    id: string;
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