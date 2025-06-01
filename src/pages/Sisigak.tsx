const Sisigak = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-blue-600">시시각각</h1>

      <img
        src="https://via.placeholder.com/800x400?text=CCTV+이상행동"
        alt="이상행동 알림"
        className="rounded-xl shadow"
      />

      <section>
        <h2 className="text-2xl font-semibold mb-2">프로젝트 소개</h2>
        <p>
          CCTV 기반 실시간 이상행동 알림 서비스로, 에스원 기업 연계 프로젝트로
          진행되었습니다. 화재, 절도 등 이상행동을 자동으로 탐지하고 알립니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">사용된 기술</h2>
        <ul className="list-disc pl-5">
          <li>React, Zustand, Tailwind CSS</li>
          <li>YOLOv8 기반 객체 탐지, VLM 기반 자막 분석</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">맡은 역할</h2>
        <ul className="list-disc pl-5">
          <li>실시간 알림 UI 구현</li>
          <li>일별/유형별 이상행동 캘린더 시각화</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">트러블슈팅</h2>
        <ul className="list-disc pl-5">
          <li>알림 잔상 이슈 → Zustand 상태 초기화 방식 변경</li>
          <li>동영상 썸네일 생성 문제 → FFmpeg 백엔드와 연동 처리</li>
        </ul>
      </section>
    </div>
  );
};

export default Sisigak;
