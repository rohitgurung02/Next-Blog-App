import { NextResponse } from "next/server";
import { ConnectDB } from "../../../lib/config/db";
import EmailModel from "../../../lib/config/models/EmailModel";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function POST(request) {
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get('email')}`,
  }
  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: "Email Subscribed" });
}
