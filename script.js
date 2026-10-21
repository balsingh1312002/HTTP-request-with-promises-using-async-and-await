//Make an HTTP request to the API.
const data=fetch("https://jsonplaceholder.typicode.com/users");
console.log(data);
data.then((data)=>console.log(data)).catch((error)=>console.log(error));

async function fetchdata() {
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    //Handle the response properly (convert to JSON)
    const data= response.json();
    //Log the data (array of user objects) in the console.
    console.log(data);
    data.then((data)=>console.log(data));
}
fetchdata();