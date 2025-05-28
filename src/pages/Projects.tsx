import { motion } from "framer-motion";
// import { useState } from "react"; // 필터 기능 주석 처리로 필요 없음

const Projects = () => {
  // 필터 기능 관련 상태 및 데이터 (주석 처리)
  /*
  const [selectedFilter, setSelectedFilter] = useState("all");

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
  */

  const projects = [
    {
      id: 1,
      title: "시시각각",
      category: "web",
      description:
        "CCTV를 활용한 실시간 이상행동 알리미 서비스. 에스원 기업연계 프로젝트로, 실시간 알림, 이벤트 분석, 캘린더 기반 검색 기능을 구현했습니다.",
      image:
        "https://via.placeholder.com/400x250?text=%EC%8B%9C%EC%8B%9C%EA%B0%81%EA%B0%81",
      tags: ["React", "Zustand", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "소상고민",
      category: "web",
      description:
        "POS 데이터를 기반으로 한 소상공인을 위한 맞춤 분석 서비스. 경쟁사 비교, 리뷰 시각화, 매장 인사이트 기능을 포함합니다.",
      image:
        "https://via.placeholder.com/400x250?text=%EC%86%8C%EC%83%81%EA%B3%A0%EB%AF%BC",
      tags: ["React", "Zustand", "Chart.js", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Antswer",
      category: "web",
      description:
        "텍스트 중심의 실시간 회의 협업 툴. 실시간 채팅, 투표, 주목 등 소통 및 화상 통화 기능을 통해 회의 효율을 극대화했습니다.",
      image: "https://via.placeholder.com/400x250?text=Antswer",
      tags: ["React", "Zustand", "Chart.js", "Tailwind", "WebSocket"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "CineLog",
      category: "web",
      description:
        "개인 취향 기반 영화 추천 및 기록 서비스. TMDB API를 활용해 사용자 맞춤형 추천 기능과 리뷰 기록 기능을 제공합니다.",
      image: "https://via.placeholder.com/400x250?text=CineLog",
      tags: ["Vue", "TMDB API", "Django"],
      link: "#",
      github: "#",
    },
  ];

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
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-blue-100">
              제가 작업한 프로젝트들을 소개합니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section (현재 비활성화됨) */}
      {/*
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
      */}

      {/* Projects Grid */}
      <section className="py-25 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {projects.map((project, _) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 }}
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
                        Figma
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
    </div>
  );
};

export default Projects;
