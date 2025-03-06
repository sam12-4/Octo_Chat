import { React, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Title from "./components/shared/Title";
import LayoutLoader from "./components/Loader/LayoutLoader";

const Home = lazy(
  () => import("./pages/Home")
)

const Login = lazy(
  () => import("./pages/Login")
)

const Chat = lazy(
  () => import("./pages/Chat")
)
const Group = lazy(
  () => import("./pages/Group")
)

const user = true;

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader />}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />




        <Routes>
      
          <Route element={<ProtectedRoute user={user} />} >
            
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Group />} />
          </Route>
     

          <Route path="/login" element={
            <ProtectedRoute user={!user}  redirect="/">
            <Login />   
            </ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
           
        </Routes>
      </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;