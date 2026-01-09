import './App.css'
import Navbar from "./components/Navbar";
import FloatingLines from './components/FloatingLines';
import useWindowSize from './hooks/useWindowSize';
import SplitText from './components/SplitText';
import TextType from './components/TextType';
import StarBorder from './components/StarBorder';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="relative w-full bg-black text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingLines
          lineCount={isMobile ? 5 : 6}
          lineDistance={isMobile ? 10 : 5}
          enabledWaves={isMobile ? ['middle', 'bottom'] : ['top', 'middle', 'bottom']}
          animationSpeed={isMobile ? 0.5 : 1}
          parallax={!isMobile}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 w-full">
          <SplitText
            text="Swaroop Vyawahare"
            className="text-4xl md:text-6xl font-bold text-center font-['Poppins']"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <TextType
            text={["Full Stack Developer", "UI/UX Designer", "DevOps Enthusiast", "Cloud Enthusiast"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-xl md:text-2xl text-gray-300"
          />
        </div>

        <div id="star-border-btn" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
          <StarBorder
            as="a"
            href="https://drive.google.com/file/d/1fmXMAHyF47g5kfr5qFmhXXpDd0utKr4z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-class"
            color="magenta"
            speed="5s"
          >
            Grab My CV
          </StarBorder>
        </div>
      </div>


      {/* About Section */}
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
