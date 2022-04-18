import React from "react";
import Footer from "../Footer";
import Header from '../Header'
import ProdutoList from "../ProdutoList";
import { Container } from './styles'

export default function Layout() {
    return(
        <Container>
            <Header />
            <ProdutoList />
            <Footer />
        </Container>
    )
}