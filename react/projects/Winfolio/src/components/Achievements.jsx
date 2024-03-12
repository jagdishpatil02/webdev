import { supabase } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { ANON_KEY, SUPABASE_URL } from '../Auth/keys';
import { data } from 'autoprefixer';
import { parse, format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';

const Achievements = () => {
  const [achievementsData, setAchievementsData] = useState();
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const currentYear = new Date().getFullYear();

  const months = [
    { value: 0, label: 'Select Month' },
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' },
  ];

  // This function is called whenever the selected year or month changes

  useEffect(() => {
    if (year && month) {
      const userId = localStorage.getItem('userId');

      const fetchAchivements = async () => {
        const startDate = new Date(`\${year}-\${month}-01`).toISOString();
        const endDate = new Date(year, month, 0).toISOString(); // Last day of selected month

        const { data, error } = await supabase
          .from('achievements')
          .select('*')
          .eq('user_id', userId)
          .gte('created', startDate)
          .lte('created', endDate);
        setAchievementsData(data);
        console.log('data', data);

        if (data && data.length == 0) {
          toast.info('No achievements found');
        }
      };

      fetchAchivements();
    }
  }, [year, month]);

  return (
    <div className='px-11 my-8'>
      <select onChange={(e) => setYear(e.target.value)}>
        <option>Select Year</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
        <option>2021</option>
      </select>
      <select onChange={(e) => setMonth(e.target.value)} className='mx-4'>
        {months.map((month) => (
          <option key={month.value} value={month.value}>
            {month.label}
          </option>
        ))}
      </select>

      <div className='achievement-box p-4 rounded-lg shadow-md bg-[#b4ffc0] flex items-center justify-center flex-col mt-5'>
        <h3 className='text-2xl font-semibold mb-2 '>My Achievements</h3>
        <ul className='list-disc space-y-2'>
          {achievementsData &&
            achievementsData.length > 0 &&
            achievementsData.map((achievement, index) => (
              <li key={index}>
                <p>{achievement.achievement_name}</p>
              </li>
            ))}
        </ul>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Achievements;
