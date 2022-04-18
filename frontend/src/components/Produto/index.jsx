import React from "react";
import { Container, ButtonArea, Button } from "./styles";
import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5"

export default function Produto({id, nome_produto, descricao, categoria, preco}) {
    return(
        <li>
            <Container>
                <h2>{nome_produto}</h2>
                <p>{descricao}</p>
                <ButtonArea>
                    <Button>
                        <IoTrashBin/>
                    </Button>
                    <Button>
                        <IoThumbsUp/>
                    </Button>
                    <Button>
                        <IoPencil/>
                    </Button>
                </ButtonArea>
            </Container>
        </li>
    )
}