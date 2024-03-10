import ConfirmPage from "../ConfirmPage/ConfirmPage";
import GreetPage from "../GreetPage/GreetPage";
import UserDetails from "../UserDetails/UserDetails";
import UserInfo from "../UserInfo/UserInfo";
import "./MainForm.css";

import React, { useState } from "react";

export default function MainForm() {
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  switch (page) {
    case 1:
      return (
        <UserDetails
          nextPage={nextPage}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      );
    case 2:
      return (
        <UserInfo
          nextPage={nextPage}
          prevPage={prevPage}
          address={address}
          setAddress={setAddress}
          bio={bio}
          setBio={setBio}
        />
      );
    case 3:
      return (
        <ConfirmPage
          nextPage={nextPage}
          prevPage={prevPage}
          username={username}
          email={email}
          address={address}
          bio={bio}
        />
      );
    case 4:
      return <GreetPage prevPage={prevPage} />;
  }
}
