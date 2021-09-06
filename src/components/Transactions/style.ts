import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--title);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
            padding: 1rem 2rem;
            border: 0;
            background: var(--white);
            color: var(--text);
            border-radius: 0.25rem;

            &:first-child{
                color:var(--title);
            }

            &.deposit{
                color:var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }
    }

`