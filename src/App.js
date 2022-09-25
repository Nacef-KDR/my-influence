import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Statistics from "./components/Statistics";


const App = () => {

  
  
  
  return (
    <div className='flex bg-myinluence-background  '>
      <Sidebar/>
      <div className="w-screen ">
        <Header/>
        <Navbar/>
        <Statistics/>
        <Main/>
        
      </div>
      
      
    </div>
    
  )
}
export default App;