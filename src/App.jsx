import './App.css'
import Initial from './assets/screens/initial'
import AboutCurse from './assets/screens/AboutCurse'

function App() {

  return (
    <body className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
      <div className='w-full h-screen'>
        <Initial />
        <AboutCurse />
      </div>
    </body>
  )
}

export default App
