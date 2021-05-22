import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
    h2{
        color: var(--text-title);

        font-size: 1.5rem;
        font-weight: 600;

        padding: 0 0 2rem 0;
    }

    input{
        background: #E7E9EE;

        color: var(--text-body);

        font-size: 1rem;
        font-weight: 400;

        border: 1px solid #D7D7D7;
        border-radius: 6px;

        box-sizing: border-box;
        outline: none;

        margin: 0 0 1rem 0;
        padding: 0 1.5rem 0 1.5rem;

        width: 100%;
        height: 4rem;

        &::placeholder{
            color: var(--text-body);

            font-size: 1rem;
            font-weight: 400;
        }
    }

    button.submit{
        background: var(--green);

        color: var(--shape);

        font-size: 1rem;
        font-weight: 600;

        border: none;
        border-radius: 6px;

        outline: none;

        margin: 0.5rem 0 0 0;

        transition: filter 0.2s;

        width: 100%;
        height: 4rem;

        &:hover{
            filter: brightness(0.85);
        }
    }

    .hide{
        position: absolute;

        overflow: hidden;

        opacity: 0;

        width: 0px;
        height: 0px;
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 0 0 1rem 0;

    display: flex;

    justify-content: space-between;

    button{
        background: transparent;

        display: flex;

        align-items: center;
        justify-content: center;

        border: 1px solid #969CB2;
        border-radius: 6px;

        box-sizing: border-box;
        outline: none;

        width: 14.75rem;
        height: 4rem;

        img{
            margin: 0 1rem 0 0;

            width: 2rem;
            height: 2rem;
        }

        span{
            color: var(--text-title);

            font-size: 1rem;
            font-weight: 400;
        }

        transition: 0.2s;

        &:hover{
            border-color: ${darken(0.6, "#969CB2")};
        }
    }

    button.deposit{
        background: rgba(18, 164, 84, 0.1);
    }

    button.withdraw{
        background: rgba(230, 46, 78, 0.1);
    }
`;