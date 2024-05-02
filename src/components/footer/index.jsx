import Container from "../container"
import logoPequena from "../../assets/logoPequena.png"

function Footer() {
   return (
      <Container>
         <footer className="flex items-center justify-between  w-full pt-12 pb-4">
            <img src={logoPequena} alt="logo" className="size-10"/>
            <div className="flex gap-7 items-center">
               <i className="text-[#AEAEAE] text-lg" >© 2024 - Feito por Mariana Antonia </i>
               <span className="text-[#AEAEAE] text-lg">Projeto Codelândia</span>
            </div>
         </footer>
      </Container>
   )
}

export default Footer
