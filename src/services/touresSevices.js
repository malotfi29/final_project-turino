import app from "./httpService";

export function getAllToures(){
    return app.get(`/tour`,{withCredentials:false}).then(data=>data.data)
}