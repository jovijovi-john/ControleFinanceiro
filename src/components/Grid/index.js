import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

export default function Grid({ itens, setItens}) {
    
    function onDelete(id){
        const newArray = itens.filter((transaction) => transaction.id !== id);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }

    return (
        <C.Table>
            <C.Thead>
                <C.Th width={40}>Descrição</C.Th>
                <C.Th width={40}>Valor</C.Th>
                <C.Th width={10} alignCenter>Tipo</C.Th>
                <C.Th width={10}></C.Th>
            </C.Thead>

            <C.Tbody>
                {itens?.map((item, index) => {
                    return <GridItem key={index} item={item} onDelete={onDelete}/>
                })}
            </C.Tbody>
        </C.Table>
    )
}