const Sosangomin = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-blue-600">소상고민</h1>

      <img
        src="https://via.placeholder.com/800x400?text=리뷰+분석+차트"
        alt="경쟁 분석"
        className="rounded-xl shadow"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">프로젝트 소개</h2>
        <p>
          POS 데이터를 기반으로 소상공인을 위한 맞춤형 매장 분석 서비스입니다.
          경쟁사 비교, 리뷰 분석, 인사이트 리포트를 제공합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">사용된 기술</h2>
        <ul className="list-disc pl-5">
          <li>React, Zustand, Tailwind CSS</li>
          <li>Chart.js, WordCloud, KakaoMap API</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">맡은 역할</h2>
        <ul className="list-disc pl-5">
          <li>대시보드 UI, 리뷰 긍/부정 워드클라우드</li>
          <li>경쟁사 비교 및 필터링 기능 개발</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">트러블슈팅</h2>
        <ul className="list-disc pl-5">
          <li>Zustand 상태 반영 지연 → force 업데이트 로직 적용</li>
          <li>Chart.js 리렌더 이슈 → useEffect + key 변경으로 해결</li>
        </ul>
      </section>
    </div>
  );
};

export default Sosangomin;
