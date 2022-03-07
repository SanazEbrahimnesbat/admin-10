import Header from './Components/Header'
import SideBar from './Components/SideBar';
function App() {
  return (
    <div data-theme="admin10" >
      <aside className="w-1/6 float-left  border-r-gray-700 border-r h-screen">
      <SideBar/>
      </aside>
      <main className="w-5/6 float-left h-screen">
      <Header/>
      </main>
    </div>
  );
}

export default App;
