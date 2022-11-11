import axios from "axios"

export const lambdaHandler = async () => {
    console.log("in hello handler")
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/2")
    console.log(response.data)
}
