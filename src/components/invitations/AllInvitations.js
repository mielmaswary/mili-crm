import React from "react";
import Container from "../assets/Container";
import useFetch from "../assets/useFetch";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import InvitationCard from "./InvitationCard";
import Loader from "../assets/Loader";
const AllInvitations = () => {
  const [data, setData] = useState(null);
  const invitationsCollectionRef = collection(db, "invitations");
  useEffect(() => {
    const getInvitationsList = async () => {
      const invitationsList = await getDocs(invitationsCollectionRef);
      console.log(invitationsList);
      const filteringInvitationsList = invitationsList.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteringInvitationsList);
      setData(filteringInvitationsList);
    };
    getInvitationsList();
  }, []);

  const dataElemets = data?.map((el) => (
    <InvitationCard key={el.id} data={el} />
  ));
  return <Container>{data ? dataElemets : <Loader />}</Container>;
};

export default AllInvitations;
