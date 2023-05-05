import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  Button,
} from "@mui/material";
import styles from "../../styles/areaoffocus.module.css";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

const labeldata = [
  "The Kalifa Review",
  "SME Finance",
  "FinTech Regulation",
  "Trade policy",
  "Net Zero",
  "Innovation in unsecured credit",
  "Open Finance",
  "Digital Assets, Blockchain and Crypto",
  "Innovate Finance FinTech Agenda for the New PM",
];

export default function ResponsiveTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles["areaoffocus"]}>
      <Container className="main">
        <Typography variant="h1" className={styles["main-heading"]}>
          Area of focus
        </Typography>
        <Box
          sx={{
            display: { md: "flex" },
            flexDirection: "row",
            gap: "2%",
            width: "100%",
          }}
        >
          <Paper sx={{ width: { xs: "100%", md: "30%" } }} elevation={0}>
            <Tabs value={value} onChange={handleChange}>
              {labeldata.map((data) => (
                <Tab label={data} />
              ))}
            </Tabs>
          </Paper>
          <Box
            sx={{
              backgroundColor: "transparent",
              marginTop: "10px",
              width: "68%",
            }}
          >
            <TabPanel value={value} index={0}>
              <Typography variant="h1" className={styles["heading-1"]}>
                <Box component="span" className="italic">
                  The Kalifa Review
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                In 2020, HM Treasury commissioned an independent review of the
                UK’s Fintech sector. Chaired by Ron Kalifa OBE, the Review was
                published in March 2021. Innovate Finance provided the
                secretariat with our colleagues at the City of London
                Corporation.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                Innovate Finance is working with our members and other
                stakeholders to push forward the Review’s recommendations.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                Click here to read more about the Review and its
                recommendations.
              </Typography>
              <Typography className={styles["description"]}>
                <Box component="span" className="strong">
                  {" "}
                  One year on from the publication of the Kalifa Review of UK
                  FinTech, over 70 CEOs and Founders from across Innovate
                  Finance’s membership welcomed strong progress and called for
                  further action. Find out more here
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="h1" className={styles["heading-1"]}>
                <Box component="span" className="italic">
                  SME Finance
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                Over the last ten years, FinTechs have led the way in increasing
                the supply of finance for the UK’s small and medium sized
                businesses (SMEs). These alternative lenders, including
                ‘challenger banks’ and platform finance, have achieved this
                despite regulatory and policy barriers.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                Innovate Finance is working with our members and other
                stakeholders to secure a level playing field for alternative
                lenders, so they can do even more to support SME recovery and
                growth.
              </Typography>
              <Typography className={styles["description"]}>
                <Box component="span" className="strong">
                  {" "}
                  Read our analysis of SME lending and our proposals for
                  enabling alternative lenders to do even more to support small
                  firms
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                <Box component="span" className="strong italic">
                  {" "}
                  Alternative Lenders delivered for Small Businesses during
                  Covid{" "}
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                by Mike Carter, Head of Lending and Investment, Innovate Finance{" "}
              </Typography>
              <Typography className={styles["description"]}>
                30 May 2022{" "}
              </Typography>
              <Typography className={styles["description"]}>
                In this blog post we assess the contribution that Alternative
                Lenders (non-bank lenders using digital lending platforms) made
                to small business (SME) SME lending during the Covid crisis,
                including Innovate Finance members’ part in that lending, and
                the challenges for SME lending looking forward and how our
                members can help.
              </Typography>
              <Typography className={styles["description"]}>
                <Link className={styles["anchor"]} href="">
                  Click here to read full blog
                </Link>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography className={styles["heading-1"]} variant="h1">
                FinTech Regulation{" "}
              </Typography>
              <Typography className={styles["description"]}>
                Innovate Finance supports the development of the UK’s
                world-leading regulatory regime to ensure it strikes the
                appropriate balance between encouraging innovation and
                protecting consumers. As technology and markets develop, we
                support the extension of the regulatory perimeter to include new
                products and services. Regulation should provide effective
                consumer protection, trust and confidence in the market, and
                enable innovative products and services that meet consumer needs
                and strengthen financial wellbeing.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                {" "}
                Regulation should be proportionate, maintaining UK
                competitiveness and not acting as a barrier or disproportionate
                burden on startups and scaleups; and should take a ‘digital by
                default’ approach that enables outcomes to be achieved through
                digital channels, including compliance through RegTech solutio
              </Typography>
              <Typography className={styles["description"]}>
                Innovate Finance works with members to shape regulatory
                proposals, identify regulatory issues, and strengthen
                regulators’ understanding of Fintech.
              </Typography>
              <Typography className={styles["description"]}>
                In response to the Treasury Consultation on Future Regulatory
                Framework, we welcomed the Government’s proposal for a
                competitiveness objective for FCA and PRA and called on
                Government to go further: extend it to other regulators; ensure
                regulators have the culture, capability and capacity to make
                this work; introduce requirements for regulators to promote
                RegTech solutions; and introduce new requirements for cost
                benefit analysis to include a specific ‘scale up’ and ‘start
                up’; tests.
                <Link href="">
                  {" "}
                  https://www.innovatefinance.com/blogs/financial-services-future-regulatory-framework-review-proposals-for-reform/
                </Link>
              </Typography>
              <Typography
                className={styles["description"]}
                sx={{ marginTop: "40px!important" }}
              >
                Responding to the FCA Consultation on Consumer Duty, we have
                welcomed the principle of this outcome based regulation – as an
                approach that can better support innovation than ‘tick box’
                regulation; but we argue that this should replace existing
                prescriptive regulation and not – as proposed – be imposed on
                top of prescriptive rules. We have identified a range of
                regulations that could be removed and called for a full review
                of regulations that should be scrapped when the consumer duty
                comes into force.
              </Typography>
              <Typography className={styles["description"]}>
                Read our analysis and response to FCA proposals for a new
                Consumer Duty:
              </Typography>
              <Typography className={styles["description"]}>
                <Link href="">
                  {" "}
                  https://www.innovatefinance.com/blogs/a-new-consumer-duty/
                </Link>
              </Typography>
              <Typography className={styles["description"]}>
                Analysis of proposed reforms to financial promotion rules:
                <Link href="">
                  {" "}
                  https://www.innovatefinance.com/blogs/uk-widens-the-scope-of-the-financial-promotions-regime-for-investments-whats-changing/
                </Link>
              </Typography>
              <Typography
                className={styles["description"]}
                sx={{ marginTop: "40px!important" }}
              >
                In response to the Payment Systems Regulator consultation on
                proposals to introduce mandatory reimbursement for victims of
                scams, we called for a more strategic cross-government approach
                to tackle the consumer blight of scams – including action
                against the tech platforms where scams originate; highlighting
                unintended consequences of FOS and PSR approaches (which are
                resulting in criminal gangs targeting the UK); and the impact of
                mandatory reimbursement on investment by, and in, ScaleUps and
                on market entry.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                <Link href="">
                  {" "}
                  https://www.innovatefinance.com/blogs/psr-consultation-paper-authorised-push-payment-scams-cp21-10-innovate-finance-response/
                </Link>
              </Typography>
              <Typography className={styles["description"]}>
                We have set out guiding principles and priority actions for
                building the future UK regulatory system.
                <Link href="">
                  {" "}
                  https://www.innovatefinance.com/a-post-brexit-regulatory-regime-for-innovation/
                </Link>
              </Typography>
              <Typography
                className={styles["description"]}
                sx={{ marginTop: "40px!important" }}
              >
                The Financial Services and Markets Bill will overhaul the UK’s
                financial regulatory system. Our Director of Policy, Adam
                Jackson, unpacks what it means for FinTechs here
                <Link href="">
                  {" "}
                  https://www.innovatefinance.com/uncategorised/the-financial-services-and-markets-bill-whats-in-it-for-uk-fintech/
                </Link>
              </Typography>
              <Typography className={styles["description"]}>
                <Box component="span" className="strong">
                  Financial Services & Markets Bill Innovate Finance Briefing
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Typography className={styles["heading-1"]}>
                Trade policy
              </Typography>
              <Typography className={styles["description"]}>
                Trade policy is ever more important to UK FinTech, as regulators
                around the world develop their approach to new products and
                services and the UK Government builds new trading relationships
                and forges new agreements on digital trade and financial
                services.
              </Typography>
              <Typography className={styles["description"]}>
                Our trade policy work aims to remove barriers to trade faced by
                UK FinTechs in overseas markets, whether through cross-border
                services and trade or investment and establishment of services.
                We are working with our members and other stakeholders to
                identify trade policy priorities for UK Fintech and specific
                issues in key markets and to engage with government and
                regulators to advance these.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Typography variant="h1" className={styles["heading-1"]}>
                Net Zero
              </Typography>
              <Typography className={styles["description"]}>
                FinTech has a huge role to play in the race against climate
                change: creating the tools and infrastructure, enabling
                consumers to take action, and embedding Net Zero in capital
                markets.
              </Typography>
              <Typography className={styles["description"]}>
                Our work on climate change aims to:
              </Typography>
              <List className={styles["netzero-list"]}>
                <ListItem>
                  Champion the role of our members and Fintech as the heart of
                  UK’s global green finance expertise
                </ListItem>
                <ListItem>Celebrate what members are doing already</ListItem>
                <ListItem>Challenge them to do more</ListItem>
                <ListItem>Support members with tools and workshops</ListItem>
                <ListItem>
                  Advocate changes needed to unleash NetZero fintech and address
                  regulatory and policy barriers
                </ListItem>
              </List>
              <Typography>
                <Box component="span" className="strong">
                  Innovate Finance has now published the 2022 Emmisions Report
                  from our commitment to measure and disclose our scope 1, 2 and
                  3 carbon emissions in October 2021. Find out more here.
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                Our Net Zero White Paper sets out the role that FinTech is
                already playing and can and must play in the future to achieve
                Net Zero. It is designed to make sense of a rapidly evolving
                area, to enable people in FinTech, financial institutions,
                government and regulators to make the most of what FinTech can
                do to solve the greatest crisis faced by humanity. You can
                download the White Paper here:
              </Typography>
              <Box className={styles["button-con"]}>
                <Button variant="contained" className={styles["custom-button"]}>
                  <EastIcon className={styles["rightarrow-icon"]} />
                  Read the Report
                </Button>
              </Box>
              <Typography>
                Responding to FCA proposals on sustainability labelling and
                disclosures we called on the FCA to go further and facilitate
                access to data and RegTech solutions, including making it
                mandatory to provide disclosures in a machine-readable format,
                adopt technology-led compliance supervision, and support
                automation of climate-related regulatory reporting
              </Typography>
              <Box className={styles["button-con"]}>
                <Button variant="contained" className={styles["custom-button"]}>
                  <EastIcon className={styles["rightarrow-icon"]} />
                  Read the Response
                </Button>
              </Box>
              <Typography>
                Here is our analysis of UK Net Zero regulatory approaches:{" "}
              </Typography>
              <Box className={styles["buttons-con"]}>
                <Box className={styles["button-con"]}>
                  <Button
                    variant="contained"
                    className={styles["custom-button"]}
                  >
                    <EastIcon className={styles["rightarrow-icon"]} />
                    Read Part 1
                  </Button>
                </Box>
                <Box className={styles["button-con"]}>
                  <Button
                    variant="contained"
                    className={styles["custom-button"]}
                  >
                    <EastIcon className={styles["rightarrow-icon"]} />
                    Read Part 2
                  </Button>
                </Box>
              </Box>
              <img
                src="https://www.innovatefinance.com/wp-content/uploads/2021/10/mambu-case-study-pdf-1.jpg"
                alt="mambu"
                width="100%"
                height="auto"
              />
              <Typography>
                How FinTech is the foundation for the UK’s global Green Finance
                centre
              </Typography>
              <Typography>
                Innovate Finance responded to the Government’s consultation on
                the UK’s Green Finance Strategy. Our response describes how we
                believe the UK’s global FinTech hub can provide the basis for
                growing the UK as the world’s centre for green finance. It’s
                also packed with case studies of what our members are doing
                already to rewire finance to combat climate change.
              </Typography>
              <Box className={styles["button-con"]}>
                <Button variant="contained" className={styles["custom-button"]}>
                  <EastIcon className={styles["rightarrow-icon"]} />
                  READ THE CONSULTATION RESPONSE HERE
                </Button>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Typography className={styles["heading-1"]}>
                Innovation in unsecured credit{" "}
              </Typography>
              <Typography className={styles["description"]}>
                Following the publication of the Woolard Review, Innovate
                Finance is working to convene and enable engagement between
                policy makers and members on innovation in unsecured credit.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                We are focusing on how to ensure the regulatory approach to this
                part of FinTech is proportionate, striking a balance between
                providing consumer protection and confidence, and fosters
                innovation and provides consumers with choice.
              </Typography>
              <Typography className={styles["description"]}>
                <Box className="strong" component="span">
                  You can read our statement on the UK Government consultation
                  on regulation of buy now, pay later credit here
                </Box>
              </Typography>
              <Typography
                className={styles["description"]}
                sx={{ marginTop: "40px!important" }}
              >
                You can read our response to the HM Treasury consultation on
                regulation of Buy Now, Pay Later here
              </Typography>
              <Typography className={styles["description"]}>
                In March 2022, MPs and members of the House of Lords discussed
                Buy Now Pay Later regulation with the industry and consumer and
                policy organisations. You can read more here.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={6}>
              {" "}
              <Typography className={styles["heading-1"]}>
                Open Finance{" "}
              </Typography>
              <Typography className={styles["description"]}>
                The Kalifa Review identified Open Finance as one of the biggest
                opportunities for improving financial advice and financial
                outcomes for consumers. As Open Finance moves from concept to
                reality, Innovate Finance wants to ensure the FinTech voice is
                heard in debates and discussions on the creation and
                implementation of this exciting innovation.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                Our Open Finance programme has two elements: to inform and
                educate the wider ecosystem on what a financial services sector
                using Open Finance will look like and how the market stands to
                benefit; and to engage with regulators and government to shape
                how Open Finance is moved forward. In order to do this, we will
                be working closely with our members, creating opportunities for
                cross-ecosystem engagement and dialogue via roundtables, public
                events and content creation.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                At the start of 2022 we set out the open finance agenda for the
                year ahead:
                <Link href="https://www.openbankingexcellence.org/blog/2022-trends-small-steps-or-a-big-leap-for-open-finance/">
                  {" "}
                  https://www.openbankingexcellence.org/blog/2022-trends-small-steps-or-a-big-leap-for-open-finance/
                </Link>
              </Typography>
              <Typography className={styles["description"]}>
                Read our response to CMA proposals for future plans for an open
                banking entity:
                <Link href="https://www.innovatefinance.com/news/innovate-finance-comment-on-cmas-response-on-future-plans-for-an-open-banking-entity/">
                  {" "}
                  https://www.innovatefinance.com/news/innovate-finance-comment-on-cmas-response-on-future-plans-for-an-open-banking-entity/
                </Link>
              </Typography>
              <Typography
                className={styles["description"]}
                sx={{ marginTop: "40px!important" }}
              >
                Our views on CMA proposals for open banking variable recurring
                payments for sweeping:
                https://www.innovatefinance.com/news/innovate-finance-comment-on-the-cmas-definition-of-variable-recurring-payments-for-sweeping/
              </Typography>
              <Typography className={styles["description"]}>
                The UK Government has set out plans for a ‘pro-innovation’
                approach to regulating AI, reforming GDPR, introducing digital
                ID and extending open finance. In this blog our director of
                Policy Adam Jackson sums up the proposals, what they mean for
                FinTech and what to expect next.
                https://www.innovatefinance.com/news/uk-government-plans-for-data-ai-and-digital-id/
              </Typography>
              <Typography className={styles["description"]}>
                <Box className="strong" component="strong">
                  Digital Protection and Digital Information Bill Innovate
                  Finance Briefing
                </Box>
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Typography className={styles["heading-1"]}>
                Digital Assets, Blockchain & Crypto{" "}
              </Typography>
              <Typography className={styles["description"]}>
                The UK has the opportunity to be the leading international
                centre for blockchain enabled financial services including
                payments, ESG assurance and capital markets infrastructure. To
                capitalise on this we need a concerted effort by Government and
                regulators to deliver a joined up strategy and a regulatory
                system, with a more flexible approach to piloting regulation,
                that can evolve in collaboration with industry and other
                nations.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                We work with our members across the broad spectrum of ‘crypto’
                including digital assets, DLT, DeFi; covering products and
                services including exchanges, wallet providers, infrastructure,
                green finance and payment systems.
              </Typography>
              <Typography className={styles["description"]}>
                Our Director of Policy, Adam Jackson, is a member of the{" "}
                <Box className="strong" component="span">
                  <Link href="">
                    Bank of England’s Central Bank Digital Currency advisory
                    panel,
                  </Link>
                </Box>
                alongside a number of our members.
              </Typography>
              <Typography className={styles["description"]}>
                At our global summit, IFGS, in April 2022, Treasury Minister
                John Glen MP announced the Government’s vision for the UK to be
                the best place in the world to start and grow a crypto firm.
                Read our assessment of the Uk Government strategy: is it
                internationally competitive, what is needed to turn plans into
                tangible outcomes, and is the UK approach still relevant?
              </Typography>
              <Typography className={styles["description"]}>
                Read our response to the FCA’s consultation on extending
                financial promotions rules to crypto assets:
                <Box className="strong" component="span">
                  <Link href="https://www.innovatefinance.com/blogs/fca-consultation-paper-strengthening-our-financial-promotion-rules-for-high-risk-investments-including-crypto-assets-cp-22-2-innovate-finance-response/">
                    {" "}
                    https://www.innovatefinance.com/blogs/fca-consultation-paper-strengthening-our-financial-promotion-rules-for-high-risk-investments-including-crypto-assets-cp-22-2-innovate-finance-response/
                  </Link>
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                Analysis of Bank of England and statements on stablecoins, March
                2022:{" "}
              </Typography>
              <Typography className={styles["description"]}>
                <Box className="strong" component="span">
                  <Link
                    href="https://www.innovatefinance.com/news/cryptoassets-and-defi-mixed-messages-from-regulators-but-some-progress-from-the-bank-of-england/
