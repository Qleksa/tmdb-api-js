import Client from "@/client";
import TVClient from "@/tv/tv-client";

import type { TMDBClientInterface } from "@/types";

class TMDBClient extends Client implements TMDBClientInterface {
    tv: TVClient;

    constructor(apiKey: string, baseUrl?: string, language?: string) {
        super(apiKey, baseUrl, language);
        this.tv = new TVClient(apiKey, baseUrl, language);
    }
}

export type { TvResponse } from "@/types";
export default TMDBClient;
