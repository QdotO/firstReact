// Layout.js
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
/** */
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: "Whats good Q!" };
    }

    changeTitle(title){
        this.setState({title});
    }
    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
}
