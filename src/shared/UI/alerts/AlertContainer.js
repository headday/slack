import styled from "styled-components";

function AlertContainer({isActive, children}){
	const Container = styled.div`
		margin-bottom: 20px;
	`
	return (
		<Container>
			{children}
		</Container>
	)
}

export default AlertContainer;