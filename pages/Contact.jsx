import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact">
        <h2>Contact Me</h2>
        <ContactForm />
      </section>
    </>
  );
}
