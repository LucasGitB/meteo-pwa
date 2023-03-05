

const weather = [
    {
        "id": 1,
        "city": "Miami",
        "records": [
            {
                "date": new Date(),
                "temperature": "24°",
                "state": "nuage"
            },
            {
                "date": new Date(Date.now() + 24 * 3600000),
                "temperature": "28°",
                "state": "nuage"
            },
            {
                "date": new Date(Date.now() + 48 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 72 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 96 * 3600000),
                "temperature": "24°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 120 * 3600000),
                "temperature": "18°",
                "state": "orage"
            },
            {
                "date": new Date(Date.now() + 144 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 168 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            }
        ]

    },

    {
        "id": 2,
        "city": "Paris",
        "records": [
            {
                "date": new Date(),
                "temperature": "11°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 24 * 3600000),
                "temperature": "11°",
                "state": "nuage"
            },
            {
                "date": new Date(Date.now() + 48 * 3600000),
                "temperature": "8°",
                "state": "nuage"
            },
            {
                "date": new Date(Date.now() + 72 * 3600000),
                "temperature": "7°",
                "state": "nuage"
            },
            {
                "date": new Date(Date.now() + 96 * 3600000),
                "temperature": "8°",
                "state": "pluie"
            },
            {
                "date": new Date(Date.now() + 120 * 3600000),
                "temperature": "7°",
                "state": "pluie"
            },
            {
                "date": new Date(Date.now() + 144 * 3600000),
                "temperature": "28°",
                "state": "pluie"
            },
            {
                "date": new Date(Date.now() + 168 * 3600000),
                "temperature": "11°",
                "state": "nuage"
            }
        ]

    },

    {
        "id": 3,
        "city": "Monaco",
        "records": [
            {
                "date": new Date(),
                "temperature": "24°",
                "state": "orage"
            },
            {
                "date": new Date(Date.now() + 24 * 3600000),
                "temperature": "28°",
                "state": "nuage"
            },
            {
                "date": new Date(Date.now() + 48 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 72 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 96 * 3600000),
                "temperature": "24°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 120 * 3600000),
                "temperature": "18°",
                "state": "orage"
            },
            {
                "date": new Date(Date.now() + 144 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            },
            {
                "date": new Date(Date.now() + 168 * 3600000),
                "temperature": "28°",
                "state": "soleil"
            }
        ]

    }
]

export { weather };