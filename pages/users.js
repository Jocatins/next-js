import User from "../components/user";

const userList = ({ users }) => {
  return (
    <>
      <h3>Users List</h3>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default userList;

// this function runs only on server-side that is why you see the console log at the terminal
// You can write server side codes directly in getStaticProps

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export async function getStaticProps() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
