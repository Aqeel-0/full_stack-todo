
async function start(){
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    console.log(response)

}

start()