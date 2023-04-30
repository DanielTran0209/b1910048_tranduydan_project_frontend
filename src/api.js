import axios from "axios";
const url = "/api/post";

export default class API{
    //lay tat ca
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }
    //lay theo id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //them
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }
    //sua
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }
    //xoa
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}