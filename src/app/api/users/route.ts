import { NextResponse } from "next/server";

export async function GET() {
    const userData = {
        id : 1,
        firstName : 'John',
        lastName : 'Doe',
        email : 'jhondoe@example.com'
    };
    return NextResponse.json({data:userData});
    
}