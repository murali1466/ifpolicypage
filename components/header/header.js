import { AppBar, Box, Container, List, ListItem } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/header.module.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
export default function Header() {
  const [mobiledropdown, setMobileDropDown] = useState(false);
  const [aboutus, setAboutUs] = useState(false);
  const [membership, setMemberShip] = useState(false);
  const [initiatives, setInitiatives] = useState(false);
  const [events, setEvents] = useState(false);
  function mobiledropdownfun() {
    setMobileDropDown(!mobiledropdown);
    setAboutUs(false);
    setMemberShip(false);
    setInitiatives(false);
    setEvents(false);
  }
  function aboutusfun() {
    setAboutUs(!aboutus);
  }
  function membershipfun() {
    setMemberShip(!membership);
  }
  function initiativesfun() {
    setInitiatives(!initiatives);
  }
  function eventsfun() {
    setEvents(!events);
  }

  return (
    <>
      <AppBar
        sx={{
          display: "block",
          backgroundColor: "#fff",
          height: "70px",
          position: "fixed",
        }}
        elevation={0}
      >
        <Container className={styles["main-con"]}>
          {/* innovative finance icon */}
          <Box sx={{ padding: "20px 0px" }}>
            <img
              src="https://res.cloudinary.com/dm9tstije/image/upload/v1679576918/if/if-logo_u82dg3.png"
              alt="Innovate Finance"
              className={styles["header-logo"]}
            />
          </Box>

          {/* desktop dropdown */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <List className={styles["list-con"]}>
              <ListItem className={styles["list-hover"]}>
                <Link href="">ABOUT US</Link>
                <Box className={styles["desktop-dropdown-item"]}>
                  <List>
                    <ListItem>
                      <Link href="">About Innovate Finance</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Board Members</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Meet the Team</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Corporate Announcements</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Contact</Link>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>
              <ListItem className={styles["list-hover"]}>
                <Link href="">MEMBERSHIP</Link>
                <Box className={styles["desktop-dropdown-item"]}>
                  <List>
                    <ListItem>
                      <Link href="">Become a Member</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Our Community</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Membership Area</Link>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>
              <ListItem className={styles["list-hover"]}>
                <Link href="">INITIATIVES</Link>
                <Box className={styles["desktop-dropdown-item"]}>
                  <List>
                    <ListItem>
                      <Link href="">Policy & Regulation Programme</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">UK FinTech Academic Network</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">The Kalifa Review of UK Fintech</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">FinTech for Schools</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Capital and Investment Programme</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Innovation in Finance</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Women in FinTech</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">FinTech National Network</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">36H Group</Link>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>
              <ListItem className={styles["list-hover"]}>
                <Link href="">EVENTS</Link>
                <Box className={styles["desktop-dropdown-item"]}>
                  <List>
                    <ListItem>
                      <Link href="">Events</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">
                        Women in FinTech Powerlist 2022 Celebratory Event
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">Innovate Finance Global Summit 2023</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="">UK FinTech Week 2023</Link>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>
              <ListItem>
                <Link href="">INSIGHTS</Link>
              </ListItem>
              <ListItem>
                <Link href="">JOBS BOARD</Link>
              </ListItem>
              <ListItem>
                <Link href="" className={styles["member-button"]}>
                  BECOME A MEMBER
                </Link>
              </ListItem>
            </List>
          </Box>

          {/* menu button */}

          <Box sx={{ display: { xs: "block", lg: "none" }, color: "#000" }}>
            <IconButton
              onClick={mobiledropdownfun}
              className={mobiledropdown ? "open" : ""}
            >
              {mobiledropdown ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

          {/* mobile dropdown */}

          {mobiledropdown ? (
            <Box
              sx={{
                position: "absolute",
                top: "70px",
                width: "100%",
                left: "0px",
                height: "0px",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "height 10s ease",
              }}
              className={mobiledropdown ? "show" : ""}
            >
              <List className={styles["mobile-con"]}>
                <ListItem className={styles["mobile-list-item"]}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "5px",
                    }}
                    onClick={aboutusfun}
                  >
                    <Box className={styles["mobile-dropdown-head"]}>
                      <Link href="">ABOUT US</Link>
                    </Box>
                    <Box>
                      <KeyboardArrowDownIcon sx={{ color: "#000" }} />
                    </Box>
                  </Box>
                  {aboutus ? (
                    <Box
                      className={styles["mobile-dropdown-item"]}
                      sx={{ backgroundColor: "#fff" }}
                    >
                      <List>
                        <ListItem>
                          <Link href="">About Innovate Finance</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Board Members</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Meet the Team</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Corporate Announcements</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Contact</Link>
                        </ListItem>
                      </List>
                    </Box>
                  ) : (
                    ""
                  )}
                </ListItem>

                <ListItem className={styles["mobile-list-item"]}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "5px",
                    }}
                    onClick={membershipfun}
                  >
                    <Box className={styles["mobile-dropdown-head"]}>
                      {" "}
                      <Link href="">MEMBERSHIP</Link>
                    </Box>
                    <Box>
                      <KeyboardArrowDownIcon sx={{ color: "#000" }} />
                    </Box>
                  </Box>

                  {membership ? (
                    <Box className={styles["mobile-dropdown-item"]}>
                      <List>
                        <ListItem>
                          <Link href="">Become a Member</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Our Community</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Membership Area</Link>
                        </ListItem>
                      </List>
                    </Box>
                  ) : (
                    ""
                  )}
                </ListItem>
                <ListItem className={styles["mobile-list-item"]}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "5px",
                    }}
                    onClick={initiativesfun}
                  >
                    <Box className={styles["mobile-dropdown-head"]}>
                      {" "}
                      <Link href="">INITIATIVES</Link>
                    </Box>
                    <Box>
                      <KeyboardArrowDownIcon sx={{ color: "#000" }} />
                    </Box>
                  </Box>

                  {initiatives ? (
                    <Box className={styles["mobile-dropdown-item"]}>
                      <List>
                        <ListItem>
                          <Link href="">Policy & Regulation Programme</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">UK FinTech Academic Network</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">The Kalifa Review of UK Fintech</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">FinTech for Schools</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Capital and Investment Programme</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Innovation in Finance</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">Women in FinTech</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">FinTech National Network</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">36H Group</Link>
                        </ListItem>
                      </List>
                    </Box>
                  ) : (
                    ""
                  )}
                </ListItem>
                <ListItem className={styles["mobile-list-item"]}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "5px",
                    }}
                    onClick={eventsfun}
                  >
                    <Box className={styles["mobile-dropdown-head"]}>
                      {" "}
                      <Link href="">EVENTS</Link>
                    </Box>
                    <Box>
                      <KeyboardArrowDownIcon sx={{ color: "#000" }} />
                    </Box>
                  </Box>

                  {events ? (
                    <Box className={styles["mobile-dropdown-item"]}>
                      <List>
                        <ListItem>
                          <Link href="">Events</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">
                            Women in FinTech Powerlist 2022 Celebratory Event
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">
                            Innovate Finance Global Summit 2023
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link href="">UK FinTech Week 2023</Link>
                        </ListItem>
                      </List>
                    </Box>
                  ) : (
                    ""
                  )}
                </ListItem>
                <ListItem className={styles["mobile-list-nodropdown"]}>
                  <Link href="">INSIGHTS</Link>
                </ListItem>
                <ListItem className={styles["mobile-list-nodropdown"]}>
                  <Link href="">JOBS BOARD</Link>
                </ListItem>
                <ListItem className={styles["mobile-list-nodropdown"]}>
                  <Link href="">BECOME A MEMBER</Link>
                </ListItem>
              </List>
            </Box>
          ) : (
            ""
          )}
        </Container>
      </AppBar>
    </>
  );
}
