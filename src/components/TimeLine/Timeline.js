import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TwittInput } from "../TwittInput";
import { TwittCard } from "../TwittCard";

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // async componentDidMount() {
  //   this.subcribeToEvents();
  // }

  // subcribeToEvents = () => {
  //   const io = socket("http://localhost:5000");
  //   io.on("tweet", data => {
  //     let { tweets } = this.state;
  //     tweets = [data, ...tweets];
  //     this.setState({ tweets: tweets });
  //   });
  //   io.on("like", data => {
  //     let tweets = this.state.tweets.map(tweet =>
  //       tweet._id === data._id ? data : tweet
  //     );
  //     this.setState({ tweets: tweets });
  //   });
  // };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      tweets: nextProps.tweets
    };
  }

  render() {
    const { tweets } = this.props;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <TwittInput />
            {tweets.map((tw, index) => (
              <TwittCard key={index} item={tw} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TimeLine;
