import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  background: #181b22;
  padding-top: ${Constants.statusBarHeight + 30};
`;

export const Header = styled.View``;

export const ContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  margin-bottom: 15px;
`;

export const ButtonOption = styled(RectButton)`
  height: 50px;
  width: 150px;
  background: #1a273d;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #0779fd;
  font-weight: bold;
`;

export const InputLabel = styled.TextInput`
  font-size: 16px;
  background: #1a273d;
  height: 400px;
  width: 100%;
  border-radius: 10px;
  color: #eee;
`;

export const ContainerInput = styled.View`
  padding: 0px 15px;
`;

export const ContainerInputRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 22px;
  margin-bottom: 10px;
`;

export const InputLabelSearch = styled.TextInput.attrs({
  placeholderTextColor: "rgba(7, 121, 253, 0.4)",
  paddingHorizontal: 7
})`
  font-size: 16px;
  background: #1a273d;
  height: 50px;
  width: 160px;
  border-radius: 10px;
  color: #eee;
`;
