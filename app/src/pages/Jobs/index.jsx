import React from "react";
import { Header } from "../../components/Header";
import { Container, Filters, JobsList, Card } from "./styles";

import {
  MdLocalLibrary,
  MdStorefront,
  MdAssuredWorkload,
  MdAttachMoney,
  MdBarChart,
  MdWorkHistory,
} from "react-icons/md";

export function Jobs({ children }) {
  return (
    <div>
      <Header />
      <Container>
        <Filters>
          <h1>Filters</h1>
        </Filters>
        <JobsList>
          <Card>
            <div className="logo">
              <img
                src="https://res.cloudinary.com/programathor/image/upload/c_fit,h_100,w_100/v1679064066/djfl1obvh9jnuopzgcto.png"
                alt="logo"
              />
            </div>
            <div className="summary">
              <h3>Programador Front-end Angular</h3>
              <ul>
                <li>
                  <MdStorefront size={30} color={"gray"} />
                  <p>Nome empresa LTDA</p>
                </li>
                <li>
                  <MdLocalLibrary size={30} color={"gray"} />
                  <p>São Paulo</p>
                </li>
                <li>
                  <MdAssuredWorkload size={30} color={"gray"} />
                  <p>Startup</p>
                </li>
                <li>
                  <MdAttachMoney size={30} color={"gray"} />
                  <p>RS: 10.000</p>
                </li>
                <li>
                  <MdBarChart size={30} color={"gray"} />
                  <p>Pleno</p>
                </li>
                <li>
                  <MdWorkHistory size={30} color={"gray"} />
                  <p>CLT/PJ</p>
                </li>
              </ul>

              <div className="wrapper">
                <div className="pill">html</div>
                <div className="pill">css</div>
                <div className="pill">javascript</div>
                <div className="pill">typescript</div>
                <div className="pill">angular</div>
                <div className="pill">node.js</div>
                <div className="pill">reactjs</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="logo">
              <img
                src="https://res.cloudinary.com/programathor/image/upload/c_fit,h_100,w_100/v1679064066/djfl1obvh9jnuopzgcto.png"
                alt="logo"
              />
            </div>
            <div className="summary">
              <h3>Programador Front-end Angular</h3>
              <ul>
                <li>
                  <MdStorefront size={30} color={"gray"} />
                  <p>Nome empresa LTDA</p>
                </li>
                <li>
                  <MdLocalLibrary size={30} color={"gray"} />
                  <p>São Paulo</p>
                </li>
                <li>
                  <MdAssuredWorkload size={30} color={"gray"} />
                  <p>Startup</p>
                </li>
                <li>
                  <MdAttachMoney size={30} color={"gray"} />
                  <p>RS: 10.000</p>
                </li>
                <li>
                  <MdBarChart size={30} color={"gray"} />
                  <p>Pleno</p>
                </li>
                <li>
                  <MdWorkHistory size={30} color={"gray"} />
                  <p>CLT/PJ</p>
                </li>
              </ul>

              <div className="wrapper">
                <div className="pill">html</div>
                <div className="pill">css</div>
                <div className="pill">javascript</div>
                <div className="pill">typescript</div>
                <div className="pill">angular</div>
                <div className="pill">node.js</div>
                <div className="pill">reactjs</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="logo">
              <img
                src="https://res.cloudinary.com/programathor/image/upload/c_fit,h_100,w_100/v1679064066/djfl1obvh9jnuopzgcto.png"
                alt="logo"
              />
            </div>
            <div className="summary">
              <h3>Programador Front-end Angular</h3>
              <ul>
                <li>
                  <MdStorefront size={30} color={"gray"} />
                  <p>Nome empresa LTDA</p>
                </li>
                <li>
                  <MdLocalLibrary size={30} color={"gray"} />
                  <p>São Paulo</p>
                </li>
                <li>
                  <MdAssuredWorkload size={30} color={"gray"} />
                  <p>Startup</p>
                </li>
                <li>
                  <MdAttachMoney size={30} color={"gray"} />
                  <p>RS: 10.000</p>
                </li>
                <li>
                  <MdBarChart size={30} color={"gray"} />
                  <p>Pleno</p>
                </li>
                <li>
                  <MdWorkHistory size={30} color={"gray"} />
                  <p>CLT/PJ</p>
                </li>
              </ul>

              <div className="wrapper">
                <div className="pill">html</div>
                <div className="pill">css</div>
                <div className="pill">javascript</div>
                <div className="pill">typescript</div>
                <div className="pill">angular</div>
                <div className="pill">node.js</div>
                <div className="pill">reactjs</div>
              </div>
            </div>
          </Card>
        </JobsList>
      </Container>
    </div>
  );
}
