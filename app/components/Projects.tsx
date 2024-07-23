import FINCATALYST_IMAGE from '../assets/FINCATALYST_IMAGE.webp'
import PORTFOLIO_IMAGE from '../assets/PORTFOLIO_IMAGE.png'
import { AnimatedPinDemo } from './AnimatedPin'
import BlurFade from './ui/Blur-fade'
import SparklesText from './ui/SparklesText'
import GITHUB_PHOTO from "../assets/GITHUB_USER_PHOTO.webp";
const Projects = () => {
    return (
        <div id="projects" className='pt-6'>
            <BlurFade inView className=' mx-auto'>
                <SparklesText text='Projects' sparklesCount={5} className='text-4xl text-center text-black dark:text-white ' />
                {/* <div >
                <Image src={img1} alt="Fincatalyst Project" width={500} height={500} />
            </div> */}
                <div className='grid grid-cols-3 mobile:grid-cols-1 lg:grid-cols-3'>
                    <AnimatedPinDemo img={PORTFOLIO_IMAGE} alt={"Portfolio Image"} ProjectHeading={"Portfolio"} title={"Portfolio Link"} linkHref={"https://github.com/sankettank66/My-Portfolio"} description={"Personal Portfolio with Smooth Animation made using NextJs MagicUI Acernity UI and tailwind"} />
                    <AnimatedPinDemo img={FINCATALYST_IMAGE} alt={"Fincatalyst Project"} ProjectHeading={"Fincatalyst"} title={"Devfolio Link"} linkHref={"https://devfolio.co/projects/fincatalyst-e986"} description={"This app leverages CoinCap API, React, Vite, Tailwind CSS, and RoughNotion to deliver real-time cryptocurrency data with interactive visualization!"} />
                    <AnimatedPinDemo img={GITHUB_PHOTO} alt={"GITHUB USER FINDER"} ProjectHeading={"Github User Finder"} title={"Live Link"} linkHref={"https://ghuserfinder.vercel.app"} description={"Discover GitHub users, their repositories, and key details with ease. Streamline your search and explore the world of code."} />
                </div>
            </BlurFade>
        </div>
    )
}

export default Projects