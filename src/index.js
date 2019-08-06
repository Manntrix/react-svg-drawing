import React, {Component} from 'react'
import './index.css'
import anime from 'animejs';
import PropTypes from 'prop-types'

export default class DrawSVG extends Component {
    constructor(props) {
        super(props);
        var targets = props.targets;
        var loop = props.loop;
       
        var easing = props.easing;
        var duration = props.duration;
        var delay = props.delay
        
        this.state ={
            duration: duration,
            loop: loop,
            targets:targets,
            easing: easing,    
            delay: delay
        }
    }
    animation(){
        anime({
          targets: this.state.targets || 'svg path' ,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing:  this.state.easing || 'easeInOutElastic',
          duration: this.state.duration || 2000,
          delay: this.state.delay || function(el, i) { return i * 250 },  
          loop: this.state.loop  ||  false
        });
       }
    
       componentDidMount(){
         this.animation()
       }
    render() {
       
const children = this.props.children
const { width, stroke, bgColor, strokeWidth, SVGClass } = this.props;
var SVGStyle = {
    width : width || 200,
    fill: bgColor || 'none',
    stroke: stroke || 'black',
    strokeWidth: strokeWidth || 1
}

        return ( 
    <div className={SVGClass || 'react-svg-drawing'} style={SVGStyle}>
         {children}
     </div> 
            
        )
    }
}

DrawSVG.propTypes ={
    targets: PropTypes.string,
    easing: PropTypes.string,
    duration: PropTypes.number,
    delay: PropTypes.number,
    loop: PropTypes.bool,
    children: PropTypes.element.isRequired
};