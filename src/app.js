const express = require("express")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


const url = 'http://20.244.56.144/train/register';
 
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
// });

async function getData() {
    const url = 'http://20.244.56.144/numbers/primes';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  } 
  
getData();


app.listen(3001,()=>{
    console.log("port started");
})