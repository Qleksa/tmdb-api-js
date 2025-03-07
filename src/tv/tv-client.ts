import Client from "@/client";
import type { TvClient as TvClientInterface, TvResponse } from "@/types";

class TVClient extends Client implements TvClientInterface {
    constructor(apiKey: string, baseUrl?: string, language?: string) {
        super(apiKey, baseUrl, language);
    }

    async getTVDetails(showId: number) : Promise<TvResponse> {
        const response = await this.get(`tv/${showId}`);

        return {
            adult: response.adult,
            backdrop_path: response.backdrop_path,
            created_by: response.created_by,
            id: response.id,
            name: response.name
        }
    }
}

export default TVClient;
