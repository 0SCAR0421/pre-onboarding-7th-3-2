import React from "react";
import { convertDataFunction } from "../../utils/converData";
import { AccountList } from "../../types";
import styled from "styled-components";

interface TableProps {
  accountList: AccountList[];
  handleDetail(uuid: string): void;
}

const Table = ({ accountList, handleDetail }: TableProps) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>고객명</th>
            <th>브로커명</th>
            <th>계좌번호</th>
            <th>계좌상태</th>
            <th>계좌명</th>
            <th>평가금액</th>
            <th>입금금액</th>
            <th>계좌활성화여부</th>
            <th>계좌개설일</th>
          </tr>
        </thead>
        <tbody>
          {accountList.map((e) => (
            <tr key={e.uuid}>
              <td onClick={() => handleDetail(e.uuid)}>{e.user_id}</td>
              <td>{e.broker_id}</td>
              <td>{e.number}</td>
              <td>{convertDataFunction.convertAccountStatus(e.status)}</td>
              <td>{e.name}</td>
              <td>{e.assets}</td>
              <td>{e.payments}</td>
              <td>{e.is_active ? "활성" : "비활성"}</td>
              <td>{convertDataFunction.convertCreatedDate(e.created_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  > table {
    display: inline-table;
    margin-bottom: 30px;

    & > thead {
      font-size: 18px;
      border-bottom: 1px solid #000;

      & > tr > th {
        text-align: left;
        padding: 15px;
      }
    }

    & > tbody {
      font-size: 16px;

      & > tr {
        border-bottom: 1px solid #000;
      }

      & > tr > td {
        padding: 15px;
      }
    }
  }
`;

export default Table;