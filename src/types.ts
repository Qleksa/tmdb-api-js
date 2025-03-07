export interface ClientInterface {
    apiKey: string;
    baseUrl: string;
    language: string;
}

export interface TvClient extends ClientInterface {
    getTVDetails: (showId: number) => Promise<any>;
}

export interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

export interface TvResponse {
    adult: boolean;
    backdrop_path: string;
    created_by: CreatedBy[];
    id: number;
    name: string;
}

export interface TMDBClientInterface {
    tv: TvClient;
};
