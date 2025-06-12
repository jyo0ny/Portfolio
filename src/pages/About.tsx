import { motion } from "framer-motion";
import myprofile from "../assets/myprofile.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-blue-100">서지윤은 누구인가요?</p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-25 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src={myprofile}
                    alt="서지윤 프로필"
                    className=" h-80 px-15 object-cover "
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                안녕하세요, 서지윤입니다!
              </h2>
              <div className="space-y-4 text-gray-600 text-lg break-keep">
                <p>
                  저는 사용자 경험을 최우선으로 생각하는 프론트엔드
                  개발자입니다. 편리하고 직관적인 인터페이스를 통해 사용자와
                  기술 사이의 다리 역할을 하고 있습니다.
                </p>
                <p>
                  기존의 웹 개발 경험을 바탕으로 React, Vue.js, TypeScript 등
                  최신 기술 스택을 활용하여 성능과 사용성을 모두 고려한 웹
                  애플리케이션을 개발합니다.
                </p>
                <p>
                  끊임없는 학습과 도전을 통해 더 나은 개발자가 되기 위해
                  노력하고 있으며, 팀워크와 소통을 중시하는 협업 지향적인
                  개발자입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My Journey
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 교육 배경 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="mr-3">🎓</span>
                  교육 & 학습
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-white/30 pl-4">
                    <div className="font-semibold">서울시립대학교 졸업</div>
                    <div className="text-blue-100 text-sm">
                      2019.03 - 2024.08
                    </div>
                    <div className="text-blue-100 mt-1">세무학 전공</div>
                    <div className="text-blue-100 mt-1">법규범제도학 전공</div>
                  </div>
                  <div className="border-l-4 border-white/30 pl-4">
                    <div className="font-semibold">
                      삼성 청년 SW•AI 아카데미
                    </div>
                    <div className="text-blue-100 text-sm">
                      2024.07 - 2025.06
                    </div>
                    {/* <div className="text-blue-100 mt-1">
                      React, JavaScript 심화 과정 수료
                    </div> */}
                  </div>
                  {/* <div className="border-l-4 border-white/30 pl-4">
                    <div className="font-semibold">지속적인 자기계발</div>
                    <div className="text-blue-100 text-sm">현재 진행형</div>
                    <div className="text-blue-100 mt-1">
                      온라인 강의, 기술 블로그, 컨퍼런스 참여
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>

            {/* 프로젝트 경험 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3">💼</span>
                  프로젝트 경험
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold text-gray-800">시시각각</div>
                    <div className="text-blue-600 text-sm">
                      에스원 기업연계 프로젝트
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      • CCTV를 활용한 실시간 이상행동 알리미 서비스
                      <br />
                      • ????
                      <br />• ????
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <div className="font-semibold text-gray-800">소상고민</div>
                    <div className="text-blue-600 text-sm">
                      SSAFY 특화 프로젝트
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      • POS 데이터를 활용한
                      <br />
                      • ????
                      <br />• ????
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <div className="font-semibold text-gray-800">Antswer</div>
                    <div className="text-blue-600 text-sm">
                      SSAFY 공통 프로젝트
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      • 텍스트 중심 실시간 회의 협업 툴
                      <br />
                      • ????
                      <br />• ????
                    </div>
                  </div>
                  <div className="border-l-4 border-blue-100 pl-4">
                    <div className="font-semibold text-gray-800">CineLog</div>
                    <div className="text-blue-600 text-sm">
                      SSAFY 관통 프로젝트
                    </div>
                    <div className="text-gray-600 text-sm mt-1">
                      • 영화 추천 서비스
                      <br />
                      • ????
                      <br />• ????
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              기술 스택 & 역량
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">💻</span>
                Frontend
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>React.js</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>TypeScript</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vue.js</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tailwind CSS</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🛠</span>
                Tools & Others
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Git</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Figma</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Jira</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Django</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🎨</span>
                Soft Skills
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>문제 해결 능력</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>팀워크 & 소통</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>빠른 학습 능력</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>사용자 중심 사고</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>지속적인 성장</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
