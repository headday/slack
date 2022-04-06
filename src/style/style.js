import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  background-color: #2F3136;
`;

const Form = styled.form`
  margin-bottom: 20px;
  
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const LinkText = styled.span`
  color: #1565C0;
  text-decoration: underline;
`;

export {
	Container,
	Form,
	Flex,
	LinkText
};