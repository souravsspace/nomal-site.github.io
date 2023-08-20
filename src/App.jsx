import './App.css'
import Navigation from './components/Navigation'
import HomeMain from './components/HomeMain'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const navNames = {
  Home:'Home',
  About:'About',
  Portfolio:'Portfolio',
  Contact:'Contact'
}

function App() {
  
  const path = {
    home: 'nomal-site.github.io/',
    portfolio: 'nomal-site.github.io/portfolio',
    about: 'nomal-site.github.io/about',
    contact: 'nomal-site.github.io/contact'

  }

  const handleTheme = ()=> { 
    const html = document.body.parentNode.classList
    if(html.value === 'data-light'){
      html.remove("data-light") 
      html.add("data-dark")
      localStorage.setItem('selectedTheme', 'data-dark')
    } else {
      html.remove("data-dark")
      html.add("data-light")
      localStorage.setItem('selectedTheme', 'data-light') 
    }
  }

  const selectedTheme = localStorage.getItem('selectedTheme')
  if(selectedTheme === 'data-dark'){
    const html = document.body.parentNode.classList
    html.remove("data-light") 
    html.add("data-dark")
  }



  return (
    <Router>
        <Navigation 
            path={path} 
            navNames={navNames} 
            handleTheme={handleTheme} 
            selectedTheme={selectedTheme} 
        />
        <Routes>
            <Route exact path='*' element={<HomeMain />} />
            <Route exact path={path.home} element={<HomeMain />} />
            <Route exact path={path.portfolio} element={<Portfolio />} />
            <Route exact path={path.about} element={<About />} />
            <Route exact path={path.contact} element={<Contact />} />
        </Routes>
        <Footer 
            path={path} 
            navNames={navNames}  
        />
    </Router> 
  )
}

export default App