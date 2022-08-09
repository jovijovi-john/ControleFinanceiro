import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Resume from "./components/Resume";
import Form from "./components/Form";

export default function App() {

    const data = localStorage.getItem("transactions");
    const [transactionList, setTransactionList] = useState(
        data ? JSON.parse(data) : []
    )
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        // expense == despesas
        const amountExpense = transactionList.filter(
            (item) => item.expense
        ).map((transaction) => Number(transaction.amount));

        // income == renda
        const amountIncome = transactionList.filter(
            (item) => !item.expense
        ).map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); // soma todas as despesas
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); // soma todas as entradas
        
        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);

        console.log(`Income: ${Number(income)} Expense: ${Number(expense)}: ${Number(income) < Number(expense)}`)
        setTotal(`${Number(income) < Number(expense) ? " - " : ""}R$ ${total}`)
    }, [transactionList])

    function handleAdd(transaction) {
        const newArrayTransaction = [...transactionList, transaction];
        setTransactionList(newArrayTransaction);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransaction))
    }

    return (
        <>
            <Header/>
            <Resume income={income} expense={expense} total={total}/>
            <GlobalStyle />
            <Form handleAdd={handleAdd} transactionList={transactionList} setTransactionList={setTransactionList}/>
        </>
    )
}
