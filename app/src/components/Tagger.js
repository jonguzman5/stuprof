import React, {Component} from 'react';

class Tagger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "",
        }
    }

    onKeyDown = (event) => {
        if(event.keyCode === 13){
            event.preventDefault();
            this.onSubmit();
            this.setState({tag: ""})
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

     onSubmit = (event) => {
        const newTag = {
            tag: this.state.tag
        }
        this.props.handleSubmit(newTag)
    }

    render() {
        return (
            <input 
                name="tag" 
                value={this.state.tag} 
                onChange={this.handleChange}
                onKeyDown={this.onKeyDown}
            />        
        )
    }
}

export default Tagger;
