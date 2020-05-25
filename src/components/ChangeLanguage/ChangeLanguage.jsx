
import React from 'react';
import Button from '../Button/Button';
import {ChangeLanguageContainer} from './ChangeLanguageStyle.styles'
class ChangeLanguage extends React.Component{
    state={
        icon:null,
    }
    componentDidMount(){
        this.setState({
            icon:<i className="fa fa-globe"></i>
        })
    }
    render(){

        return(
            <ChangeLanguageContainer>
                <Button lan content={this.state.icon}/>
            </ChangeLanguageContainer>
        )
    }
}

export default ChangeLanguage;