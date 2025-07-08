export interface CreditRating {
    Country: string;
    Date: string;
    Agency: string;
    Rating: string;
    Outlook: string;
    [key: string]: any; 
}

export interface GroupedCountryRating {
    Country: string;
    Icon: string;
    Ratings: CreditRating[];
}

export enum OutlookIcon {
    positive = 'i-garden:thumbs-up-fill-16',
    negative = 'i-garden:thumbs-down-fill-16',
    stable = 'i-garden:dash-fill-12'
}