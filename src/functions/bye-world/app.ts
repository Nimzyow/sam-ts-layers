import axios from "axios"
import { subtraction } from "/opt/nodejs"

export const lambdaHandler = async () => {
    console.log("in bye handler")
    const sub = subtraction(1, 2)
    console.log(sub)
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/2")
    console.log(response.data)
}
