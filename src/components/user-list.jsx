// UserList <- props: users -> List

import UserProfile from "./user-profile";

const UserList = ({users}) => {
    console.log(users);
    return <div>
        {/* <h3>Userlist</h3> */}
        {
        users.map((user, i) => {
            return <UserProfile key= {`user-list-${i}`} user = {user} />;
        })}
    </div>;
};
export default UserList;
