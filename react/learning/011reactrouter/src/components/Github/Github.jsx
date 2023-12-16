import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(
  //     () => {},
  //     [
  //       fetch("https://api.github.com/users/jagdishpatil02")
  //         .then((res) => res.json())
  //         .then((data) => setData(data)),
  //     ],
  //     []
  //   );

  const data = useLoaderData();

  return <div>Github Followers: {data.followers}</div>;
}

export default Github;

export const githubInfoloader = async () => {
  const response = await fetch("https://api.github.com/users/jagdishpatil02");
  return response.json();
};
