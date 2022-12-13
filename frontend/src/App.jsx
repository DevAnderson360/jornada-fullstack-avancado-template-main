import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="content container mb-3 mt-3">
        <div className="row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
