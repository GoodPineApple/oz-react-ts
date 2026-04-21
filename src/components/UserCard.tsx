import type { User } from "../model/User";

interface UserCardProps {
  user: User;
}
const UserCard = ({ user }: UserCardProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.age}</p>
      <p>{user.isStudent ? "Student" : "Not a student"}</p>
    </div>
  );
};

export default UserCard;
