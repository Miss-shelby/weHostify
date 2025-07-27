import "./textroller.css"
const TextRoller = () => {
  return (
    <>
      <section className="animation hidden xs:block text-center lg:text-left">
    <div className="first bg-orange-gradient-text bg-clip-text text-transparent  font-bold font-sans text-2xl md:text-4xl"><div>Reach</div></div>
    <div className="second bg-purple-gradient-text bg-clip-text text-transparent  font-bold font-sans text-2xl md:text-4xl"><div>Hit</div></div>
    <div className="third second bg-blue-gradient-text bg-clip-text text-transparent  font-bold font-sans text-2xl md:text-4xl"><div>Capacity</div></div>
  </section>  
   <section className="animation text-left xs:hidden">
    <div className="first bg-orange-gradient-text bg-clip-text text-transparent  font-bold font-sans text-2xl md:text-4xl"><div>Reach</div></div>
    <div className="second bg-purple-gradient-text bg-clip-text text-transparent  font-bold font-sans text-2xl md:text-4xl"><div>Hit</div></div>
    <div className="third second bg-blue-gradient-text bg-clip-text text-transparent  font-bold font-sans text-2xl md:text-4xl"><div>Capacity</div></div>
  </section>  
    </>
  )
}

export default TextRoller