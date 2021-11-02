const token = process.env.VUE_APP_API_TOKEN;
const url = process.env.VUE_APP_API_URL;

export class API {
    static async get(endpoint) {
        const request = await fetch(`${url}${endpoint}`, {
            headers: {'X-Api-Factory-Application-Id': token}
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
