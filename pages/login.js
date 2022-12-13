import Link from "next/link";
import { Button, Card, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import authService from "../service/auth.service";
import { useAuthContext } from "../context/auth.context";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils/route-matcher";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState("");
  const [ isAuthenticated, setIsAutheticated] = useAuthContext();
if (isAuthenticated) {
  router.push("/categorias");
}
  
  async function handleLogin(e) {
    e.preventDefault();
    //LÓGICA DE LOGIN PARA O SISTEMA.
    // 1. VERIFICAR OS DADOS INSERIDOS
    // 2. ENVIAR A REQUISIÇÃO PÁRA O BACKEND
    // 3. ESPERAR A RESPOSTA
      // 3.1. SE EXISTIR ERRO, ALERTAR AO USUÁRIO
      // 3.2. SE A REQUISIÇÃO ESTIVER OK, SALVA O TOKEN E VOLTA PARA A PÁGINA.
      try {
        await authService.login({
          email,
          password,
        });
        setIsAutheticated(true);
        router.push("/categorias");
      } catch(erro){
        console.log(erro)
        alert("Falha ao autenticar, por favor tente novamente");

      }
  }
  return <>
  <Container className="p-5">
    <Card>
      <Form onSubmit={handleLogin}>
        <h1 className="text-center">
          Entrar na sua loja.
        </h1>
        <FormGroup className="p-2"> 
          <FormLabel> E-mail </FormLabel>
          <FormControl
          type = "e-email"
          placeholder ="Insira seu e-mail." 
          required
          value = {email}
          onChange={(e) => setEmail(e.target.value)}
          /> 
          </FormGroup>
        <FormGroup className="p-2" > 
          <FormLabel> Senha </FormLabel>
          <FormControl
          type = "password"
          placeholder ="Insira a sua senha." 
          required
          minLenght = {8}
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
          /> 
        </FormGroup>
        <FormGroup className="p-2 text-center">
          <Button type = "submit"> Entrar no sistema </Button>
          <br />
          <Link href = "/nova-conta">
            <a> Crie uma conta </a>
          </Link>
        </FormGroup>
        

      </Form>
    </Card>
  </Container>
  </>;
  
}
