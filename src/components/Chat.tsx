import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {User} from '../App'

type UserContactChat = {
  id: number;
  name: string;
  message: string;
};
type Contact = {
  id: number;
  userId: number;
  name: string;
  profilePicture: string;
  userContactChat: UserContactChat[];
};
type Prop ={
  currentUser : null | User
}


export function Chat({currentUser} : Prop) {
  const navigate = useNavigate();
  let params = useParams()
  const [contact, setcontact] = useState<null | Contact>(null);
  useEffect(() => {
    fetch(`http://localhost:4000/usersContacts/${params.id}`)
      .then((resp) => resp.json())
      .then((info) => setcontact(info));
  }, []);

  if (contact === null) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <header className="header2">
        <span className="material-symbols-outlined" onClick={() => {
          navigate("/Contacts")
        }}> arrow_back </span>
        <div className="profile-Picture2">
          <img src={currentUser?.userProfilePicture} alt="" className="profile-image" />
        </div>
        <aside>
          <h2>{contact.name}</h2>
          <span>last seen Tue 6:45 am</span>
        </aside>
        <span className="material-symbols-outlined"> videocam </span>
        <span className="material-symbols-outlined"> call </span>
        <span className="material-symbols-outlined" > more_vert </span>
      </header>
      <main>
        <ul className="messages-ul">
          {contact?.userContactChat.map((item) =>
            contact.name !== item.name ? (
              <li className="message-text-container2" key={item.id}>
                <div className="divs-container">
                  <span className="message-text">{item.message}</span>
                  <div className="triangle2"></div>
                </div>
                <div className="profile-Picture3">
                <img src={currentUser?.userProfilePicture} alt="" className="profile-image"/>
                </div>
              </li>
            ) : (
              <li className="message-text-container">
                <div className="profile-Picture3">
                  <img src={contact.profilePicture} alt="" className="profile-image"/>
                </div>
                <div className="divs-container">
                  <div className="triangle"></div>

                  <span className="message-text">{item.message}</span>
                </div>
              </li>
            )
          )}
        </ul>
      </main>
    </>
  );
}
