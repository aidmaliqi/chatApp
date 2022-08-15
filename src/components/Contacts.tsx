import React, { useEffect, useState } from "react";
import "material-symbols";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../App";
import { Header } from "./Header";
import { Contact } from "../App";

type Prop = {
  userContacts: null | Contact[];
};
export function Contacts({ userContacts }: Prop) {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <ul>
          {userContacts?.map((item) => (
            <Link to={`/Contacts/${item.id}`}>
              <li key={item.id} className="chatt-person">
                <div className="Profile-picture">
                  <img
                    src={item.profilePicture}
                    alt=""
                    className="profile-image"
                  />
                </div>

                <section>
                  <h3>{item.name}</h3>
                  <span>Last message</span>
                </section>
                <aside>
                  <span>Time 10:30</span>
                  <div className="messages-number">2</div>
                </aside>
              </li>
            </Link>
          ))}
        </ul>
      </main>
    </>
  );
}
