import { useEffect, useState } from "react";

import { User } from "../User/User";

import { userService } from "../../services";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    setLoading(true);
    await userService.getAll().then(({ data }) => {
      setUsers([...data]);
      setLoading(false);
    });
  }

  return (
    <div>
      {loading ? (
        <h3>"Loading..."</h3>
      ) : (
        users && users.map((user) => <User user={user} key={user._id} />)
      )}
    </div>
  );
};

export { Users };
