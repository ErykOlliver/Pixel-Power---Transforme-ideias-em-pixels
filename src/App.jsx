import './App.css'
import Initial from './assets/screens/initial'
import AboutCurse from './assets/screens/AboutCurse'
import BuyNow from './assets/screens/BuyNow'
import CurseForMe from './assets/screens/CurseForMe'
import ModulesSec from './assets/screens/Modules'
import GenericPage from './assets/screens/GenericPage'
import NotConvinced from './assets/screens/NotConvinced'
import TeachPage from './assets/screens/TeachPage'
import Faq from './assets/screens/Faq'
import Footer from './assets/screens/Footer'

function App() {

  return (
    <body className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
      <div className='h-screen'>
        <Initial />
        <AboutCurse />
        <CurseForMe />
        <ModulesSec />
        <GenericPage />
        <NotConvinced />
        <TeachPage />
        <BuyNow />
        <Faq />
        <Footer />
      </div>
    </body>
  )
}

export default App
