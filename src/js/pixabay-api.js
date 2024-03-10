const KEY = '42802195-5d597efdcf1a19b578d57b87f';
const BASE_URL = 'https://pixabay.com/api/';

export function pixabayApi(query) {
    const LINK = `${BASE_URL}?key=${KEY}&q=${query}`;
    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('IMG error');
            }
            return response.json();
        });
}