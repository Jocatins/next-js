function User({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </>
  );
}
export default User;
