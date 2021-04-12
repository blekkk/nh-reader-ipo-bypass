import React from 'react'
import styles from '../styles/forms.module.css'

class Forms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            infoValue: '',
            readerValue: ''
        }
    }

    handleInfoValue = (event) => {
        this.setState({
            infoValue: event.target.value
        })
    }

    handleReaderValue = (event) => {
        this.setState({
            readerValue: event.target.value
        })
    }

    render() {
        return(
            <>
                <form >
                    <div>
                        <p className={styles.p}>Nhentai-info</p>
                        <div className={styles.test}>
                            <input className={styles.inputBox} onChange={(event) => this.handleInfoValue(event)}></input>
                            <a className={styles.a} href={`/nhen-info/${this.state.infoValue}`}>Go</a>
                        </div>
                        
                    </div>
                    <div>
                        <p className={styles.p}>Nhentai-reader</p>
                        <input className={styles.inputBox} onChange={(event) => this.handleReaderValue(event)}></input>
                        <a className={styles.a} href={`/nhen-reader/${this.state.readerValue}`}>Go</a>
                    </div>
                </form>
            </>
        )
    }

}

export default Forms;