module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/app/$1",
    },
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
};
