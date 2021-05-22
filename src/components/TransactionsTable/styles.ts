import styled from "styled-components";

export const Container = styled.section`    
    table{
        color: var(--text-body);

        border-spacing: 0 0.5rem;

        margin: 2rem 0 0 0;

        width: 100%;

        th{
            font-weight: 400;
            text-align: left;

            height: 3.5rem;

            &:first-child{
                padding: 0 2rem 0 2rem;

                width: 34rem;
            }

            &:nth-child(2){
                width: 13.25rem;
            }
        }

        td{
            background: var(--shape);

            height: 4rem;

            &:first-child{
                color: var(--text-title);

                border-radius: 6px 0 0 6px;

                padding: 0 2rem 0 2rem;

                width: 34rem;
            }

            &:nth-child(2){
                width: 13.25rem;
            }

            &:nth-child(3){
                width: 13.25rem;
            }

            &:last-child{
                border-radius: 0 6px 6px 0;
            }

            &.deposit{
            color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }
    }
`;