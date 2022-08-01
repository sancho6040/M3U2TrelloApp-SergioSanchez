const URL = 'http...'

const getAllCharacters = async (url)=>{
    try {
        const res = await axios.get(url)
        const data = res.data
        return data;
    }catch(error){
        console.log(error);
    }
}

export {
    getAllCharacters,
    URL
}