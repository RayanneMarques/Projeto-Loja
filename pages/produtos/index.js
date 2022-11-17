import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import ProductImg from "../../public/imgs/produto.jpg";
import {
  Card,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import ItemTable from "../../components/ItemTable";

export default function Produtos() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      image: "image",
      name: `Produto ${i}`,
      category: `Categoria ${i}`,
      price: `R$ ${i},99`,
      createdAt: "xx/xx/xxxx",
      id: i,
    });
  }
  const header = ["FOTO", "NOME", "CATEGORIA", "PREÇO", "CRIADO EM", "AÇÕES"];
  return (
    <>
      <Card className="m-md-5 p-md-5">
        <h2 className="text-center"> Produtos</h2>
        <Row className="pt-2">
          <Col md={10}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
          <Col className="d-grid" sm={2}>
            <Link href="/categorias/cadastrar">
              <Button> Adicionar </Button>
            </Link>
          </Col>
        </Row>
        <ItemTable data={data} header={header} detailLink="produtos" />
      </Card>
    </>
  );
}
