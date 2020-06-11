import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import Favorite from "@material-ui/icons/Favorite"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx"

import { Link } from "gatsby";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx"

import girl from "assets/img/girl.jpg"

class Components extends React.Component {
  constructor(props) {
    super(props)
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
    }
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    )
  }
  render() {
    const { classes, ...rest } = this.props
    const picstyle = {
      width: "100%",
      height: "auto",
    }
    const hstyle = {
      "text-align": "center",
    }
    const pstyle = {
      "text-align": "justify",
      "text-justify": "inter-word",
    }
    return (
      <div>
        <Header
          brand="Engimatic Enchiridion"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/darkb3.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>The Enigmatic Enchiridion</h1>
                  <h3 className={classes.subtitle}>
                    The words which were never spoken.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.section}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h1 style={hstyle} className={classes.description}>
                    Blog Posts
                  </h1>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <Card className={classes[this.state.cardAnimaton]}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>A question from a girl to the world out there...</h4>
                    </CardHeader>
                    <img
                      className={classes.imgCardTop}
                      src={girl}
                      alt="Card-img-cap"
                      style={picstyle}
                    />
                    <CardBody>
                      <p style={pstyle}>
                        I’m not a feminist neither I am against about the
                        concept of the support given to girls for their
                        wellbeing but I’m somewhere in between that. I always
                        wonder what is the real value of a girl in this society.
                        Is it just treated like other human beings or does it
                        have a unique place? From the day a girl is born till
                        the day she dies, her existence is doubted. Let’s take a
                        deeper look into it. Let’s see where this end and what
                        we can conclude. I’m not telling you that after reading
                        this all of them are going to be having a similar
                        thought. Some might get offended. Some might even feel
                        this was a waste of time. But what’s wrong in trying to
                        know instead of not trying at all.
                      </p>
                      <div align="left">
                        <Link to="/post-page" className={classes.link}>
                          <Button
                            className={classes.right}
                            size="lg"
                            color="rose"
                            round
                          >
                            <Favorite /> Read More...
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
