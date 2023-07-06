import React, { useState } from "react";
import Container from "../assets/Container";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import PdfContent from "../playground/PdfContent";
const invitationCollection = collection(db, "invitations");
function NewInvitation() {
  const [formValues, setFormValues] = useState({
    organizationName: "",
    contactName: "",
    contactPhone: "",
    email: "",
    description: "",
    date: "",
    time: "",
    cost: "",
    location: "",
    participants: "",
    paymentMethod: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(invitationCollection, formValues);
  };
  const labelStyle = {
    color: "#132aab",
  };
  const inputStyle = {
    margin: "10px 0",
    padding: "13px",
    width: "250px",
    fontSize: "16px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#c2e7ff",
    color: "white",
    width: "100%",
    padding: "15px 20px",
    marginTop: 5,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          שם הארגון המזמין:
          <br />
          <input
            type="text"
            name="organizationName"
            value={formValues.organizationName}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          שם איש קשר:
          <br />
          <input
            type="text"
            name="contactName"
            value={formValues.contactName}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          טלפון איש קשר:
          <br />
          <input
            type="text"
            name="contactPhone"
            value={formValues.contactPhone}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          דוא"ל:
          <br />
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          מה כלול בהזמנה:
          <br />
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          תאריך:
          <br />
          <input
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          שעה:
          <br />
          <input
            type="time"
            name="time"
            value={formValues.time}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          עלות:
          <br />
          <input
            type="text"
            name="cost"
            value={formValues.cost}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          מיקום:
          <br />
          <input
            type="text"
            name="location"
            value={formValues.location}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          כמות משתתפים:
          <br />
          <input
            required
            type="text"
            name="participants"
            value={formValues.participants}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <label style={labelStyle}>
          אופן תשלום:
          <br />
          <input
            type="text"
            name="paymentMethod"
            value={formValues.paymentMethod}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>
          ביצוע הזמנה
        </button>
      </form>
    </Container>
  );
}

export default NewInvitation;
