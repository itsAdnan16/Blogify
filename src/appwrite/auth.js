import conf from "../config/config";
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;
    constructor() {
        // console.log(conf.appwriteUrl, conf.projectID);

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectID);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const useraccount = await this.account.create(ID.unique(), email, password, name)

            if (useraccount) {
                // call other method 
                return this.login({ email, password })
            } else {
                return useraccount;
            }

        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            // console.log("Fetched user:", user);
            return user;
        } catch (error) {
            throw new Error("User Not Logged In",error);
            
        }

    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }

}

const authService = new AuthService();

export default authService;