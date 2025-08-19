export interface ClientInterface {
    apiKey: string;
    baseUrl: string;
    language: string;
}

export interface TvClientInterface extends ClientInterface {
    getTVDetails: (showId: number) => Promise<any>;
}

export interface TMDBClientInterface {
    tv: TvClientInterface;
};

export interface Response {
    
}
