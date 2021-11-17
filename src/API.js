const token = process.env.VUE_APP_API_TOKEN;
const url = process.env.VUE_APP_API_URL;

export class API {
    static async get(endpoint) {
        const request = await fetch(`${url}/api/db${endpoint}`, {
            headers: {'X-Api-Factory-Application-Id': token}
        });
        return await request.json();
    }

    static async getCities() {
        const result = await this.get('/city');
        return result.data;
    }

    static async getPoints() {
        const result = await this.get('/point');
        return result.data;
    }

    static async getCarCount() {
        const result = await this.get('/car?limit=9999&page=9999');
        return result.count;
    }

    static async getCars(carsPerPage, pageIndex = 0) {
        const result = await this.get(`/car?limit=${carsPerPage}&page=${pageIndex}`);
        return result.data;
    }

    static async getCarCategories() {
        const result = await this.get('/category');
        return result.data;
    }

    static async getCarById(id) {
        const result = await this.get(`/car/${id}`);
        return result.data;
    }

    static getCarThumbnail(path) {
        switch (path.charAt(0)) {
            case 'd':
                return path;
            case '/':
                return url + path;

        }
    }
}
