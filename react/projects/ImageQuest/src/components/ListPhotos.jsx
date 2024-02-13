import React, { useContext, useEffect, useState } from 'react';
import { PhotosContext } from '../context/Photos';
import { Rings } from 'react-loader-spinner';

export const ListPhotos = () => {
  const { term } = useContext(PhotosContext);

  let [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (term) {
      setData([]);
      setLoader(true);

      const fetchImages = async () => {
        const response = await fetch(
          `https://api.unsplash.com/search/photos/?query=${term}`,
          {
            headers: {
              Authorization:
                'Client-ID NzMjglFlKpC0XYfhKOb9QA4gqdJS-p8TZhjZRjw0nUY',
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.results);
        setLoader(false);
      };
      setTimeout(() => {
        fetchImages();
      }, 4000);
    }
  }, [term]);

  return (
    <>
      <p className='mb-4 mt-8 text-3xl font-bold capitalize'>
        {term && `${term} Pictures`}
      </p>

      <div className='mt-4 flex flex-row justify-center items-center flex-wrap'>
        {data.length ? (
          data.map((img, index) => {
            return (
              <img
                key={index}
                src={img.urls.regular}
                alt={img.alt_description}
                className='w-[300px] h-[300px] m-2'
              />
            );
          })
        ) : (
          <div>
            <Rings
              visible={loader}
              height='80'
              width='80'
              color='#333'
              ariaLabel='rings-loading'
              wrapperStyle={{}}
              wrapperClass=''
            />
          </div>
        )}
      </div>
    </>
  );
};
