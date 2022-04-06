import styled from "styled-components";
import Title from "./Title";

const Container = styled.div`
  padding: 30px;
  
  position: relative;

  min-width: 400px;

  background-color: #FFFFFF;
  border-radius: 10px;
`;

function Window({children, title}) {

	return (
		<Container>
			{title && <Title title={title}/>}
			{children}
		</Container>
	);
}

export default Window;