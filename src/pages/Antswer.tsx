const Antswer = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-blue-600">Antswer</h1>

      <img
        src="https://via.placeholder.com/800x400?text=회의+화면"
        alt="회의 기능"
        className="rounded-xl shadow"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">프로젝트 소개</h2>
        <p>
          텍스트 중심의 실시간 회의 협업 툴입니다. 채팅, 투표, 주목 기능을
          활용해 원활한 화상회의 환경을 제공합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">사용된 기술</h2>
        <ul className="list-disc pl-5">
          <li>React, Zustand, Tailwind CSS</li>
          <li>WebSocket 기반 실시간 통신</li>
          <li>Chart.js를 통한 통계 시각화</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">맡은 역할</h2>
        <ul className="list-disc pl-5">
          <li>회의 UI 구현 (투표/주목/메모)</li>
          <li>WebSocket 연결 상태 관리 및 재시도 로직 작성</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">트러블슈팅</h2>
        <ul className="list-disc pl-5">
          <li>WebSocket 연결이 끊기는 문제 → 자동 재연결 로직 적용</li>
          <li>
            투표 동기화 지연 → 클라이언트 상태를 서버에서 명시적으로 강제 동기화
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Antswer;
