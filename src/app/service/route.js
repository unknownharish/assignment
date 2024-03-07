import { NextResponse } from "next/server";
import { connect } from "../db/connect";
import dbModal from "../db/schema";


export async function GET(request) {
  try {
    connect()
    let data = await dbModal.find()
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'something went wrong' }, { status: 500 })

  }
}

export async function POST(request) {
  try {
    connect()
    let body = await request?.json()
    console.log('body is ', body)
    let newdata = await dbModal.insertMany([{ message: body?.message }])
    return NextResponse.json({ data: newdata[0] }, { status: 200 })
  } catch (error) {
    console.log('error is', error)
    return NextResponse.json({ error: 'something went wrong' }, { status: 500 })
  }
}
export async function PUT(request) {
  try {
    connect()
    let body = await request?.json()
    console.log('put body is ', body)
    let updatedata = await dbModal.findByIdAndUpdate(body._id, { message: body?.message }, { new: true })
    return NextResponse.json({ data: updatedata }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'something went wrong' }, { status: 500 })
  }
}