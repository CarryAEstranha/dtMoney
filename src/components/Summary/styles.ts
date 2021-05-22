import styled from "styled-components";

export const Container = styled.section`
    display: flex;

    justify-content: space-between;

    div{
        background: var(--shape);

        display: flex;
        flex-direction: column;

        justify-content: center;

        color: var(--text-title);

        border-radius: 6px;

        margin: -4.25rem 0 0 0;
        padding: 0 2rem 0 2rem;

        width: 22rem;
        height: 8.5rem;

        header{
            display: flex;

            align-items: center;
            justify-content: space-between;

            margin: 0 0 0.46rem 0;
        }

        strong{
            font-size: 2rem;
            font-weight: 500;
        }

        &.greenlight{
            background: var(--green);

            color: var(--shape);
        }
    }
`;