import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { ConnectDB } from "../../../lib/config/db";
import BlogModel from "../../../lib/config/models/BlogModel";

// through this function it's connect to the DataBase(Mongo DB);
const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

// we can get all content and images through images
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if(blogId){
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  }else{
    const blogs = await BlogModel.find({})
  return NextResponse.json({blogs});
  }
  

  // return NextResponse.json({ msg: "API working" });
}

// In this method we can store the data into the DataBase.
export async function POST(request) {
  // We get the data as a (Form Data)
  const formData = await request.formData();

  // We can get the (Date and Current Time)
  const timestamp = Date.now();

  const image = formData.get('image');
  // We should get the Image as (Byte Data)
  const imageByteData = await image.arrayBuffer();
  // through this logic we can store the image in a (Public Folder);
  const buffer = Buffer.from(imageByteData);
  const path = `./public/uploads/${timestamp}_${image.name}`;
  await writeFile(path, buffer);

  const imgUrl = `/uploads/${timestamp}_${image.name}`;
 
  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    imageUrl: `${imgUrl}`, // Assuming this is the correct field for the image URL
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`, // Assuming this is correct
  }

  // Save to MongoDB
  await BlogModel.create(blogData);
  console.log("Blog Saved");

  console.log(imgUrl);
  // return NextResponse.json(imgUrl);
  return NextResponse.json({ success: true, msg: "Blog Added" });
}
