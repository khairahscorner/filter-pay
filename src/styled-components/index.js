// Styled component wrappers 
import styled, {keyframes} from 'vue-styled-components';
import * as colors from "../utils/color.json";
import * as sizes from "../utils/dimension.json";
import {screens} from "../utils/sizes";

//Page loader style
export const PreloaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #F4F2FF;
    position: relative;
    img {
        position: absolute;
        width: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media ${screens.mobileL} {
            width: 30%;
        }
    }
    p {
        font-size: 24px;
        font-family: "Greycliff Bold";
        line-height: 150%;
        text-align: center;
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media ${screens.mobileL} {
            width: 90%;
            font-size: 18px;
        }
    }
`
//loading indicator
const dot1 = keyframes`
    0% { transform: scale(0) }
    100% { transform: scale(1) }
`
const dot2 = keyframes`
    0% { transform: translate(0, 0) }
    100% { transform: translate(16px, 0) }
`
const dot3 = keyframes`
    0% { transform: scale(1) }
    100% { transform: scale(0) }
`
export const LoadingWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .wrapper {
            width: 0;
            display: flex;
            align-items: center;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translateX(50%);
            .dot { 
                position: absolute;
                top: -5px;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: ${colors.purple};
                animation-timing-function: cubic-bezier(0, 1, 1, 0);
                &:nth-child(1) {
                    left: -20px;
                    animation: ${dot1} 0.6s infinite;
                }
                &:nth-child(2) {
                    left: -20px;
                    animation: ${dot2} 0.6s infinite;
                }
                &:nth-child(3) {
                    left: -4px;
                    animation: ${dot2} 0.6s infinite;
                }
                &:nth-child(4) {
                    left: 12px;
                    animation: ${dot3} 0.6s infinite;
                }
            }
    }
`;

// Button 
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
//   width: 99px;
//   height: 39px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: ${sizes.text_16};
  line-height: 19px;
  text-transform: capitalize;
  color: #FFFFFF;
  cursor: pointer;
  outline: none;
  background-color: ${colors.purple}; 
  transition: box-shadow .2s ease-in;
  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05);
  }
  @media ${screens.mobile} {
    font-size: ${sizes.text_12};
  }
`;

export const PageHeader = styled.header`
    .tab-nav {
        border-bottom: 1px solid ${colors.grey};
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-right {
            font-size: ${sizes.text_14};
            line-height: 17px;
            color: ${colors.black_secondary};
        }
        #amount, #currency {
            font-size: ${sizes.text_18};
            line-height: 21px;
        }
        #amount {
            font-weight: 700;
            color: ${colors.purple};
        }
    }
    .tabs-group {      
        display: flex;
        align-items: center;
        .tab {
            height: 100%;
            color: ${colors.black_secondary};
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: border-bottom .2s ease;
            border-bottom: 2px solid transparent;
            &:hover {
              border-bottom: 2px solid ${colors.black_primary};
            }
        }
    }
    .head-text {
        font-size: ${sizes.text_14};
        font-weight: 700;
        line-height: 17px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: ${colors.black_secondary}
    }
`
//card
export const CardWrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
  }
  .group {
    display: flex;
    align-items: center;
  } 
`
//select 
export const SelectWrapper = styled.div`
  width: 88px;
  .custom-select {
    width: 100%;
    position: relative;
  }
  .select-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    border: 1px solid ${colors.grey};
    border-radius: 6px;
    font-size: ${sizes.text_16};
    color: ${colors.black_primary};
    &:focus {
      border: 1px solid ${colors.purple};
    }
  }
  .select-icon {
    width: 20px;
    height: 20px;
  }
  .options {
    z-index: 999;
    position: absolute;
    top: 50px;
    left: 0;
    width: 224px;
    min-width: 135px;
    padding: 20px;
    background-color: #FFFFFF;
    border: 1px solid ${colors.grey};
    border-radius: 6px;
    box-sizing: border-box;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
    color: ${colors.black_primary};
    font-size: ${sizes.text_14};
    p {
      font-size: ${sizes.text_12};
      color: ${colors.black_secondary};
      text-transform: uppercase;
      margin-bottom: 10px;
    }
  }
  .sort-group {
    border-bottom: 1px solid #F2F0F9;
  }
  .option {
    padding: 5px 10px;
    display; flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: #F2F0F9;
      border-radius: 4px;
    }
  }
`

export const SearchWrapper = styled.div`
  width: 392px;
  .search-box {
    position: relative;
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 10px;
      left: 0;
    }
  }
  input {
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: transparent;
    border-radius: 6px;
    background-color: ${colors.bg_primary};
    padding: 0 40px; 
    height: 40px;
    font-size: ${sizes.text_12};
    line-height: 15px;
    color: ${colors.black_secondary};
    &::placeholder {
      color: ${colors.black_secondary};
      opacity: 0.5;
    }
    &:focus {
      border: 1px solid ${colors.purple};
    }
  }
`