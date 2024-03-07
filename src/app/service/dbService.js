const { apis } = require("../config/api")

const getAllData = async () => {
    // let data = await fetch('/service', {
    let data = await fetch(apis.crud.insertData, {
        method: 'GET',
    })
    data = await data.json()
    return data

}
const updateParticularData = async ({ _id, message }) => {
    let data = await fetch(apis.crud.insertData, {
        method: 'PUT',
        body: JSON.stringify({ _id, message })
    })

    data = await data.json();
    return data

}
const insertData = async ({ message }) => {
    let data = await fetch(apis.crud.insertData, {
        method: 'POST',
        body: JSON.stringify({ message })
    })

    data = await data.json();
    return data

}



module.exports = {
    getAllData,
    updateParticularData,
    insertData

}