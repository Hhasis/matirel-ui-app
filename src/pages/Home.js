import SectionLayout from "../layout/SectionLayout";
import HTable from "../components/HTable";
import { useEffect, useState } from "react";

const Home = () => {
  // const headers = [
  //   { text: "Id", value: "id" },
  //   { text: "First Name", value: "first_name" },
  //   { text: "Last Name", value: "last_name" },
  //   { text: "Email", value: "email" },
  //   { text: "Img", value: "avatar" },
  // ];
  // const [users, setUsers] = useState([]);

  const headers2 = [
    { text: "id", value: "id" },
    { text: "Name", value: "name" },
    { text: "Username", value: "username" },
    { text: "Email", value: "email" },
    { text: "Website", value: "website" },
    { text: "Phone", value: "phone" },
    { text: "City", value: "company.name" },
    { text: "Street", value: "company.catchPhrase" },
  ];
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // fetch("https://reqres.in/api/users?page=2")
    //   .then((res) => res.json())
    //   .then((api) => setUsers(api.data))
    //   .catch((err) => console.log(err));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((api) => setStudents(api))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <SectionLayout>
        <HTable headers={headers} items={users} />
      </SectionLayout> */}
      <SectionLayout>
        <HTable headers={headers2} items={students} />
      </SectionLayout>
    </div>
  );
};

export default Home;
