import axios from "axios"

import { addition } from "commands"

export const lambdaHandler = async () => {
    console.log("in hello handler")
    const add = addition(1, 2)
    console.log(add)
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response.data)
}
