import React from "react";
import {AddProdutoButton, AddIcon} from './styles';

export default function AddProduto(){
    return(
        <li>
            <AddProdutoButton>
                <AddIcon />
            </AddProdutoButton>
        </li>
    )
}