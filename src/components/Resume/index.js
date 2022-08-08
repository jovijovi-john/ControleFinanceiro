import React from 'react';
import * as C from "./styles";
import ResumeItem from '../ResumeItem';

import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"

export default function Resume() {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1500"/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1500"/>
      <ResumeItem title="Total" Icon={FaDollarSign} value="1500"/>
    </C.Container>
  )
}
