import styled from 'vue-styled-components';
import * as colors from "../utils/color.json";
import * as sizes from "../utils/dimension.json";
// import {screens} from "../utils/sizes";


export const TableWrapper = styled.table`
  width: 100%;
  min-width: 1000px;
  border-collapse: collapse;
  thead {
    background-color: ${colors.bg_primary};
    border-bottom: 1px solid ${colors.grey_light};
    th {
      padding: 15px 0;
      padding-left: 30px;
      text-align: left;
      font-weight: 600;
      font-size: ${sizes.text_12};
      line-height: 15px;
      color: ${colors.black_secondary};
      text-transform: uppercase;
      &:last-child {
        padding-right: 30px;
        display: flex;
        flex-direction: row-reverse;
      }
    }
    .check-head {
      width: 20px;
      height: 20px;
      border: 1px solid ${colors.purple};
    }
  }
  .thead-check {
  } 
  .last-cell {
    display: flex;
    align-items: center;
    img {
      margin-left: 11px;
    }
  }
  .activity-table-wrapper {
    width: 100%;
    background-color: ${colors.bg_primary};
    .activity-td {
      padding: 0;
    }
    td {
      padding: 0 30px;
    }
  }
  .activity-table {
    thead {
      background-color: #F2F0F9;
      th {
        &:last-child {
          flex-direction: row;
        }
      }
    }
    tbody {
      tr {
        height: auto;
        background-color: ${colors.bg_primary};
      }
    }
    .first-cell {
      text-transform: uppercase;
      padding-left: 105px;
    }
    .middle-cell {
      width: 250px;
      padding: 20px;
    }
  }
  .activity-table-open {
    background-color: ${colors.bg_primary};
  }
`
const trProps = {
  paymentStatus: String,
  userStatus: String
}
export const TableRow = styled('tr', trProps)`
  height: 60px;
  background-color: #FFFFFF;
  border-bottom: 1px solid ${colors.grey_light};
  td {
    margin: 15px 0;
    padding-left: 30px;
    color: ${colors.black_primary};
    letter-spacing: normal;
    &:last-child {
      padding-right: 30px;
    }
    .td-bold {
      font-weight: 500;
    }
    .td-group {   
      margin-bottom: 5px;
      font-weight: 500;
    }
    .td-primary {
      color: ${colors.black_primary};
    }
    .td-secondary {
      color: ${colors.black_secondary};
    }
  }
  .spaced {
    letter-spacing: 0.05em;
  }
  .table-status {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    .dot {
      width: 6px;
      height: 6px;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
  .user {
    display: inline-block;
    background: ${(props) => props.userStatus=='active' ? colors.blue_light : colors.bg_primary};
    padding: 2px 5px;
    border-radius: 10px;
    .dot {
      background-color: ${(props) => props.userStatus=='active' ? colors.blue_primary : colors.black_secondary};
    }
    .text {
      color: ${(props) => props.userStatus=='active' ? colors.blue_primary : colors.black_secondary};
    }
  }
  .payment {
    display: inline-block;
    padding: 2px 5px;
    border-radius: 10px;
    background: ${(props) => props.paymentStatus=='paid' ? colors.green_light : props.paymentStatus=='unpaid' ? colors.red_light : colors.yellow_light};
    .dot {
      background-color: ${(props) => props.paymentStatus=='paid' ? colors.green_primary : props.paymentStatus=='unpaid' ? colors.red_primary : colors.yellow_primary};
    }
    .text {
      color: ${(props) => props.paymentStatus=='paid' ? colors.green_primary : props.paymentStatus=='unpaid' ? colors.red_primary : colors.yellow_primary};
    }
  }
    .span {
      text-transform: capitalize;
    }
  .icon {
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: 20px;
    svg {
      object-fit: cover;
    }
  }
  .table-check {
    display: flex;
    align-items: center;
    .toggle {
      transform: rotate(180deg);
    }
  }
  .last-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
