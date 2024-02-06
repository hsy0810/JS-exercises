export function parseJSON(str) {
    try {
        const data = JSON.parse(str);
        return {
            success:true,
            data:data
        };
    } catch (error) {
        return {
            success:false,
            error: error.message
        };
    }
}

const jsonString = '{key: "value"}';
const result = parseJSON(jsonString);
console.log(result);