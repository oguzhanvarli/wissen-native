import axios from "axios";

export default BaseService = {
    get : async(url) => {
        let response
        await axios.get(url).then(res => {
            response = res.data
            // console.log(res)
        })
        .catch(error => console.log('Error', error))
        return response
    }
}