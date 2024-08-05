import {defineConfig} from 'cypress'

export default defineConfig({
    e2e: {
        specPattern: "cypress/e2e/*.{cy,spec}.{js,ts}"
    },
    reporter: 'mochawesome',
    reporterOptions: {
        overwrite: false,
        html: false,
        json: true
    },
})