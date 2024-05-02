import Container from "../container"
import Projects from "../listProjects"
import imgAlternativa from "../../assets/bi_image-alt.png"
import PropTypes from "prop-types"
import "../main/estilo.css"

function Main({ name, bio, repos, foto }) {
   return (
      <Container>
         <main>
            <div className="flex flex-col gap-4">
               <span className="text-green-400 font-bold text-2xl">Meus projetos do Github</span>
               <img src={foto ? foto : imgAlternativa} alt={name} className="w-60 rounded-full border-[2px] border-purple-500 my-3 float-animation"/>
               <h1 className="text-zinc-300 text-6xl">{name ? `Olá sou ${name}` : "Não possui nome Registrado"}</h1>
               <p className="leading-8 text-gray-400 font-semibold mt-4">{bio ? bio : "sem bio"}</p>
            </div>
            <Projects repos={repos} />
         </main>
      </Container>
   )
}

Main.propTypes = {
   name: PropTypes.string.isRequired,
   bio: PropTypes.string.isRequired,
   repos: PropTypes.any.isRequired,
   foto: PropTypes.string.isRequired
}

export default Main
