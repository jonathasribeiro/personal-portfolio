import Button from "./components/Button";
import { motion } from "framer-motion";
import Header from "./components/Header";
import { BeakerIcon, CircleStackIcon, CodeBracketIcon, CommandLineIcon, ComputerDesktopIcon, GlobeAltIcon, KeyIcon, LinkIcon } from '@heroicons/react/24/outline' // Importando ícones do Heroicons

const App = () => {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  const handleDownload = () => {
    alert("Downloading Resume...");
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen flex flex-col text-white">
      {/* Header */}
      <Header>
        <nav className="flex space-x-6 flex-wrap justify-center">
          <Button label="Home" variant="secondary" onClick={handleClick} />
          <Button label="About" variant="secondary" onClick={handleClick} />
          <Button
            label="Experience"
            variant="secondary"
            onClick={handleClick}
          />
          <Button label="Projects" variant="secondary" onClick={handleClick} />
          <Button label="Contact Me" variant="primary" onClick={handleClick} />
        </nav>
      </Header>

      {/* Main Content Section Below Header */}
      <motion.section
        className="flex items-center justify-center flex-col py-32 space-y-12"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Image */}
          <motion.img
            src="https://lh3.googleusercontent.com/a/ACg8ocK9ibHSS4c1g8yzUA-YnBJuAQt4nWCj4y3WC5ycQik6u6NGok7NJQ=s288-c-no"
            alt="Jonathas Ribeiro"
            className="w-64 h-64 rounded-full border-8 border-[#4fc3f7]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Name */}
          <motion.div
            className="text-5xl xl text-white font-pacifico"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Jonathas Ribeiro
          </motion.div>

          {/* Title */}
          <motion.div
            className="text-3xl bg-gradient-to-r from-[#4fc3f7] to-[#ffff] text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Fullstack Engineer
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-center text-xl max-w-3xl text-gray-300 font-bold px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            As a passionate Full Stack Engineer, with expertise in both
            front-end and back-end technologies, I thrive on building scalable
            and efficient web applications. With a deep understanding of modern
            frameworks, APIs, and databases, I enjoy the challenges of
            designing, developing, and deploying robust solutions that provide
            seamless user experiences and drive business growth.
          </motion.p>

          {/* Contact Button */}
          <Button label="Contact Me" variant="primary" onClick={handleClick} />
        </motion.div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        className="bg-[#1a1a1a] min-h-screen flex flex-col items-center text-white py-32 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.div
          className="text-5xl font-bold text-center bg-gradient-to-r from-[#4fc3f7] to-[#ffff] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          About Me
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-xl text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Get to know me
        </motion.div>

        {/* Content */}
        <motion.div
          className="text-center text-lg max-w-3xl text-gray-300 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p>
            Hi there! I’m Jonathas Ribeiro, a fullstack engineer specializing in
            web development, front-end frameworks, back-end APIs, and database
            management. With a passion for building dynamic and scalable web
            applications, I’m dedicated to helping businesses create seamless
            user experiences and improve their digital presence.
          </p>

          <p className="mt-6">
            I bring a blend of technical expertise, hands-on experience, and a
            commitment to clear communication to every project. Whether it’s
            designing modern interfaces, building robust back-end systems, or
            optimizing database performance, I’m here to help you leverage the
            full potential of your digital platforms.
          </p>

          <p className="mt-6">
            Let’s work together to transform your ideas into powerful solutions
            that drive real-world impact. Get in touch, and let’s start building
            the future of your business!
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <Button
            label="Download Resume"
            variant="primary"
            onClick={handleDownload}
          />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="bg-[#1a1a1a] min-h-screen flex flex-col items-center text-white space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.div
          className="text-5xl font-bold text-center bg-gradient-to-r from-[#4fc3f7] to-[#ffff] text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          What I Do
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-xl text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          My Services
        </motion.div>

        {/* Services Cards */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {/* Service Card 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <GlobeAltIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              Web Application Development
            </div>
            <p className="text-gray-300 mt-2">
              I develop dynamic and responsive web applications using modern
              front-end and back-end technologies to create seamless user
              experiences.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <ComputerDesktopIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              Front-End Development
            </div>
            <p className="text-gray-300 mt-2">
              I build interactive and visually appealing user interfaces using
              frameworks like React, Vue.js, and Angular to ensure responsive
              and dynamic experiences.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <CodeBracketIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              Back-End Development
            </div>
            <p className="text-gray-300 mt-2">
              I create robust and scalable back-end systems with APIs,
              authentication, and server-side logic to ensure efficient
              communication between client and server.
            </p>
          </motion.div>

          {/* Service Card 4 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <CircleStackIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              Database Management
            </div>
            <p className="text-gray-300 mt-2">
              I design and manage databases with both relational and
              non-relational databases like MySQL, PostgreSQL, MongoDB, and
              more.
            </p>
          </motion.div>

          {/* Service Card 5 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <LinkIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              API Development and Integration
            </div>
            <p className="text-gray-300 mt-2">
              I build and integrate APIs to facilitate communication between
              different platforms, ensuring smooth data flow between front-end
              and back-end.
            </p>
          </motion.div>

          {/* Service Card 6 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <CommandLineIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              DevOps and Deployment
            </div>
            <p className="text-gray-300 mt-2">
              I automate deployment processes using Docker, Kubernetes, and
              CI/CD pipelines, ensuring smooth deployment of applications across
              environments.
            </p>
          </motion.div>

          {/* Service Card 7 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <KeyIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              Authentication and Authorization
            </div>
            <p className="text-gray-300 mt-2">
              I implement secure authentication and authorization systems, using
              technologies like OAuth, JWT, and other methods to protect user
              data and prevent unauthorized access.
            </p>
          </motion.div>

          {/* Service Card 8 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-[#fff] flex items-center text-black justify-center rounded-md mx-auto">
              <BeakerIcon className="h-12 w-12" />
            </div>
            <div className="text-xl font-bold text-white mt-4">
              Testing and Quality Assurance
            </div>
            <p className="text-gray-300 mt-2">
              I write automated tests to ensure code quality and functionality,
              including unit tests, integration tests, and end-to-end testing to
              ensure flawless performance.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default App;
