import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get('lang') === 'EN' ? 'EN' : 'TR';
  const filename = lang === 'EN' ? 'Sinan_Samil_Koylu_CV_EN.pdf' : 'Sinan_Samil_Koylu_CV_TR.pdf';
  const filePath = path.join(process.cwd(), 'public', 'cv', filename);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': fileBuffer.length.toString(),
      'Cache-Control': 'no-cache',
    },
  });
}
