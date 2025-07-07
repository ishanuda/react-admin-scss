import "./TopBox.scss";
import { topDealUsers } from "../../data";

function TopBox() {
  return (
    <div className="top-box">
      <h1>Top Details</h1>
      <div className='list' >
        { topDealUsers.map((user) => (
          <div key={user.id} className="list-item">
            <div className="user">
              <img src={user.img} alt="User Image" />
              <div className="user-info">
                <span className="user-name">{user.username}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
