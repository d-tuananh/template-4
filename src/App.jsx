import {
  Footer,
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from "./components"

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white drop-shadow-xl">
        <Header />
      </header>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
      <footer className="bg-dd/400">
        <Footer />
      </footer>
    </>
  )
}

export default App
