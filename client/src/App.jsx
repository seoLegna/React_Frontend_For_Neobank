import { Navbar, Loader, Footer, Services, Transactions, Welcome } from './components';

const App = () => {
  return (
    <div className="min-h-scree">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcom />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;
