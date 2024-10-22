import React, { useState } from "react";
import styles from "../Css/Cadastro.module.css";
import logo from "../Images/bindlogo.png";
import { useNavigate } from "react-router";

const Cadastro = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/user/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
            console.log(result);
            navigate("/login");
        } catch (error) {
            console.error(error.message);
        } finally {
            setFormData({
                name: "",
                email: "",
                password: ""
            })
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.cadastroContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Username:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Seu Nome de Usuário"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Seu Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sua Senha"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className={styles.cadastroBtn}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Cadastro;
