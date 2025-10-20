import connectDB from "@/lib/mongodb"



export const POST = async (request: Request) => {
    await connectDB() 

    const body = await request.json() 
    const { password, email} = body
    const hashPassword = bcypt
}