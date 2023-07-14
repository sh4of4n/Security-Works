/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
21/06/2023            SawYN     1.0.0           - Create SideMenu component
30/06/2023            SawYN     1.0.1           - Add in pin props

*/

/** @jsxImportSource @emotion/react */
import { RouteContext } from "contexts/RouteContext";
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import Text from "./Text";
import { Accordion, Container, Dropdown } from "react-bootstrap";
import { paths } from "routers/routes";
import { FinexusLogo, ProfilePic } from "./Images";
import { PartnerContext } from "contexts/PartnerContext";
import SideMenuCss from "styles/components/SideMenuCss";
import { ChevronLeft, ChevronRight, PinAngle, PinFill } from "react-bootstrap-icons";

interface menuSubItem {
  id?: number;
  name: string;
  route?: string;
}

interface menuItem {
  navId?: string;
  name: string;
  route?: string;
  subItems?: menuSubItem[];
}

interface SideMenuProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
  username: string;
  pin: boolean;
  setPin: Dispatch<SetStateAction<boolean>>;
}

const SideMenu = ({
  menuOpen,
  setMenuOpen,
  className,
  username,
  pin,
  setPin
}: SideMenuProps) => {
  const { theme } = useContext(PartnerContext);
  const { goTo } = useContext(RouteContext); 
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [subActive, setSubActive] = useState(null);
  const [lastActive, setLastActive] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const menuItems: menuItem[] = [
    {
      navId: "0",
      name: "System Level",
      subItems: [
        {
          id: 0,
          name: "Security Parameter",
          route: "",
        },
        {
          id: 1,
          name: "Task Profile",
          route: "",
        },
        {
          id: 2,
          name: "Security Question",
          route: "",
        }
      ]
    },
    {
      navId: "1",
      name: "Organisation Level",
      subItems: [
        {
          id: 0,
          name: "Organisation Profile",
          route: "",
        },
        {
          id: 1,
          name: "Application Profile",
          route: "",
        },
        {
          id: 2,
          name: "Application Administrator",
          route: "/" + paths.Playground,
        },
        {
          id: 3,
          name: "User Profile",
          route: "/" + paths.Playground,
        },
        {
          id: 4,
          name: "Privilege User",
          route: "/" + paths.Playground,
        },
        {
          id: 5,
          name: "Reset Password",
          route: "/" + paths.Playground,
        },
        {
          id: 6,
          name: "System Administrator",
          route: "/" + paths.Playground,
        },
        {
          id: 7,
          name: "Clear Session",
          route: "/" + paths.Playground,
        },
        {
          id: 8,
          name: "Recover Deleted User",
          route: "/" + paths.Playground,
        }
      ],
    },
    {
      navId: "2",
      name: "Application Level",
      subItems: [
        {
          id: 0,
          name: "Application User",
          route: "",
        },
        {
          id: 1,
          name: "Unit Profile",
          route: "",
        },
        {
          id: 2,
          name: "Unit Administrator",
          route: "/" + paths.Playground,
        },
        {
          id: 3,
          name: "Unit Task",
          route: "/" + paths.Playground,
        },
        {
          id: 4,
          name: "User Profile",
          route: "/" + paths.Playground,
        },
        {
          id: 5,
          name: "Reset Password",
          route: "/" + paths.Playground,
        },
        {
          id: 6,
          name: "Clear Session",
          route: "/" + paths.Playground,
        },
        {
          id: 7,
          name: "Recover Deleted User",
          route: "/" + paths.Playground,
        }
      ],
    },
    {
      navId: "3",
      name: "Unit Level",
      subItems: [
        {
          id: 0,
          name: "Unit Administrator",
          route: "",
        },
        {
          id: 1,
          name: "Unit User",
          route: "",
        },
        {
          id: 2,
          name: "Group Profile",
          route: "/" + paths.Playground,
        },
        {
          id: 3,
          name: "Group Task",
          route: "/" + paths.Playground,
        },
        {
          id: 4,
          name: "Group User",
          route: "/" + paths.Playground,
        },
        {
          id: 5,
          name: "User Profile",
          route: "/" + paths.Playground,
        },
        {
          id: 6,
          name: "Reset Password",
          route: "/" + paths.Playground,
        },
        {
          id: 7,
          name: "Clear Session",
          route: "/" + paths.Playground,
        },
        {
          id: 8,
          name: "Recover Deleted User",
          route: "/" + paths.Playground,
        },
        {
          id: 9,
          name: "User Task Request",
          route: "/" + paths.Playground,
        }
      ],
    },
  ];

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <Container css={SideMenuCss(theme)} className={`${className}`}
        onMouseEnter={()=>{!pin && setMenuOpen(windowSize <= 1118 ? false : true)}}
        onMouseLeave={()=>{!pin && setMenuOpen(windowSize <= 1118 ? true : false)}}
      > 
        <Container className="p-0 d-flex flex-column justify-content-between h-100">
          <Container className="p-0">
            <Container className="text-end p-0 pb-4">
            {pin ?
              windowSize > 1118 && <PinFill className="pin" onClick={()=>{setPin(!pin)}}/>
            :
              windowSize > 1118 && <PinAngle className="pin" onClick={()=>{setPin(!pin)}}/>
            }
            </Container>
            {(!menuOpen && windowSize <= 1118) && 
              <Container className="text-center pb-4">
                <ProfilePic className="profile-pic m-auto"/>
                <Text label={username} className="mt-3 d-block"/>
              </Container>
            }
            {menuItems.map((item, index) => {
              return (
                item.subItems ? 
                  <Accordion key={index} activeKey={open ? active:null}>
                    <Accordion.Item 
                      key={index} 
                      eventKey={index.toString()} 
                    >
                      <Accordion.Header 
                        className={active === index.toString() ? "sub-active" : ""}
                        onClick={() => {
                          setActive(index.toString());
                          setOpen(true);

                          if(open && active === index.toString()){
                            setOpen(false);
                          }
                        }}
                        >
                        {/* {changeItemIconHandler} */}
                        {item.name}
                      </Accordion.Header>
                      <Accordion.Body className="p-0">
                        {item.subItems.map((sub, subIndex) => {
                          return (
                            <Dropdown
                              key={subIndex}
                              onClick={() => {
                                setOpen(true);
                                goTo(sub.route);
                                setSubActive(subIndex.toString());
                                setLastActive(index.toString());
                              }}
                              className={subActive === subIndex.toString() && lastActive === index.toString() ?"active":""}
                            >
                              <Text label={sub.name} className="ms-3"/>
                            </Dropdown>
                          );
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                :
                  <Accordion key={index} activeKey={active}>
                    <Accordion.Button
                      onClick={() => {
                        goTo(item.route);
                        setActive(index.toString());
                        setLastActive(index.toString())
                        setOpen(false);
                      }}
                      className={active === index.toString() ? "active accordion-button-no-expand" : "accordion-button-no-expand"}
                    >
                      {/* {changeItemIconHandler} */}
                      {item.name}
                    </Accordion.Button>
                  </Accordion>
              )
            })}
          </Container>
          <Container className="app-nav-footer">
            <Text label="@ 2023 FINEXUS Group" className="label" />
            <FinexusLogo />
          </Container>
        </Container>
      </Container>
      <Container 
        css={SideMenuCss(theme)} 
        className="w-auto p-0 align-self-start h-auto chevron"
        onMouseEnter={()=>{!pin && setMenuOpen(windowSize <= 1118 ? false : true)}}
        onMouseLeave={()=>{!pin && setMenuOpen(windowSize <= 1118 ? true : false)}}
      >
        {menuOpen ? <ChevronLeft/> : <ChevronRight/>}
      </Container>
    </>
  );
}

export default SideMenu;