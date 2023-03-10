// pretend this came from a server instead of me just declaring it here.
const responseFromServer = `{
    "name": "Bogart",
    "age": 5,
    "breed": "askal",
    "location": {
        "city": "Calapan",
        "province": "Oriental Mindoro",
        "region": "MIMAROPA"
    } 
}`;

console.log(responseFromServer);

const responseObject = JSON.parse(responseFromServer);

console.log(responseObject);
console.log(responseObject.location.city);
console.log(responseObject.name);

console.log(JSON.stringify(responseFromServer, null, 4));