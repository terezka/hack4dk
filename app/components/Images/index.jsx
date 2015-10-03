import React from 'react';
import Radium from 'radium';
import Color from 'color';

import { getInstaVarious, getSMK, getUserInfo } from 'utils/api.js';
import ContentStore from 'stores/ContentStore.js';
import Constants from 'constants';

import { Col, Carousel, CarouselItem } from 'react-bootstrap';

let getStateFromStore = () => {
    return { 
        images: ContentStore.images,
        pagination: ContentStore.pagination,
        comment: ContentStore.comment //imageKey: ContentStore.imageKey,
    };
};


class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = getStateFromStore();
        this.direction = null;
        this.imageKey = 0;
        this.handleSelect = this.handleSelect.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    handleSelect(selectedIndex, selectedDirection) {
        this.setState({
          imageKey: selectedIndex,
          direction: selectedDirection
        });
    }

    render() {
        console.log(this.state.comment);
        var comment = (this.state.comment) ? this.state.comment.text : null; 
        return (
            <Col xs={12} md={6}>
                <Carousel activeIndex={this.state.imageKey} direction={this.state.direction} onSelect={this.handleSelect} slide={false}>
                    <CarouselItem>
                        <img style={{margin: '0 auto'}} height={500} alt="900x500" src={require('images/1.jpg')}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img style={{margin: '0 auto'}} height={500} alt="900x500" src={require('images/2.jpg')}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img style={{margin: '0 auto'}} height={500} alt="900x500" src={require('images/3.jpg')}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img style={{margin: '0 auto'}} height={500} alt="900x500" src={require('images/4.jpg')}/>
                    </CarouselItem>
                </Carousel>
                {(comment) && <div style={[style.caption]} className="carousel-caption"><p>{comment}</p></div>}
            </Col>
        );
    }
    componentDidMount() {
        ContentStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        ContentStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState(getStateFromStore());
    }
}

let style = {
    caption: {
        width: '100%',
        right: 0,
        left: 0,
        bottom: 0,
        padding: '1em',
        paddingBottom: '50px',
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
}

export default Radium(Comments);