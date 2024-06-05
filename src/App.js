import {Component} from "react";
import { withTranslation } from 'react-i18next';


class App extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (lang)=>{
       this.props.i18n.changeLanguage(lang);
    }

    render() {
        const {t,i18n} = this.props;

        return (
            <div>
                Varsayılan Dil : {i18n.language}

                <p>
                    Karşılama Mesajı: {t('welcome')}
                </p>

                <p>
                    <button onClick={() => this.handleChange('tr')}>Türkçe</button>
                    <button onClick={() => this.handleChange('en')}>İngilizce</button>
                    <button onClick={() => this.handleChange('al')}>Almanca</button>
                </p>
            </div>
        )
    }
}

export default withTranslation()(App);
