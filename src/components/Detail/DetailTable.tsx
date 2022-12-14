import React from "react";
import styled from "styled-components";
import { AccountList, PatchAccountData } from "../../types";
import { convertDataFunction } from "../../utils/converData";
import DetailTableItem from "./DetailTableItem";
import DetailInputText from "./DetailInputText";
import DetailSelectBroker from "./DetailSelectBroker";
import DetailSelectStatus from "./DetailSelectStatus";
import DetailSelectActive from "./DetailSelectActive";

interface DetailTable {
  data: AccountList;
  handleDataChange(id: number, value: PatchAccountData): void;
}

const DetailTable = ({ data, handleDataChange }: DetailTable) => {
  return (
    <div>
      <DetailTableContentContainer>
        <DetailTableItem
          title="계좌명"
          value={data.name}
          id={data.id}
          target={"name"}
          handleDataChange={handleDataChange}
          children={<DetailInputText />}
        />
        <DetailTableItem
          title="계좌번호"
          value={data.number}
          id={data.id}
          target={"number"}
          handleDataChange={handleDataChange}
          children={<DetailInputText />}
        />
        <DetailTableItem
          title="증권사"
          value={convertDataFunction.convertAccountBroker(data.broker_id)}
          id={data.id}
          target={"broker_id"}
          handleDataChange={handleDataChange}
          children={<DetailSelectBroker defaultValue={data.broker_id} />}
        />
        <DetailTableItem
          title="고객명"
          value={String(data.user_id)}
          id={data.id}
          target={"user_id"}
          handleDataChange={handleDataChange}
        />
        <DetailTableItem
          title="계좌상태"
          value={convertDataFunction.convertAccountStatus(data.status)}
          id={data.id}
          target={"status"}
          handleDataChange={handleDataChange}
          children={<DetailSelectStatus defaultValue={data.status} />}
        />
        <DetailTableItem
          title="계좌활성화여부"
          value={data.is_active ? "활성" : "비활성"}
          id={data.id}
          target={"is_active"}
          handleDataChange={handleDataChange}
          children={<DetailSelectActive defaultValue={data.is_active ? "활성" : "비활성"} />}
        />
        <DetailTableItem
          title="평가금액"
          value={`${convertDataFunction.convertAccountAssets(data.assets)} 원`}
          id={data.id}
          target={"assets"}
          handleDataChange={handleDataChange}
          children={<DetailInputText />}
        />
        <DetailTableItem
          title="입금금액"
          value={`${convertDataFunction.convertAccountAssets(data.payments)} 원`}
          id={data.id}
          target={"payments"}
          handleDataChange={handleDataChange}
          children={<DetailInputText />}
        />
        <DetailTableItem
          title="계좌개설일"
          value={convertDataFunction.convertCreatedDate(data.created_at)}
          id={data.id}
          target={"created_at"}
          handleDataChange={handleDataChange}
        />
        <DetailTableItem
          title="최근활동일"
          value={convertDataFunction.convertCreatedDate(data.updated_at)}
          id={data.id}
          target={"updated_at"}
          handleDataChange={handleDataChange}
        />
        <DetailTableItem
          title="uuid"
          value={data.uuid}
          id={data.id}
          target={"uuid"}
          handleDataChange={handleDataChange}
        />
      </DetailTableContentContainer>
    </div>
  );
};

const DetailTableContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export default DetailTable;
