import logo from "./logo.svg";
import { Chat } from "./components/Chat";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Contacts } from "./components/Contacts";
import "material-symbols";
import { useEffect, useState } from "react";

export type User = {
  id: number;
  userName: string;
  userProfilePicture: string;
};
type UserContactChat = {
  id: number;
  name: string;
  message: string;
};

export type Contact = {
  id: number;
  userId: number;
  name: string;
  profilePicture: string;
  userContactChat: UserContactChat;
};

function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [userContacts, setUserContacts] = useState<null | Contact[]>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/2/`)
      .then((resp) => resp.json())
      .then((ServerInfo) => setCurrentUser(ServerInfo));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/users/2/usersContacts?_expand=contact`)
      .then((resp) => resp.json())
      .then((info) => setUserContacts(info));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/Contacts"
          element={<Contacts userContacts={userContacts} />}
        ></Route>
        <Route path="/Contacts/:id" element={<Chat currentUser={currentUser}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
