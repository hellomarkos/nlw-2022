import './styles/main.css';
import logoImg from './assets/birl.jpg';

function App() {
  return (
    <div className="max-w-md mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />
      <h1 className="text-1xl text-white font-black">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>
    </div>
  )
}

export default App
