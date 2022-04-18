import React from "react";
import {  Container, ProdutoListWrapper } from "./styles";
import AddProduto from "../AddProduto";
import Produto from '../Produto'

export default function ProdutoList() {
    return(
        <Container>
            <ProdutoListWrapper>
                <Produto 
                    id={1}
                    nome_produto="X-BACON"
                    categoria="Lanche"
                    descricao="sdsasdfasdfasdfasdfads"
                    preco={22.50}
                />
                <AddProduto />
            </ProdutoListWrapper>
        </Container>
    )
}