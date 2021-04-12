import React from 'react'

class AddBot extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <a className={this.props.style} href="https://discord.com/oauth2/authorize?client_id=789172527569305610&scope=bot&permissions=19520">ADD THE BOT !</a>
            </>
        )
    }

}

export default AddBot;