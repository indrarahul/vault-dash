import React from 'react'
import Header from '../../components/common/Header'
import { connect } from 'react-redux';
import './style.scss'

function Home() {
    return (
        <div className="mainContainer">
            <div className="mainContainer__headerContainer">
                <Header />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
