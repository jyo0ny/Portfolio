import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce 플랫폼",
      category: "web",
      description:
        "React와 Node.js로 구축한 대규모 쇼핑몰 플랫폼. 실시간 주문 관리와 결제 시스템을 포함합니다.",
      image: "https://via.placeholder.com/400x250?text=E-commerce+Platform",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "부동산 관리 앱",
      category: "mobile",
      description:
        "React Native로 개발한 부동산 매물 관리 모바일 애플리케이션. 지도 연동과 필터링 기능이 특징입니다.",
      image: "https://via.placeholder.com/400x250?text=Real+Estate+App",
      tags: ["React Native", "Firebase", "Google Maps"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "기업 대시보드",
      category: "web",
      description:
        "Vue.js로 구현한 데이터 시각화 대시보드. 실시간 차트와 리포트 생성 기능을 제공합니다.",
      image: "https://via.placeholder.com/400x250?text=Business+Dashboard",
      tags: ["Vue.js", "Chart.js", "REST API"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "포트폴리오 웹사이트",
      category: "design",
      description:
        "개인 브랜딩을 위한 포트폴리오 웹사이트. 애니메이션과 반응형 디자인에 중점을 두었습니다.",
      image: "https://via.placeholder.com/400x250?text=Portfolio+Website",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "팀 협업 도구",
      category: "web",
      description:
        "TypeScript와 React로 개발한 팀 프로젝트 관리 도구. 실시간 채팅과 태스크 관리 기능을 포함합니다.",
      image: "https://via.placeholder.com/400x250?text=Team+Collaboration+Tool",
      tags: ["TypeScript", "React", "Socket.io", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "헬스케어 앱 UI",
      category: "design",
      description:
        "Figma로 디자인한 헬스케어 모바일 앱 UI/UX. 사용자 친화적인 인터페이스에 중점을 두었습니다.",
      image: "https://via.placeholder.com/400x250?text=Healthcare+App+UI",
      tags: ["Figma", "UI/UX Design", "Prototyping"],
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { key: "all", label: "전체" },
    { key: "web", label: "웹 개발" },
    { key: "mobile", label: "모바일" },
    { key: "design", label: "디자인" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-blue-100">
              제가 작업한 프로젝트들을 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex gap-4 bg-gray-100 p-2 rounded-full">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === filter.key
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <a
                        href={project.link}
                        className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              프로젝트 성과
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">완료된 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">만족한 클라이언트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">18+</div>
              <div className="text-gray-600">개발 경험 (월)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">프로젝트 성공률</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              다음 프로젝트는 여러분과 함께!
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              새로운 프로젝트에 대한 아이디어가 있으시나요? 함께 논의해보세요.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              프로젝트 상담하기
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
