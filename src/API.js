export class API {
    static async get(endpoint) {
        const request = await fetch(`${endpoint}`, {
            headers: {'X-Api-Factory-Application-Id': process.env.VUE_APP_API_TOKEN}
        });
        return await request.json();
    }

    static async getCities() {
        return await this.get('/city');
    }

    static async getPoints() {
        return await this.get('/point');
    }
}
