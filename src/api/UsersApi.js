import Api from "./Api";

export default {
    async list() {
        try {       
            return await Api.get('/api/users');
        } catch(error) {
            console.log('Cette erreur s\'est produite :', error);
            throw error;
        }
    },
    async getAndSaveUser() {
        try {       
            return await Api.get('/api/users/import?seed=finoanaITU&country=fr&count=500');
        } catch(error) {
            console.log('Cette erreur s\'est produite :', error);
            throw error;
        }
    }
}