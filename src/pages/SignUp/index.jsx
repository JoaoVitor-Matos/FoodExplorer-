import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form, Brand } from "./styles";

import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Button } from "../../components/Button";

import brand from "../../assets/brand.svg";

export function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return alert("Digite um e-mail válido!");
    }

    if (password.length < 6) {
      return alert("A senha deve ter no mínimo 6 caracteres!");
    }

    setLoading(true);

    api
      .post("/users", formData)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate(-1);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo" />
      </Brand>

      <Form>
        <h2>Crie sua conta</h2>

        <Section title="Seu nome">
          <Input
            name="name"
            placeholder="João Vitor"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </Section>

        <Section title="Email">
          <Input
            name="email"
            placeholder="joaovitor@exemplo.com"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
        </Section>

        <Section title="Senha">
          <Input
            name="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Section>

        <Button title="Criar conta" onClick={handleSignUp} loading={loading} />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
