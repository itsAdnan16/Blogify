import conf from "../config/config";
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.projectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.databseID,conf.collectionID,slug,{
                title,
                content,
                featuredImage,
                status,
                userId,
            });
        } catch (error) {
            throw error;
            
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.databseID,conf.collectionID,slug,{
                title,
                content,
                featuredImage,
                status,
            });
        } catch (error) {
            throw error;
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.databseID,conf.collectionID,slug);
            return true;
        } catch (error) {
            console.log('Delete Post Error',error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.databseID,conf.collectionID,slug)
        } catch (error) {
            throw new Error("getPost ",error);
            
        }
    }

    async getPosts(queries = [Query.equal('status','active')]){
        try {
            return await this.databases.listDocuments(
                conf.databseID,
                conf.collectionID,
                queries,
            )
        } catch (error) {
            throw new Error("getPosts ",error);
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Upload File Error',error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.bucketID,
                fileId
            )
            return true;
        } catch (error) {
            console.log('Delete File Error',error);
            return false;
        }
    }

    getFileView(fileId){
        return this.bucket.getFileView(
            conf.bucketID,
            fileId
        )
    }
    
}            
const service = new Service();

export default service;