import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { SUPABASE_URL, ANON_KEY } from '../Auth/keys';

const Home = () => {
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const navigate = useNavigate();

  const logoutHandle = () => {
    supabase.auth.signOut();
    navigate('/login');
    localStorage.setItem('authenticated', false);
  };

  return (
    <div>
      <p>Home</p>
      <p onClick={logoutHandle}>Logout</p>
    </div>
  );
};

export default Home;
