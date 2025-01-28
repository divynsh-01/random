const URL = "https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// let promise = fetch(URL);
// console.log(promise);


const getFacts = async () =>{
    console.log('getting data...');
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    console.log(data);
    fact.innerText = data[0].text;
    fact.innerText = fact.innerText + "\n" + "\n" + data[1].text;
}

btn.addEventListener("click",getFacts);