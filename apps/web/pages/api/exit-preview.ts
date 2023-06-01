// import {NextResponse} from "next/server";

export default function GET(req: any, res: any) {
  res.clearPreviewData();
  res.writeHead(307, { Location: "/", });
  res.end();
}

// export const GET = async (req: any)=> {
//   // res.setPreviewData({});
//   // res.writeHead(307, { Location: "/", });
//   // res.end();
//   // req.clearPreviewData()
//   return NextResponse.redirect(new URL("/", req.url))
// }
