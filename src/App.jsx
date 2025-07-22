import './App.css'
import Initial from './assets/screens/initial'
import AboutCurse from './assets/screens/AboutCurse'
import BuyNow from './assets/screens/BuyNow'

function App() {

  return (
    <body className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
      <div className='h-screen'>
        <Initial />
        <AboutCurse />
        <BuyNow />
      </div>
    </body>
  )
}

export default App
