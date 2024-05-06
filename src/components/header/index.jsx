import logo from "../../assets/logo.png"
import Container from "../container"
import PropTypes from "prop-types"

function Header({ github, getUser }) {
   return (
      <header className="py-4">
         <Container>
            <div className="flex items-center justify-between">
               <img src={logo} alt="logo" className="w-16 h-auto" />
               <nav>
                  <ul className="flex items-center gap-6">
                     <li className="flex gap-2">
                        <input
                           id="user"
                           type="text"
                           className="text-white bg-black text-xl border-2 border-[#873EFF] hover:shadow-md hover:shadow-violet-600 rounded px-4 py-1"
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
                        <a className="text-white text-xl border-2 border-[#873EFF] rounded px-4 py-1 hover:bg-violet-600" href={github}>Github</a>
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
