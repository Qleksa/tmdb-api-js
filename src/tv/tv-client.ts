import Client from "@/client";
import { TvClientInterface } from "@/types";
import type { TvResponse } from "@/tv/types";

class TVClient extends Client implements TvClientInterface {
    constructor(apiKey: string, baseUrl?: string, language?: string) {
        super(apiKey, baseUrl, language);
    }

    async getTVDetails(showId: number) : Promise<TvResponse> {
        const response = await this.get(`tv/${showId}`);

        return {
            adult: response.adult,
            backdropPath: response.backdrop_path,
            createdBy: response.created_by,
            episodeRunTime: response.episode_run_time,
            firstAirDate: response.first_air_date,
            genres: response.genres,
            homepage: response.homepage,
            id: response.id,
            inProduction: response.in_production,
            languages: response.languages,
            lastAirDate: response.last_air_date,
            lastEpisodeToAir: response.last_episode_to_air,
            name: response.name,
            nextEpisodeToAir: response.next_episode_to_air,
            networks: response.networks,
            numberOfEpisodes: response.number_of_episodes,
            numberOfSeasons: response.number_of_seasons,
            originCountry: response.origin_country,
            originalLanguage: response.original_language,
            originalName: response.original_name,
            overview: response.overview,
            popularity: response.popularity,
            posterPath: response.poster_path,
            productionCompanies: response.production_companies,
            productionCountries: response.production_countries,
            seasons: response.seasons,
            spokenLanguages: response.spoken_languages,
            status: response.status,
            tagline: response.tagline,
            type: response.type,
            voteAverage: response.vote_average,
            voteCount: response.vote_count
        }
    }
}

export default TVClient;
