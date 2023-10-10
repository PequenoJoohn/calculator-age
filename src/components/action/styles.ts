import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    opacity: 0.5;
    background: var(--light-grey);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  button {
    position: relative;
    z-index: 2;
    background: var(--purple);
    border: 0;
    border-radius: 50%;
    padding: 18px;
    cursor: pointer;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;
