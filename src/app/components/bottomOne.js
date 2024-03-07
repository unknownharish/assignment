'use clinet'

import { useEffect, useState } from "react"
import Button from "./button"
import DialogeBox from "./dialogeBox"
import { getAllData } from "../service/dbService"

export default function BottomOne(props) {

    const [showDialougeBox, setshowDialougeBox] = useState(false)
    const [apiCount, setapiCount] = useState(0)
    const [updateId, setupdateId] = useState('')


    const handleButtonClick = async (head) => {
        if (head?.type == 'update') setupdateId(head._id)
        else setupdateId('')
        setshowDialougeBox(!showDialougeBox)
    }

    const [tableData, settableData] = useState([])

    const getData = async () => {
        let tdata = await getAllData()
        settableData(tdata.data)
        setapiCount(prev => prev + 1)
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className="bg-green-200 min-h-80 w-full flex flex-col justify-center items-center" style={{ resize: "both", overflow: 'auto', minWidth: '1%' }} >

            <div className="w-full flex justify-end">
                <div className="p-2 m-2 bg-emerald-500">
                    <p >Api Called: {apiCount || 0}</p>
                </div>
            </div>

            <table className="table-auto">
                <thead className="w-7/12 bg-gray-500 text-white">
                    <tr className="">
                        <th>Idx</th>
                        <th className="">Message</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody >
                    {tableData?.map((tdata, idx) => {
                        return (
                            <tr key={idx} >
                                <td className="px-7"> {idx + 1}</td>
                                <td className="px-7">{tdata?.message} </td>
                                <td className="px-7 text-center"><Button buttonText='update' onClick={() => handleButtonClick({ type: 'update', _id: tdata._id })} /></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            {showDialougeBox &&
                <DialogeBox
                    setshowDialougeBox={setshowDialougeBox}
                    setapiCount={setapiCount}
                    settableData={settableData}
                    tableData={tableData}
                    updateId={updateId}
                    getData={getData}
                />}

            <div className="w-2/12 flex justify-center m-auto">

                <Button
                    buttonText={'add'}
                    onClick={() => handleButtonClick({ type: 'add' })}
                />
            </div>



        </div>
    )
}
