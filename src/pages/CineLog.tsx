const CineLog = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-blue-600">CineLog</h1>

      <img
        src="https://via.placeholder.com/800x400?text=추천+기능"
        alt="영화 추천 기능"
        className="rounded-xl shadow"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">프로젝트 소개</h2>
        <p>
          개인 취향 기반의 영화 추천 및 기록 서비스입니다. TMDB API를 활용하여
          리뷰와 감상 기록 기능을 제공합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">사용된 기술</h2>
        <ul className="list-disc pl-5">
          <li>Vue, Django, Tailwind CSS</li>
          <li>TMDB API 연동</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">맡은 역할</h2>
        <ul className="list-disc pl-5">
          <li>Vue 기반 프론트엔드 구조 설계 및 UI 개발</li>
          <li>장르 기반 추천 알고리즘 적용</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">트러블슈팅</h2>
        <ul className="list-disc pl-5">
          <li>TMDB에서 비동기 응답 누락 → 응답 캐싱으로 해결</li>
          <li>추천 정확도 개선 → 사용자별 genre-score 모델 설계</li>
        </ul>
      </section>
    </div>
  );
};

export default CineLog;
