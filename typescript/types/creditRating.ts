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
    positive = 'i-radix-icons:triangle-up',
    negative = 'i-radix-icons:triangle-down',
    stable = 'i-radix-icons:divider-horizontal'
}
