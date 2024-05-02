import Cards from "../cards"
import PropTypes from "prop-types"

function Projects({repos}) {
   return (
      <ul className="grid grid-cols-2 gap-2 mt-20">
         {repos
         .map((e, i) => (
            <Cards 
               key={i}
               name={e.name}
               descricao={e.description}
               stargazers={e.stargazers_count}
               github={e.html_url}
               demo={e.homepage}
            />
         ))}
      </ul>
   )
}

Projects.propTypes = {
   repos: PropTypes.any.isRequired
}

export default Projects
