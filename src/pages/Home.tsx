import { motion } from "framer-motion";
import profile from "../assets/portfolio_profile.png";
import Typewriter from "@/fancy/components/text/typewriter";
import { useState, useEffect } from "react";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 클라이언트에서만 렌더링
  }, []);
  return (
    <section className="h-[calc(100vh-80px)] bg-gradient-to-br from-[#fbfeff] via-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center px-8 overflow-hidden relative">
      {/* 배경 장식 요소들 */}

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-100 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-25"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex flex-row items-center justify-center gap-30 mx-auto relative z-10">
        {/* 왼쪽: 프로필 이미지 */}
        <motion.div
          className="w-60 h-60 md:w-80 md:h-80 rounded-[30px] bg-white p-3 shadow-2xl shrink-0 relative"
          animate={{
            opacity: 1,
            x: [-120, -80, -50, -30, -10, 0],
            rotate: [-8, 6, -4, 3, -1, 0],
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.15, 0.35, 0.55, 0.75, 1],
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: 3,
            transition: { duration: 0.3 },
          }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[35px] opacity-20 blur-sm"></div>
          <img
            src={profile}
            alt="서지윤 프로필"
            className="w-full h-full object-cover rounded-[20px] relative z-10"
          />

          {/* 프로필 주변 장식 */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 오른쪽: 텍스트 */}
        <motion.div
          className="flex-1 text-left relative mt-35"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.p
            className="text-blue-600 font-bold"
            style={{ fontSize: "2.5rem" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            잘 묻고, 잘 듣고, 잘 만드는
          </motion.p>
          <motion.h1
            className="font-bold text-gray-800 leading-tight relative"
            style={{ fontSize: "4.3rem" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              프론트엔드 개발자
            </motion.span>
            <br />
            <motion.div
              className="text-blue-600 font-extrabold inline-block relative"
              style={{
                fontSize: "5rem",
                textShadow: "none",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
              }}
            >
              {isClient && (
                <Typewriter
                  text="서지윤"
                  speed={200}
                  initialDelay={2000}
                  className="text-blue-600 font-extrabold text-6xl"
                  showCursor
                  cursorChar="|"
                  cursorClassName="ml-2 text-blue-500 text-5xl"
                  onFirstTyped={() => console.log("타이핑 시작")}
                />
              )}
              <motion.div
                // className="absolute -inset-2 bg-blue-400 opacity-20 rounded-lg -z-10"
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
              />
            </motion.div>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              입니다.
            </motion.span>
          </motion.h1>

          {/* 추가 장식 텍스트 - 멋진 애니메이션 효과 */}
          <motion.div
            className="mt-8 h-40 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {/* 떨어지는 텍스트들 */}
            <motion.div
              className="absolute"
              initial={{
                x: 50,
                y: -100,
                rotate: -15,
                scale: 0,
              }}
              animate={{
                x: 20,
                y: 80,
                rotate: 5,
                scale: 1,
              }}
              transition={{
                type: "spring",
                bounce: 0.6,
                duration: 1.2,
                delay: 3,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 10,
                y: 70,
                transition: { duration: 0.3 },
              }}
              drag
              dragConstraints={{ left: -50, right: 300, top: 0, bottom: 100 }}
              dragElastic={0.2}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl transition-shadow">
                ✨ 사용자 경험을 중시하는
              </div>
            </motion.div>

            <motion.div
              className="absolute"
              initial={{
                x: 200,
                y: -150,
                rotate: 20,
                scale: 0,
              }}
              animate={{
                x: 180,
                y: 120,
                rotate: -8,
                scale: 1,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
                duration: 1.4,
                delay: 3.3,
              }}
              whileHover={{
                scale: 1.1,
                rotate: -15,
                y: 110,
                transition: { duration: 0.3 },
              }}
              drag
              dragConstraints={{ left: -50, right: 300, top: 0, bottom: 100 }}
              dragElastic={0.2}
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl transition-shadow">
                🚀 성능 최적화를 추구하는
              </div>
            </motion.div>

            <motion.div
              className="absolute"
              initial={{
                x: 350,
                y: -80,
                rotate: -25,
                scale: 0,
              }}
              animate={{
                x: 320,
                y: 50,
                rotate: 12,
                scale: 1,
              }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 1.1,
                delay: 3.6,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 20,
                y: 40,
                transition: { duration: 0.3 },
              }}
              drag
              dragConstraints={{ left: -50, right: 300, top: 0, bottom: 100 }}
              dragElastic={0.2}
            >
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:cursor-grab active:cursor-grabbing shadow-lg hover:shadow-xl transition-shadow">
                💡 창의적인 문제 해결을 즐기는
              </div>
            </motion.div>

            {/* 떠다니는 파티클들 */}
            <motion.div
              className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-60"
              animate={{
                x: [0, 100, 50, 150],
                y: [0, 30, 80, 20],
                scale: [1, 1.5, 0.8, 1.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
              style={{ left: "10%", top: "20%" }}
            />
            <motion.div
              className="absolute w-3 h-3 bg-purple-300 rounded-full opacity-50"
              animate={{
                x: [0, -50, 80, -20],
                y: [0, 60, 20, 90],
                scale: [1, 0.5, 1.8, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4.5,
              }}
              style={{ left: "80%", top: "10%" }}
            />
            <motion.div
              className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full opacity-70"
              animate={{
                x: [0, 120, -30, 70],
                y: [0, -20, 70, 40],
                scale: [1, 2, 0.6, 1.4],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5,
              }}
              style={{ left: "60%", top: "70%" }}
            />
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            className="mt-12 flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
