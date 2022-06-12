import { useEffect, useState } from "react";

const dashboardUrl = "http://localhost:4000/dashboard";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    const response = await fetch(dashboardUrl);
    const data = await response.json();
    setDashboardData(data);
    setIsLoading(false);
    console.log(data);
  };

  if (isLoading) {
    return <h2>Loading ....</h2>;
  }
  return (
    <>
      <h3>Dashboard</h3>
      <h3>Posts {dashboardData.posts}</h3>
      <h3>Likes {dashboardData.likes}</h3>
      <h3>Following {dashboardData.following}</h3>
      <h3>Followers - {dashboardData.followers}</h3>
    </>
  );
}
export default Dashboard;
