import colors from '../../styles/colors';
import styled from "styled-components";
export const dropdownStyles = {
    dropdown: (show) => {
        return {
            borderRadius: '10px',
            boxShadow: show ? '0 1px 6px 0 rgba(32,33,36,0.28)' : 'none'
        }
    },
    body: (show) => {
        return {
            // display: show ? 'flex' : 'none',
            flexDirection: 'column',
            maxHeight: show ? '250px' : '0',
            height: 'auto',
            overflowY: 'auto',
            transition: 'opacity 250ms ease-in',
            opacity: show ? 1 : 0,
            WebkitScrollbar: 'display: none',
            border: show ? `thin solid ${colors.b_gray_light}` : '0',
            borderBottomLeftRadius: show ? '10px' : 0,
            borderBottomRightRadius: show ? '10px' : 0
        }
    },
    search: (show) => {
        return {
            height: '36px',
            padding: '0 16px',
            width: '100%',
            boxSizing: 'border-box',
            border: `thin solid ${colors.b_gray_light}`,
            outline: 'none',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: show ? 0 : '10px',
            borderBottomRightRadius: show ? 0 : '10px'
        }
    },
    content: {
        margin: '0',
        padding: '0'
    },
    listitemHover: `${colors.b_gray_light}`
    
}

export const ListItem = styled.li`    
    color: ${colors.fg_black};
    padding: 8px 16px;
    &:hover {        
        cursor: pointer;
        background: ${colors.b_gray_light};
    }
`