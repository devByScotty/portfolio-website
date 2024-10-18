import { useRef } from 'react';


export default function ContactForm() {


  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required />

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Message</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
}
