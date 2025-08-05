export const saveData = ({token}) => {
    try{
        const data = {token};
        localStorage.setItem('token', JSON.stringify(data));
        console.log("Data saved successfully");
    }
    catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
}

export const getData = () => {

    try {
        const data = localStorage.getItem('token');
        if (data) {
            const parsedData = JSON.parse(data);
            return parsedData.token;
        }
        return null;
    }
    catch (error) {
        console.error("Error retrieving data from localStorage:", error);
    }
}

export const removeItem = () => {

    try {
        const data = localStorage.removeItem('token');
    }
    catch (error) {
        console.error("Error deleting data from localStorage:", error);
    }
}