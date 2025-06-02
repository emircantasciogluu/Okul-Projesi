import Navbar from "./components/Navbar";
import RouterConfig from "./routes/RouterConfig";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar />
        </div>
        <div>
          <RouterConfig />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
