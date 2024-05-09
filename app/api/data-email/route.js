import { NextResponse } from "next/server";

// Define an in-memory storage for form data
const formDataMap = new Map();
console.log(formDataMap)

// GET method to retrieve form data
export async function GET(request) {
  try {
    // Retrieve the stored form data
    const formData = formDataMap.get(request.url);

    // Return the stored form data
    return NextResponse.json({ ok: true, data: formData }, { status: 200 });
  } catch (error) {
    console.error('Error in GET method:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}

// POST method to receive form data
export async function POST(request) {
  try {
    const body = await request.json();

    // Store the form data
    formDataMap.set(request.url, body);

    // Return a success response
    return NextResponse.json({ ok: true, data: body }, { status: 200 });
  } catch (error) {
    console.error('Error in POST method:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
