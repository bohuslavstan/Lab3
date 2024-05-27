const testData = {
    testName: "Правила Дорожнього Руху",
    questions: [
        {
            question: "На який колір можна переходити дорогу?",
            answers: [
                {
                    answer: "Зелений",
                    isCorrect: true,
                },
                {
                    answer: "Жовтий після червоного",
                    isCorrect: false,
                },
                {
                    answer: "Жовтий після зеленого",
                    isCorrect: false,
                },
                {
                    answer: "Червоний",
                    isCorrect: false,
                }
            ],
            is_selected: true,
        },
        {
            question: "По якій смузі рухаються автомобілі в Україні?",
            answers: [
                {
                    answer: "Ліва",
                    isCorrect: false,
                },
                {
                    answer: "Права",
                    isCorrect: true,
                },
                {
                    answer: "Середня",
                    isCorrect: false,
                }
            ],
            is_selected: true,
        }
    ]
};

export default testData;
