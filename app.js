// #1
// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
// (Make sure you get back JSON by including the json query key, specific to this API.
let favNumber = 13;
const base_url = 'http://numbersapi.com'

axios.get(`${base_url}/${favNumber}?json`)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

// #2
let favNumbers = [1,2,3]
axios.get(`${base_url}/${favNumbers}?json`)
    .then(numbers => {
        for (let i = 1; i <= favNumbers.length; i++) {
            $("body").append(`<p>${numbers.data[i]}</p>`)            
        }        
    }) 
    .catch(err => {console.log(err)})

// #3
let fourfacts = [];
for (let i = 1; i < 5 ; i++) {
    fourfacts.push(
        axios.get(`${base_url}/${favNumber}?json`)
    );
}
// Promise.all(fourfacts)
//     .then(data => {
//         for (let i = 0; i <= fourfacts.length; i++){
//             $("body").append(`<p>${data[i].data.text}</p>`) 
//             console.log(data[i].data.text)
//         }        
//     })
//     .catch(err => {console.log(err)})

// Refactor by using forEach
Promise.all(fourfacts)
    .then(data => (
        data.forEach(data => 
            $("body").append(`<p>${data.data.text}</p>`))            
    ))
    .catch(err => {console.log(err)})

