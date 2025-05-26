import { NextResponse } from "next/server";

// const apiKey = process.env.OPENPHONE_API_KEY;

export async function POST(request: Request) {
  const formData = await request.json();

  // If the hidden extra field is filled, likely a bot submission – bail out.
  if (formData.extra && formData.extra.length > 0) {
    return NextResponse.json("Bot detected", { status: 400 });
  }

  try {
    console.log("Sending email with form data:", formData);
    return NextResponse.json({ message: "Client information sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
