import { FaEnvelope, FaGithub, FaBlog } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600 mb-8">
          아래 링크를 통해 저와 연락해보세요!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* 이메일 */}
          <a
            href="mailto:blahwah1@naver.com"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaEnvelope className="text-2xl" />
            blahwah1@naver.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jyo0ny"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="text-2xl" />
            github.com/jyo0ny
          </a>

          {/* 블로그 */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaBlog className="text-2xl" />
            ---
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
