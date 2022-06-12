import useSwr from "swr";

const dashboardUrl = "http://localhost:4000/dashboard";

const fetcher = async () => {
  const response = await fetch(dashboardUrl);
  const data = await response.json();
  return data;
};

function DashBoardS() {
  const { data, error } = useSwr("dashKey", fetcher);
  if (error) {
    return "An error has occured";
  }
  if (!data) {
    return "Loading";
  }
  return (
    <>
      <h3>Dashboard</h3>
      <h3>Posts {data.posts}</h3>
      <h3>Likes {data.likes}</h3>
      <h3>Following {data.following}</h3>
      <h3>Followers - {data.followers}</h3>
    </>
  );
}
export default DashBoardS;
