import {
    YouTubeSearchService,
    YOUTUBE_API_KEY,
    YOUTUBE_API_URL
} from './you-tube-search.service';
//injectable with benefits
// + have code that injectable the right constants for a given enviroment
// + replace the injected value easily at test-time
export const youTubeSearchInjectables: Array<any> = [
    {provide: YouTubeSearchService, useClass : YouTubeSearchService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];