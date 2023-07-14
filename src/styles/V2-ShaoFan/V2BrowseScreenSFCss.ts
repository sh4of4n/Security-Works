import { css } from "@emotion/react";
import { Theme } from "styles/theme/DefaultTheme";

const V2BrowseScreenSFCss = (theme: Theme) => css`

    color:${theme.txt};

    &.searchbar{
        float: right;
        width: 30%;
        margin-left: -10px;
    }

    &.title{
        float: left;
        font-size: 25px;
        font-weight: bold;
    }

    &.filterbutton{
        float: right;
        color: white;
        font-weight: bold;
    }
    
    &.bodymargin{
        margin-top: 100px;
        margin-bottom: 200px;
        border: 1px solid grey;
        border-radius: 10px;
        
    }

    &.container-page{
        width: 350px;
        left: 70px;
        bottom: 120px;
        position: fixed;
    }

    &.container-dropdown{
        float: right;
        margin-top: -45px;
    }

    &.footerfnx {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #0d6efd;
        padding: 10px;
        text-align: center;
        font-weight: bold;
      }

    &.pluscircle{
        position: fixed;
        bottom: 60px;
        right: 40px;
        width: 70px;
        height: 70px;
        background-color: #0d6efd;
        color: white;
        font-size: 24px;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        text-decoration: none;
    }

    &.export-button{
        position: fixed;
        color: white;
    }

`;

export default V2BrowseScreenSFCss;