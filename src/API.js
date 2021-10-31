export class API {
    static async getCities() {
        const request = await fetch("https://api-factory.simbirsoft1.com/api/db/city", {
            headers: {'X-Api-Factory-Application-Id': "5e25c641099b810b946c5d5b"}
        });
        return await request.json();
    }
    static async getPoints() {
        const request = await fetch("https://api-factory.simbirsoft1.com/api/db/point", {
            headers: {'X-Api-Factory-Application-Id': "5e25c641099b810b946c5d5b"}
        });
        return await request.json();
    }
}
