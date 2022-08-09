import React from 'react';
import * as C from "./styles";
import ResumeItem from '../ResumeItem';

import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from "react-icons/fa"

export default function Resume({income, expense, total}) {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
    </C.Container>
  )
}
