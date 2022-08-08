import React from 'react';
import { useState } from 'react';
import * as C from "./styles";

export default function Form() {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    function handleSave() {

        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
        } else if (amount < 1) {
            alert("Informe um valor válido!");
        }

        return;
    }

    return (
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
                    id="rExpanse" 
                    defaultChecked 
                    name="group1"
                    onChange={e => setIsExpense(!isExpense)} 
                />
                <C.Label htmlFor="rExpanse">Saída</C.Label>
            </C.RadioGroup>

            <C.Button onClick={handleSave}>Adicionar</C.Button>
        </C.Container>
    )
}
