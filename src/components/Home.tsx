import ExperiencePage from './Experience'
import ProjectsPage from './Projects'

const Home = () => {
  return (
    <div>
      <div className="space-y-16 bg-gradient-to-br from-[#4365b4] via-[#11499e] to-[#072466] text-white min-h-screen">
        <ExperiencePage />
      </div>
      <div className="bg-gradient-to-br from-[#845bed] via-[#5b03c7] to-[#2b04a0] text-white min-h-screen">
        <ProjectsPage />
      </div>
    </div>
  )
}

export default Home
