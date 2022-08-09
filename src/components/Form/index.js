import React from 'react';
import { useState } from 'react';
import * as C from "./styles";
import { v4 as uuid } from "uuid";
import Grid from '../Grid';

export default function Form({handleAdd, transactionList, setTransactionList}) {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    // const generateId = () => Math.round(Math.random() * 1000);

    function handleSave() {

        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        } else if (amount < 1) {
            alert("Informe um valor válido!");
            return;
        }

        const transaction = {
            id: uuid(),
            desc: desc,
            amount: amount,
            expense: isExpense
        }

        handleAdd(transaction)
        setDesc("");
        setAmount("");
    }

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input value={desc} onChange={e => setDesc(e.target.value)} />
                </C.InputContent>
                
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input value={amount} type="number" onChange={e => setAmount(e.target.value)} />
                </C.InputContent>
                
                <C.RadioGroup>
                    <C.Input 
                        value={desc} 
                        type="radio" 
                        id="rIncome" 
                        defaultChecked 
                        name="group1"
                        onChange={e => setIsExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                
                    <C.Input 
                        value={desc} 
                        type="radio" 
                        id="rExpanses" 
                        name="group1"
                        onChange={e => setIsExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rExpanse">Saída</C.Label>
                </C.RadioGroup>

                <C.Button onClick={handleSave}>Adicionar</C.Button>
            </C.Container>

            <Grid itens={transactionList} setItens={setTransactionList}/>
        </>
    )
}
