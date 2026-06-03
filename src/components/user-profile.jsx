//! component  

const UserProfile = ({user }) => {
  console.log(user);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
export default UserProfile;