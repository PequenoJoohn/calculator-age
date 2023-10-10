import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;

  div {
    label {
      text-transform: uppercase;
      color: var(--smokey-grey);
      font-size: 12px;
      letter-spacing: 2px;
      padding-bottom: 4px;
      display: block;
    }
    input {
      width: 100%;
      border: 1px solid var(--light-grey);
      border-radius: 7px;
      padding: 14px 16px;
      font-size: 18px;
    }
    p {
      font-size: 12px;
      color: var(--light-red);
    }
  }
`;
