import styled from "styled-components";

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Line = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;

  width: 100%;
  height: 1px;

  border-bottom: 1px solid #E1E1E1;
`;

function Title({title}) {

	return (
		<>
			<Text>{title}</Text>
			<Line/>
		</>
	);
}

export default Title;