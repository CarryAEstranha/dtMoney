import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);

    height: 13.25rem;
`;

export const Content = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin: 0 auto 4.25rem auto;
    padding: 0 1rem 0 1rem;

    max-width: 70rem;
    height: 9rem;

    button{
        background: var(--blue-light);

        color: #FFF;
        font-size: 1rem;

        border: 0;
        border-radius: 0.25rem;

        padding: 0 2rem;

        transition: filter 0.2s;

        height: 3rem;

        &:hover{
            filter: brightness(0.85);
        }
    }
`;