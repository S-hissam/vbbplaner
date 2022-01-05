import './App.css';
import Searchbar from './components/Searchbar';
import Searchapi from './components/Searchapi';
import Layout from './components/Layout';





function App() {


  return (
    <div className='flex justify-center items-center space-x-2'>
      <Layout >
        <Searchbar />
      </Layout>
      <Layout >
        <Searchapi />
      </Layout>
    </div>
  );
}

export default App;
