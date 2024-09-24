const URL = 'http://dummyjson.com/products';


async function chmarApi(){
    fetch(URL);
    const resp = await fetch(URL)
    if (resp.status === 200) {
        const obj = await resp.json();
        console.log(obj);
    }
}

chmarApi();