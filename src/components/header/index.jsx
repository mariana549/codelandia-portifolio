import logo from "../../assets/logo.png"
import Container from "../container"
import PropTypes from "prop-types"

function Header({ github, getUser }) {
   return (
      <header className="py-4">
         <Container>
            <div className="flex items-center justify-between max-lg:flex-col">
               <img src={logo} alt="logo" className="w-60 max-lg:w-52 max-md:w-48 max-sm:w-44 max-lg:mb-5" />
               <nav>
                  <ul className="flex items-center gap-6 
                  max-md:flex-col">
                     <li className="flex gap-2">
                        <input
                           id="user"
                           type="text"
                           className="text-white bg-black text-xl border-2 border-[#873EFF] rounded px-4 py-1
                           w-60
                           hover:shadow-md hover:shadow-violet-600 "
                           onChange={(e) => getUser(e.target.value)}
                           placeholder="Digite seu Usuário"
                        />
                        <button
                           onClick={() => getUser()}
                           type="button"
                           className="text-white text-xl border-2 border-[#873EFF] hover:bg-violet-600 rounded px-4 py-1">
                           Pesquisar
                        </button>
                     </li>
                     <li>
                        <a className="text-white text-xl border-2 border-[#873EFF] rounded px-4 py-1 hover:bg-violet-600 max-md:hidden" href={github} >Github</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </Container>
      </header>
   );
}

Header.propTypes = {
   github: PropTypes.string.isRequired,
   getUser: PropTypes.any.isRequired
}

export default Header
