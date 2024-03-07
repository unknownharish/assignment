'use client'

import { useState } from "react"
import Button from "./button"
import { insertData, updateParticularData } from "../service/dbService"

export default function DialogeBox(props) {

    const [message, setmessage] = useState('')
    const handleMessage = (e) => setmessage(e.target.value)

    const updateTable = async () => {
        let tdata = await updateParticularData({ _id: props.updateId, message })
        props.setapiCount(prev => prev + 1)
        props.getData()
        props.setshowDialougeBox(false)
    }

    const inserData = async () => {
        let tdata = await insertData({ message })
        props.setapiCount(prev => prev + 1)
        props.getData()
        props.setshowDialougeBox(false)
    }


    const handleUpdate = async () => {
        if (props?.updateId) updateTable()
        else inserData()
    }


    return (
        <div className="bg-blue-100 h-[30vh] w-4/12 p-5 fixed rounded-lg flex flex-col items-center">

            <h4 className="text-2xl font-medium">Add Your Message here .! </h4>

            <input
                type="text"
                value={message}
                onChange={handleMessage}
                className="p-2 bg-slate-400 h-10 mt-4 "

            />

            <Button buttonText='update' className='mt-5' onClick={handleUpdate} />




        </div>
    )
}
