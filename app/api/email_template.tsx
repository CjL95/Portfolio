import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    org: string;
    email: string;
    position: string;
    phone: string;
    msg: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,org,email,position,phone,msg
}) => (
  <div>
    <h1>New Contact!</h1>
    <p>Name: {name}</p>
    <p>Company: {org}</p>
    <p>Email: {email}</p>
    <p>Position: {position}</p>
    <p>Phone: {phone}</p>
    <p>Message: {msg}</p>
  </div>
);