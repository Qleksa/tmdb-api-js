import { TMDB_BASE_API_URL, TMDB_LANGUAGE } from "./constants";

import type { ClientInterface } from "@/types";

class Client implements ClientInterface {
    language: string;
    apiKey: string;
    baseUrl: string;

    constructor(apiKey: string, baseUrl?: string, language?: string) {
        this.language = language ?? TMDB_LANGUAGE;
        this.apiKey = apiKey;
        this.baseUrl = baseUrl ?? TMDB_BASE_API_URL;
    }

    async get<T>(path: string) : Promise<any> {
        const response = await fetch(`${this.baseUrl}/${path}?language=${this.language}`, {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
                "Content-Type": "application/json"
            }
        });
        return response.json();
    }
}

export default Client;
