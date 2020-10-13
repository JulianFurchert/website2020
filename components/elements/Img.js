import React, {Component} from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`

class Img extends Component {
  constructor(props){
    super(props);
    this.state = { loaded: "unloaded" };
    this.image = React.createRef();
  }

  componentDidMount(){
    let image = this.image.current;
    image.addEventListener('load', ()=> {
      this.props.onLoad();
    });
    if(image.complete){
      this.props.onLoad();
    }
  }

  componentWillUnmount(){
    let image = this.image.current;
    image.removeEventListener('load', ()=> {
      this.props.onLoad();
    });
  }

  render(){
    let { fluid } = this.props;
    return (
      <StyledImg src={fluid.src} ref={this.image} />
    )
  }
}

export default Img;