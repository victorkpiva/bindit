import styles from '../Css/Contato.module.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contato(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [emailSent, setEmailSent] = useState(false);
      const [emailError, setEmailError] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                console.log('Email sent successfully:', result.text);
                setEmailSent(true);
                setEmailError('');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setEmailError('Erro ao enviar o email. Por favor, tente novamente.');
        });
    
        // Limpar o formulário após o envio
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setEmailSent(false); 
      };

    return(
        <section className={styles.contactArea}>
            <div className={styles.contactText} id='section1'>
                <h2>Um pouco sobre nós</h2>
                <span>
                    Somos uma empresa formada com base na necessidade da criação de grupos voltado
                    para a área de e-sports, buscamos sempre evoluir nossos produtos e oferecer um 
                    suporte de qualidade se precisar de algo não hesite em nos contatar.
                </span>
            </div>

            <div className={styles.formContato}>
                <h2>Contato</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.infoUser}>
                    <input type="text" id="name" name="name" className={styles.textBox} placeholder='Seu Nome' value={formData.name} onChange={handleChange} required />
                    <input type="email" id="email" name="email" className={styles.textBox} placeholder='Seu Email' value={formData.email} onChange={handleChange} required />
                    </div>
                    <textarea id="message" name="message" className={styles.textarea} placeholder='Sua Mensagem' value={formData.message} onChange={handleChange} required />
                    <input type="submit" name="submit" className={styles.sendBtn} value="Enviar" />
                </form>
            </div>
        </section>
    )
}

export default Contato;
