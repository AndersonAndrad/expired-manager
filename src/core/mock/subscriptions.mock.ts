import {Subscription} from "@/core/interfaces/subscription.interface";

export const subscriptions: Subscription[] = [
    {
        _id: '1',
        name: "John Doe",
        email: "john.doe@example.com",
        description: "Monthly subscription for premium content.",
        start: new Date("2025-01-01"),
        end: new Date("2025-12-31"),
        payed: true,
        value: 120.00
    },
    {
        _id: '2',
        name: "Jane Smith",
        email: "jane.smith@example.com",
        description: "Yearly subscription for the online course.",
        start: new Date("2024-05-15"),
        payed: false,
        value: 200.00
    },
    {
        _id: '3',
        name: "Robert Brown",
        email: "robert.brown@example.com",
        description: "One-time subscription for event access.",
        start: new Date("2024-11-01"),
        end: new Date("2024-11-03"),
        payed: true,
        value: 50.00
    },
    {
        _id: '4',
        name: "Emily Davis",
        email: "emily.davis@example.com",
        description: "Quarterly subscription for software updates.",
        start: new Date("2025-03-01"),
        end: new Date("2025-05-31"),
        payed: true,
        value: 75.00
    }
];
