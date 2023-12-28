import axios from "axios";

export const getImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID NzMjglFlKpC0XYfhKOb9QA4gqdJS-p8TZhjZRjw0nUY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
