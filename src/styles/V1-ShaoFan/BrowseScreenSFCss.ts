import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const BrowseScreenSFCss = (theme: Theme) => css`
    color: ${theme.txt};
    
    &.searchbar{
        float: left;
        width: 40%;
        margin-left: -10px;
    }

    &.newbutton{
        float: right;
        color: white;
    }

    &.exportbutton{
        float: right;
        color: white;
        margin-right: 5px;
    }

    &.title{
        margin-bottom: 20px;
        font-size: 25px;
        font-weight: bold;
    }

    &.bodymargin{
        margin-top: 40px;
        margin-bottom:30px;
    }

    &.buttonpanel{
        height: 30px;
    }
    
    &.locationtext{
        color: #0000ff;
    }
      
`;

export default BrowseScreenSFCss;