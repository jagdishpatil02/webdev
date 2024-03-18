import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { ANON_KEY, SUPABASE_URL } from "../Auth/keys";
import { ToastContainer, toast } from "react-toastify";
import html2canvas from "html2canvas";

const Achievements = () => {
  const [achievementsData, setAchievementsData] = useState();
  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [achievementBox, setachievementBox] = useState(false);

  const months = [
    { value: 0, label: "Select Month" },
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const downloadHandle = () => {
    const element = document.getElementById("achievements");

    html2canvas(element)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "achievement.png";
        link.click();
      })
      .catch((error) => {
        console.error("Error creating image:", error);
      });
  };

  // This function is called whenever the selected year or month changes

  useEffect(() => {
    if (year && month) {
      const userId = localStorage.getItem("userId");

      const fetchAchivements = async () => {
        const startDate = new Date(`${year}-${month}-01`).toISOString();
        const endDate = new Date(year, month, 0).toISOString(); // Last day of selected month

        const { data, error } = await supabase
          .from("achievements")
          .select("*")
          .eq("user_id", userId)
          .gte("created", startDate)
          .lte("created", endDate);
        setAchievementsData(data);
        console.log("data", data);

        if (data && data.length == 0) {
          toast.error("No achievements found");
          setachievementBox(false);
        } else {
          setachievementBox(true);
        }
      };

      fetchAchivements();
    }
  }, [year, month]);

  return (
    <div className="px-7 my-8">
      <div className="w-full flex">
        <select onChange={(e) => setYear(e.target.value)}>
          <option>Select Year</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
        <select onChange={(e) => setMonth(e.target.value)} className="mx-4">
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>

      {achievementBox && (
        <>
          {" "}
          <div
            style={{
              display: "flex",
              padding: "1rem",
              marginTop: "1.25rem",
              flexDirection: "column",
              alignItems: "center",
              borderWidth: "1px",
              backgroundColor: "#ffffff",
              minHeight: "250px",
            }}
            id="achievements"
          >
            <h3 className="text-2xl font-semibold mb-2 ">
              ✨ My Achievements ✨
            </h3>
            <ol style={{ listStyleType: "none", lineHeight: "30px" }}>
              {achievementsData &&
                achievementsData.length > 0 &&
                achievementsData.map((achievement, index) => (
                  <li key={index}>
                    <p>
                      {index + 1}. {achievement.achievement_name}
                    </p>
                  </li>
                ))}
            </ol>
          </div>
          <div className="flex justify-end my-2">
            <button
              onClick={downloadHandle}
              type="submit"
              className="bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end cursor-pointer"
            >
              Download
            </button>
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default Achievements;
