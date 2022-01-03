import './App.css';
import Searchbar from './components/Searchbar';
import Searchapi from './components/Searchapi';
import Layout from './components/Layout';





function App() {


  return (
    <div className='flex justify-center items-center'>
      <Layout className='flex1'>
        <Searchbar />
      </Layout>
      <Layout lassName='flex1'>
        <Searchapi/>
      </Layout>
    </div>
  );
}

export default App;
