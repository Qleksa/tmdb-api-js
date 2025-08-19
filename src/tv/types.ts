import type { Response } from "@/types";

export interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

interface LastEpisodeToAir {
    id: number;
    name: string;
    overview: string;
    voteAverage: number;
    voteCount: number;
    airDate: string;
    episodeNumber: number;
    productionCode: string;
    seasonNumber: number;
    showId: number;
    stillPath: string;
}

interface Season {
    airDate: string;
    episodeCount: number;
    id: number;
    name: string;
    overview: string;
    posterPath: string;
    seasnoNumber: number;
    voteAverage: number;
}

export interface TvResponse extends Response {
    adult: boolean;
    backdropPath: string;
    createdBy: CreatedBy[];
    episodeRunTime: number[];
    firstAirDate: string;
    genres: { id: number; name: string }[];
    homepage: string;
    id: number;
    inProduction: boolean;
    languages: string[];
    lastAirDate: string;
    lastEpisodeToAir: LastEpisodeToAir;
    name: string;
    nextEpisodeToAir: string;
    networks: { name: string; id: number; logoPath: string; originCountry: string }[];
    numberOfEpisodes: number;
    numberOfSeasons: number;
    originCountry: string[];
    originalLanguage: string;
    originalName: string;
    overview: string;
    popularity: number;
    posterPath: string;
    productionCompanies: { id: number; logoPath: string; name: string; originCountry: string }[];
    productionCountries: { iso31661: string; name: string }[];
    seasons: Season[];
    spokenLanguages: { englishName: string; iso6391: string; name: string }[];
    status: string;
    tagline: string;
    type: string;
    voteAverage: number;
    voteCount: number;
}
