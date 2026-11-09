const baseUrl = "http://localhost:3001";

const headers = {
  "content-type": "application/json",
};

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: headers,
})
  .then(handleServerResponse);
};

export const addItem = ({name, imageUrl, weather}) => {
    return fetch(`${baseUrl}/items`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ 
            name: name,
            imageUrl: imageUrl,
            weather: weather })
    })
    .then(handleServerResponse);
}

export const deleteItem = (itemID) => {
    return fetch(`${baseUrl}/items/${itemID}`, {
        method: 'DELETE',
        headers: headers,
    })
    .then(handleServerResponse);
}