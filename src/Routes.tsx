import * as React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { HomePage } from "./page/HomePage";
// import { HomePage1 } from "./page/HomePage1";

 import {AppPage} from "./AppPage"
import antToDo from "./components/antDesign/antToDo";
// const MainWrapper = styled.main`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   .gray-container-wrapper {
//     background-color: rgb(243, 244, 245);
//     flex-grow: 1;
//   }
// `
export default class Routes extends React.Component {
  public render() {
    return (
      <BrowserRouter>
          <div>
          <Route path="/test" component={HomePage} />
          <Route path="/zzz" component={AppPage} />
          <Route path="/antd" component={antToDo}/>
          </div>
      </BrowserRouter>
    )
  }
}


