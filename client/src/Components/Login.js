import React, { useState } from "react";
import styles from '../Css/Login.module.css';
import logo from '../Images/bindlogo.png';
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
            const response = await fetch("http://localhost:5000/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
            localStorage.setItem("token", result.token);
            console.log(result);
            navigate("/dashboard");
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
            <div className={styles.loginContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </div>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className={styles.loginBtn}>
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;