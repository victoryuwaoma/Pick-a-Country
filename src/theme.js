import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#171c28",
  fontColor: "#afafbf",
  width: "100%",
  height: "100%"
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
	}

    .card {
        background-color: ${(props) => props.theme.body}!important;
        color: ${(props) => props.theme.fontColor};
    }

    .bg-light {
        background-color: ${(props) => props.theme.body}!important;
    }

    input[type="search"] {
        background-color : ${(props) => !props.theme.body}; 
        }
    
    .modal .modal-dialog .modal-content{  
        background-color: ${(props) => props.theme.body}!important; 
        }
    .navbar-brand {
        color: ${(props) => props.theme.fontColor}!important;
    }
`;