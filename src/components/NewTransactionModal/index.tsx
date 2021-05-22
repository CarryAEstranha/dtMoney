import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { useTransactions } from "../../hooks/useTransactions";

import { Container, TransactionTypeContainer } from "./styles";

import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import close from "../../assets/close.svg";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const { createTransaction } = useTransactions();
    
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("deposit");
    const [category, setCategory] = useState("");

    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle("");
        setAmount(0);
        setType("desposit");
        setCategory("");

        onRequestClose();
    }

    return(
        <Modal
            isOpen = {isOpen}
            onRequestClose = {onRequestClose}
			overlayClassName = "react-modal-overlay"
			className = "react-modal-class"
        >
            <button type = "button" className = "closeModal" onClick = {onRequestClose}>
                <img src = {close} alt = "Close modal"/>
            </button>

            <Container onSubmit = {handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <label htmlFor = "title" className = "hide">Nome</label>
                <input
                    id = "title"
                    name = "title"
                    type = "text"
                    placeholder = "Nome"
                    value = {title}
                    onChange = {event => setTitle(event.target.value)}
                    required
                /> <br />

                <label htmlFor = "price" className = "hide">Preço</label>
                <input
                    id = "price"
                    name = "price"
                    type = "number"
                    placeholder = "Preço"
                    value = {amount}
                    onChange = {event => setAmount(Number(event.target.value))}
                    min = "0"
                    required
                /> <br />

                <TransactionTypeContainer>
                    <button
                        type = "button"
                        className = {type === "deposit" ? "deposit" : ""}
                        onClick = {() => {setType("deposit");}}
                    >
                        <img src = {income} alt = ""/>
                        <span>Entrada</span>
                    </button>
                    <button
                        type = "button"
                        className = {type === "deposit" ? "" : "withdraw"}
                        onClick = {() => {setType("withdraw");}}
                    >
                        <img src = {outcome} alt = ""/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <label htmlFor = "category" className = "hide">Categoria</label>
                <input
                    id = "category"
                    name = "category"
                    type = "text"
                    placeholder = "Categoria"
                    value = {category}
                    onChange = {event => setCategory(event.target.value)}
                    required
                /> <br />

                <button type = "submit" className = "submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}