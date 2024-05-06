import imgAlternativa from "../../assets/bi_image-alt.png"
import PropTypes from "prop-types"

function Cards({ name, descricao, stargazers, github, demo }) {
   return (
      <>
         <li className="flex flex-col gap-4 items-start bg-[#171228] px-3 py-5 rounded transition  ease-in-out border border-[#873EFF] hover:duration-[0.7s]
         hover:scale-[.98] hover:shadow-md hover:shadow-[#c084fc97]">
            <iframe
               src={demo ? demo : imgAlternativa}
               title={name}
               className="bg-purple-950 w-full h-[222px] rounded"
               style={{ backgroundSize: "cover" }}
               scrolling="no"
               sandbox="allow-scripts allow-same-origin"
            />
            <h2 className="text-white text-2xl">{name ? name : "projeto sem nome"}</h2>
            <span className="text-white">⭐{stargazers}</span>
            <p className="leading-normal text-gray-400 font-semibold">{descricao ? descricao : "não possui descrição"}</p>
            <div className="flex items-center gap-2 py-2">
               <a href={demo} className="bg-green-400 px-6 py-1 rounded hover:bg-green-500 hover:text-white hover:font-bold">Demo</a>
               <a href={github} className="border border-green-400 text-white px-6 py-1 rounded hover:bg-green-400 hover:font-bold">GitHub</a>
            </div>
         </li>
      </>
   )
}

Cards.propTypes = {
   name: PropTypes.string.isRequired,
   descricao: PropTypes.string.isRequired,
   stargazers: PropTypes.number.isRequired,
   github: PropTypes.string.isRequired,
   demo: PropTypes.string.isRequired,
}

export default Cards
