
export default function GET(req: any, res: any) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/", });
  res.end();

}
