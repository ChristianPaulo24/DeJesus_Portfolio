  import Navbar from './components/Navbar'
  import Footer from "./components/Footer"


function App() {

  return (
      <div className='w-full h-screen bg-sky-300'>
        <Navbar logo='CPDJ' cta='Call me!'/>
        <div className="hero 1 flex flex-col justify-center items-center py-10">
        <div className="w-full max-w-3xl flex flex-row justify-center gap-10">
        <div className="w-25 flex flex-col items-start gap-2">
        <div className='uppercase text-4xl font-semibold'>Hey, I'm Paulo,A Computer Engineering Student at Holy Angel University</div>
        <div className="flex flex-row gap-4">
              <div className="font-bold">Designer</div>
              <div className="font-bold">Figma</div>
              <div className="font-bold">Developer</div>
            </div>
            <div className="flex flex-row gap-4">
              <button className="px-4 py-1 bg-sky-600 rounded-full font-semibold hover:bg-sky-800">Want to discuss?</button>
              <button className="px-4 py-1 bg-sky-600 rounded-full font-semibold hover:bg-sky-800">HIRE ME</button>
            </div>
        </div>
       <div className="hero-2"><img src="./picture/profile.JPG" alt="profile" className="rounded-full "/></div>
      </div>
      </div>
      <div className="skill py-40">
        <div className="text-center text-4xl font-semibold bg-sky-600 py-3">About Me</div>
        <div className="flex flex-row gap-20 items-center justify-between py-10">
          <div className="p-5 font-light text-3xl uppercase">Even I am a student, I am still learning to gather further knowledge regarding the course itself. I have experienced HTML, CSS, Javascript, MySQL, Python, and Java which I will use them for the future.
          </div>
          <div className="flex flex-col h-40 w-80 gap-20">
            <img src="./picture/HTML.png" alt="" className="object-cover" />
            <img src="./picture/CSS.png" alt="" className="object-cover"/>
            </div>
          <div className="flex flex-col h-40 w-80 gap-20">
            <img src="./picture/JS.png" alt="" className="object-cover"/>
            <img src="./picture/MySQL.png" alt="" className="object-cover"/>
            </div>
          <div className="flex flex-col h-40 w-80 gap-20 mr-20">
            <img src="./picture/python.png" alt="" className="object-cover"/>
            <img src="./picture/java.png" alt="" className="object-cover"/>
            </div>
        </div>
      </div>
      <Footer/>
      </div>
  )
}

export default App
