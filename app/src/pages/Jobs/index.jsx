import React from "react";
import { Header } from "../../components/Header";
import { Filters, JobsList } from "./styles";

export function Jobs({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Filters>

        </Filters>
        <JobsList ></JobsList>
      </div>
    </div>
  );
}
