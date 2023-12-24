import { motion } from "framer-motion";

// Section Component
const Section = ({ children }) => (
  <motion.section
    className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }}
    exit={{ opacity: 0, y: 50, transition: { duration: 0.4 } }}
  >
    {children}
  </motion.section>
);

// About Section Component
const AboutSection = () => (
  <Section>
    <h1 className="text-6xl font-extrabold leading-snug">
      Hi, I'm
      <br />
      <span className="bg-white px-1 italic">Tyson Skakun</span>
    </h1>
    <motion.p
      className="text-xl font-semibold text-black-600 mt-4"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      I'm a full-stack developer based in Edmonton, Alberta, Canada.
      <br />
      I love building things and learning new technologies.
    </motion.p>
    <motion.button
      className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      Contact me
    </motion.button>
  </Section>
);

// Skills Data
const skills = [
  { title: "Front-end", level: 90 },
  { title: "Threejs /React-three-fiber", level: 70 },
  { title: "React / React Native", level: 90 },
  { title: "UI/UX", level: 80 },
];

// Languages Data
const languages = [
  { title: "english 🇨🇦", level: 100 },
  { title: "french 🇫🇷", level: 60 },
];

// Skills Section Component
const SkillsSection = () => (
  <Section>
    <motion.div whileInView="visible">
      <h2 className="text-5xl font-bold">Skills</h2>
      <div className="mt-8 space-y-4">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <SkillBar skill={skill} index={index} />
          </div>
        ))}
      </div>
      <h2 className="text-5xl font-bold mt-10">Languages</h2>
      <div className="mt-8 space-y-4">
        {languages.map((language, index) => (
          <LanguageBar language={language} index={index} key={index} />
        ))}
      </div>
    </motion.div>
  </Section>
);

// SkillBar Component
const SkillBar = ({ skill, index }) => (
  <div>
    <motion.h3
      className="text-xl font-bold text-gray-800"
      initial={{ opacity: 0 }}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 1, delay: 1 + index * 0.2 },
        },
      }}
      transition={{ duration: 1, delay: 1 + index * 0.2 }}
    >
      {skill.title}
    </motion.h3>
    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
      <motion.div
        className="h-full bg-indigo-500 rounded-full"
        style={{ width: `${skill.level}%` }}
        initial={{ scaleX: 0, originX: 0 }}
        variants={{
          visible: {
            scaleX: 1,
            transition: { duration: 1, delay: 1 + index * 0.2 },
          },
        }}
      />
    </div>
  </div>
);

// LanguageBar Component
const LanguageBar = ({ language, index }) => (
  <div>
    <motion.h3
      initial={{ opacity: 0 }}
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 1, delay: 2 + index * 0.2 },
        },
      }}
      whileInView="visible"
    >
      {language.title}
    </motion.h3>
    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
      <motion.div
        className="h-full bg-indigo-500 rounded-full"
        style={{ width: `${language.level}%` }}
        initial={{ scaleX: 0, originX: 0 }}
        variants={{
          visible: {
            scaleX: 1,
            transition: { duration: 1, delay: 2 + index * 0.2 },
          },
        }}
        whileInView="visible"
      />
    </div>
  </div>
);

// Projects Section Component
const ProjectsSection = () => (
  <Section>
    <h1>Projects</h1>
  </Section>
);

// Contact Section Component
const ContactSection = () => (
  <Section>
    <h2 className="text-5xl font-bold">Contact me</h2>
    <ContactForm />
  </Section>
);

// ContactForm Component
const ContactForm = () => (
  <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
    <form>
      <FormField label="Name" type="text" name="name" id="name" />
      <FormField label="Email" type="text" name="email" id="email" />
      <FormField label="Message" type="textarea" name="message" id="message" />
      <button className="bg-indigo-600 text-white p-4 px-8 rounded-lg font-bold text-lg mt-16">
        Submit
      </button>
    </form>
  </div>
);

// FormField Component
const FormField = ({ label, type, name, id }) => (
  <>
    <label htmlFor={id} className="font-medium text-gray-900 block mb-1 mt-8">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={id}
        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
      />
    ) : (
      <input
        type={type}
        name={name}
        id={id}
        className="block w-full rounded-md border-0 text-gray-900 shadow-sm"
      />
    )}
  </>
);

// Main Interface Component
export const Interface = () => (
  <div className="flex flex-col items-center w-screen">
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
);
