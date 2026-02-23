import app from "./httpService";

export function getAllToures(){
    return app.get(`/tour`).then(data=>data.data)
}