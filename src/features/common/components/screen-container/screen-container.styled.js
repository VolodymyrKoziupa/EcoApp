import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  padding: ${props => props.theme.space[5]} ${props => props.theme.space[3]};
  position: relative;
  flex: 1;
`;

export const Heading = styled.View`
  align-items: center;
  flex: 1;
`;

export const SearchHeading = styled.View`
  align-items: center; 
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  padding: ${props => props.theme.space[4]} 0;
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const FormContainer = styled.KeyboardAvoidingView`
  background-color: ${props => props.theme.colors.bg.primary};
  flex: 1;
`;

export const FormFields = styled.ScrollView`
  padding: 0 ${props => props.theme.space[2]};
`;

export const Menu = styled.View`
  margin-left: auto;
`;
