import axios from "axios";

const baseUrl = "https://crud.teamrabbil.com/api"
export async function readRequest (){
    let result = await axios.get(baseUrl + "/v1/ReadProduct")
    return result.data["data"]
}