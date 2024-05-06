import Container from "../container"
import logoPequena from "../../assets/logoPequena.png"

function Footer() {
   return (
      <Container>
         <footer className="flex items-center justify-between  w-full pt-12 pb-4">
            <img src={logoPequena} alt="logo" className="size-10 max-lg:size-9 max-md:size-8 max-sm:size-6"/>
            <div className="flex gap-7 items-center">
               <i className="text-[#AEAEAE] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs" >© 2024 - Feito por Mariana Antonia </i>
               <span className="text-[#AEAEAE] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs">Projeto Codelândia</span>
            </div>
         </footer>
      </Container>
   )
}

export default Footer
