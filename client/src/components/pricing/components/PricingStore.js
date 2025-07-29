export const Plans = [
    {
        title: 'Basic',
        price: '$15',
        time: 'month',
        description: 'Perfect for individuals and small teams just getting started.',
        features: ['Up to 10 surveys per month', '100 responses per survey', 'Basic survey templates', 'Email support', 'Export to PDF & CSV', 'Basic analytics'],
        action: 'Start free trial'
    },
    {
        title: 'Professional',
        price: '$39',
        time: 'month',
        description: 'Ideal for growing businesses that need more power and features.',
        features: ['Unlimited surveys', '1000 responses per survey', 'Advanced survey templates', 'Priority email support', 'Advanced analytics', 'Custom branding', 'Team collaboration', 'API access'],
        action: 'Start free trial'
    },
    {
        title: 'Enterprise',
        price: '$99',
        time: 'month',
        description: 'For large organizations requiring advanced features and support.',
        features: ['Unlimited everything', 'Dedicated account manager', 'Custom integration support', 'Advanced security features', 'SLA guarantees', 'Training sessions', 'Custom contract terms', 'Phone support'],
        action: 'Contact sales'
    }
]

export const Compare_Plans =
{
    SurveyCreation: [
        {
            features: 'Custom survey themes',
            basic: true,
            professional: true,
            enterprise: true
        },
        {
            features: 'Question logic & branching',
            basic: false,
            professional: true,
            enterprise: true
        },
        {
            features: 'Custom branding',
            basic: false,
            professional: true,
            enterprise: true
        },
    ],
    DataCollection: [
        {
            features: 'Responses per survey',
            basic: 100,
            professional: 1000,
            enterprise: 'Unlimited'
        },
        {
            features: 'File uploads',
            basic: false,
            professional: true,
            enterprise: true
        },
        {
            features: 'Offline data collection',
            basic: false,
            professional: false,
            enterprise: true
        },
    ],
    AnalysisReporting: [
        {
            features: 'Basic analytics',
            basic: false,
            professional: true,
            enterprise: true
        },
        {
            features: 'Advanced analytics',
            basic: false,
            professional: true,
            enterprise: true
        },
        {
            features: 'Custom reports',
            basic: false,
            professional: false,
            enterprise: true
        },
    ]

}

export const TestimonialData = [
    {
        text: 'text1',
        image: 'https://randomuser.me/api/portraits/men/67.jpg',
        name: 'Michael Rodriguez',
        role: 'role1',
        starNumber: 5
    },
    {
        text: 'text1',
        image: 'https://randomuser.me/api/portraits/men/67.jpg',
        name: 'Michael Rodriguez',
        role: 'role1',
        starNumber: 5
    },
    {
        text: 'text1',
        image: 'https://randomuser.me/api/portraits/women.jpg',
        name: 'Sarah Johnson',
        role: 'role2',
        starNumber: 4
    },
    {
        text: 'text1',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'David Kim',
        role: 'role3',
        starNumber: 5
    }
]

export const QuestionsData = [
    {
        Q: 'What happens after my trial ends?',
        response: 'Yes'

    },
    {
        Q: 'Can I change plans at any time?',
        response: 'Yes'

    },
    {
        Q: 'Do you offer discounts for nonprofits?',
        response: 'Yes'

    },
    {
        Q: 'What payment methods do you accept?',
        response: 'Yes'

    },
    {
        Q: 'Is there a limit on survey responses?',
        response: 'Yes'

    }
]