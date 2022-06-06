export interface SaveCovoiturage {
    covoitureur: string;
    start_location: string;
    end_location: string;
    start_date: Date;
    end_date: Date;
    aller: boolean;
    retour: boolean;
}