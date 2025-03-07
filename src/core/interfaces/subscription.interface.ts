export interface Subscription {
    _id: string;
    name: string;
    email: string;
    description: string;
    start: Date;
    end?: Date;
    payed: boolean;
    value: number;
}