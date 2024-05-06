import Cards from "../cards"
import PropTypes from "prop-types"

function Projects({repos}) {
   return (
      <ul className="grid gap-2 mt-20 
         max-lg:grid-cols-1 md:grid-cols-2 
         
         ">
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
