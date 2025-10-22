import { createUser } from "@/lib/services/user-service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const dataJson = await request.json();
  console.log(dataJson);
  const { email, password } = await dataJson;
  const result = await createUser(email, password);
  if (result) {
    return Response.json({
      success: true,
      message: "Created Successfully",
    });
  } else {
    return Response.json({
      success: false,
      message: "You are Failed",
    });
  }
}
