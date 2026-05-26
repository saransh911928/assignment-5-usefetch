import React from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Homepage from './pages/Homepage'
import Moviepage from './pages/Moviepage.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import AIRecommendations from './pages/AIRecommendations.jsx';

const App = () => {
  const {fetchUser, fetchingUser} = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if(fetchingUser){
    return <p>Loading...</p>
  }


  return (
    <div>

      <Toaster />
      <Navbar />

      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/movie/:id'} element={<Moviepage />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/ai-recommendations'} element={<AIRecommendations />} />
      </Routes>
    </div>
  )
}

export default App