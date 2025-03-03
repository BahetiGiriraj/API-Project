let h1 = document.querySelector("h1");
let catsUrl = "https://catfact.ninja/fact";

async function getfacts() {
    try{
        let res = await axios.get(catsUrl);
        // console.log(res);
        // console.log(res.data.fact);
        return res.data.fact;

    }
    catch(e){
        console.log("error -" , e)
        return "No fact found "
    }
}

let btn = document.querySelector(".btncat");
btn.addEventListener("click" , async() =>{
    let fact = await getfacts();
    let h1 = document.querySelector(" #cats");
    h1.innerText = fact
    
})

let dogUrl = "https://dog.ceo/api/breeds/image/random"
async function getimg() {
    try{
        let pic = await axios.get(dogUrl);
        // console(pic.data.message)
        return pic.data.message
    }
    catch(err){
        console.log(err)
    }
}

let but = document.querySelector(" .btndog");
but.addEventListener("click" , async () => {
    let image = await getimg();
    // console.log(image)
    let dog = document.querySelector(" #Dogs")
    dog.setAttribute("src" , image);
})

let jokesUrl = "https://official-joke-api.appspot.com/random_joke";
async function getJokes() {
    try{
        let joke = await axios.get(jokesUrl);
        document.querySelector(".set").innerText =  joke.data.setup; 

        document.querySelector(".line").innerText =  joke.data.punchline;
    }
    catch(err){
        console.log(err)
    }
    
}