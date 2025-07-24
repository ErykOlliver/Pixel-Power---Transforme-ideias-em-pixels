import './App.css'
import Initial from './assets/screens/initial'
import AboutCurse from './assets/screens/AboutCurse'
import BuyNow from './assets/screens/BuyNow'
import Modules from './assets/screens/modules'
import CurseForMe from './assets/screens/CurseForMe'
import GenericPage from './assets/screens/GenericPage'
import NotConvinced from './assets/screens/NotConvinced'
import TeachPage from './assets/screens/TeachPage'

function App() {

  return (
    <body className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
      <div className='h-screen'>
        <Initial />
        <AboutCurse />
        <Modules />
        <CurseForMe />
        <GenericPage />
        <NotConvinced />
        <TeachPage />
        <BuyNow />
      </div>
    </body>
  )
}

export default App
