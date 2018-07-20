import React,{ Component } from 'react';
import styles from './styles.scss';
import data from './experience';
import data_eng from './experience_eng';
import Ionicon from 'react-ionicons';
import imageURL from './images/1.jpg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      lang: "ko"
    }

    this._changeLang = (event) => {
      const lang = event.target.innerText;
  
      if(lang==="English"){
        this.setState({ lang: "eng" });
      }else{
        this.setState({lang: "ko"})
      }
      console.log(this.state)
    }
  }
  componentDidMount(){
    if (document.location.pathname === "/eng") {
      this.setState({ lang: "eng" });
    }
  }
  render(){
    if(this.state.lang==="eng"){
      return <English changeLang={this._changeLang} lang={this.state.lang}/>;
    }else{
      return <Korean changeLang={this._changeLang} lang={this.state.lang} />;
    }
  }
}

const English = (props) => {
  return <div className={styles.container}>
      <Personal changeLang={props.changeLang} lang={props.lang} />
      <Category title="Experience" data={data_eng.experience} />
      <Category title="Personal" data={data_eng.side} />
      <Category title="Education" data={data_eng.education} />
    </div>;
}
const Korean = (props) => {
  return <div className={styles.container}>
      <Personal changeLang={props.changeLang} lang={props.lang} />
      <Category title="Experience" data={data.experience} />
      <Category title="Personal" data={data.side} />
      <Category title="Education" data={data.education} />
    </div>;
}
const Personal = (props) => {
  return <div className={styles.box}>
      <div>
        <div className={styles.title}> Kang Sangkwun </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <Ionicon className={styles.icon} icon="ios-mail" />wer2774@gmail.com
          </div>
          <div className={styles.row}>
            <Ionicon className={styles.icon} icon="logo-github" />
            <a href="https://github.com/Sangkwun">
              {" "}
              https://github.com/Sangkwun
            </a>
          </div>
          <div className={styles.row}>
            <Ionicon className={styles.icon} icon="ios-book" />
            <a href="https://drive.google.com/open?id=0B5qiEf3hIRkNUzl0TnN4S2x3Yk0">
              {" "}
              Design Portfolio
            </a>
          </div>
        </div>
      </div>
      <div className={styles.split}>
        <Lang changeLang={props.changeLang} lang={props.lang}/>
      </div>
    </div>;
};

const Lang = (props) => {
  return (
    <div className={styles.lang}>
      <span onClick={props.changeLang} >English</span>|
      <span onClick={props.changeLang} >Korean</span>
    </div>
  );
};

const Category = (props) => {
    return <div>
        <div className={styles.category}> {props.title} </div>
        {props.data.map(row => <Row {...row} />)}
        <Row />
      </div>;
}

class Row extends React.Component{
  constructor() {
    super()
    this.state = {
      expanded: false
    }

    this.handleExpand = evenet => {
      const { target: { name } } = event;

      if(this.state.expanded){
        this.setState({expanded: false});
      }else{
        this.setState({ expanded: true });
      }
    };

  };

  render() {
    var result = [<div className={styles.row}>
        <div className={styles.content}>
          <span className={styles.title}>{this.props.title}</span>
          <span className={styles.period}>{this.props.period}</span>
          <span className={styles.description}>
            {this.props.description}
          </span>
        </div>
        {this.state.expanded ?
          <Ionicon className={styles.expand} icon="ios-remove-circle" onClick={this.handleExpand} />
          : <Ionicon className={styles.expand} icon="ios-add-circle" onClick={this.handleExpand}/>}
      </div>];
    if(this.state.expanded){
      result.push(<Image image={this.props.image} bullet ={this.props.bullet}/>);
    }
    if(this.props.title === undefined){
      return null
    }
    return result
  }
}

const Image = props => {
  return <div className={styles.imageBox}>
      <Bullets bullet={props.bullet} />
      {props.image ? <div className={styles.images}>
          {props.image.map(image => (
            <img className={styles.image} src={image} key={image} />
          ))}
        </div> : null}
    </div>;
}

const Bullets = props => {
  return <div>
    {props.bullet ?
      <div className={styles.bulletBox}>
        {props.bullet.map(bullet => (
          <div className={styles.bullet}>
            <Ionicon fontSize="12px" icon="ios-arrow-forward"/>
            {bullet}
          </div>
        ))}
      </div>
    :null}
    </div>
}

export default App