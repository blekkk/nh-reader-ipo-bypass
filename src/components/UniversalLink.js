import React from 'react'

class UniversalLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <a className={this.props.style} href={this.props.link}>{this.props.content}</a>
            </>
        )
    }

}

export default UniversalLink;