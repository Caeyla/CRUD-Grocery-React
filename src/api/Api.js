import {getApiUrl} from './Config/Config';
export default async function apiCall(endpoint, method, data) {
    try {
        const response = await fetch(getApiUrl()+endpoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data ? JSON.stringify(data) : undefined
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(`API Error: ${error.message}`);
        throw error;
    }
}