"
                  >
                    {" "}
                    https://www.innovatefinance.com/news/cryptoassets-and-defi-mixed-messages-from-regulators-but-some-progress-from-the-bank-of-england/
                  </Link>
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                We submitted evidence to the House of Lord’s inquiry into a
                Central bank Digital Currency:
                https://www.innovatefinance.com/blogs/central-bank-digital-currency-house-of-lords-economic-affairs-committee-inquiry-response-from-innovate-finance/
              </Typography>
              <Typography className={styles["description"]}>
                In 2021 we called for a clear UK regulatory roadmap for crypto
                assets and blockchain enabled financial markets and payments:
                <Box className="strong" component="span">
                  <Link href="https://www.innovatefinance.com/blogs/we-need-a-clear-regulatory-roadmap-for-success-to-become-a-leader-in-crypto/">
                    {" "}
                    https://www.innovatefinance.com/blogs/we-need-a-clear-regulatory-roadmap-for-success-to-become-a-leader-in-crypto/
                  </Link>
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                Innovate Finance, working with Shearman & Sterling, has
                submitted a comprehensive evidence paper to the House of Commons
                Treasury Committee inquiry into crypto-assets. Details of the
                inquiry can be found{" "}
                <Box className="strong" component="span">
                  <Link href="">here</Link>
                </Box>
                .
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Typography className={styles["heading-2"]}>
                <Box className="strong" component="span">
                  Innovate Finance FinTech Agenda for the New PM
                </Box>
              </Typography>
              <Typography className={styles["description"]}>
                We look forward to continuing to work with him and the
                government to further strengthen the UK’s position as a
                world-leading FinTech hub, and to realise the full potential of
                FinTech to create a more democratic, inclusive and effective
                financial services sector that works better for all.{" "}
              </Typography>
              <Typography className={styles["description"]}>
                We have outline six key areas for the new Prime Minister and
                Government to focus on. Delivering on these will ensure that the
                UK remains the best place in the world for FinTechs to start,
                scale and grow their businesses, and will allow consumers across
                the country to benefit from these new entrants and new
                technologies.{" "}
              </Typography>
              <Box className={styles["small-button-con"]}>
                <Button className={styles["small-button"]}>
                  <EastIcon className={styles["rightarrow-icon-small"]} />
                  Read Blog
                </Button>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
