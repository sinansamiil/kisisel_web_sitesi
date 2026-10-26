/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/cv/Sinan_Samil_Koylu_CV_TR.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Sinan_Samil_Koylu_CV_TR.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
      {
        source: '/cv/Sinan_Samil_Koylu_CV_EN.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Sinan_Samil_Koylu_CV_EN.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
