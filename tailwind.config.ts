/** @type {import('tailwindcss').Config} */
export default {
  // v4에서는 content 설정만 필요할 수 있습니다
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // 나머지 설정은 CSS의 @theme에서 처리됩니다
};
