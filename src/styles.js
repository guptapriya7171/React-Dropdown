import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 600px;
  text-align: center;
  margin-left: 30%;
  margin-top: 6%;
  background-color: white;
  border-radius: 8px;
`;

export const StyledSelect = styled.select`
  max-width: 80%;
  margin: 10px 50px;
  text-align: center;
  height: 80%;
  font-size: 20px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: white;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
  background-color: white;
  font-size: 18px;
`;
export const StyledButton = styled.input`
  max-width: 80%;
  height: 100%;
  margin: 10px 50px;
  display: flex;
  justify-content: center;
  background-color: #cae1ff;
  border: solid 1px #008080;
  padding: 0.5rem;
  border-radius: 1rem;
`;
