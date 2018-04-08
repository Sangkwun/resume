import React,{ Component } from 'react';
import styles from './styles.scss';
import data from './experience';
import Ionicon from 'react-ionicons';
import imageURL from './images/1.jpg';

const App = () => {
  console.log(data);
  return <div className={styles.container}>
      <Personal />
      <Category title="Experience" data={data.experience} />
      <Category title="Others" data={data.side} />
      <Category title="Education" data={data.education} />
    </div>;
};

const Personal = () => {
  return (<div className={styles.box}>
    <div className={styles.title}> Kang Sangkwun </div>
    <div className={styles.content}> 
            <div className={styles.row}>
            E-mail : wer2774@gmail.com
            </div>
            <div className={styles.row}>
            Git : <a href="https://github.com/Sangkwun"> https://github.com/Sangkwun</a>
            </div>
            <div className={styles.row}>
            Portfolio : <a href="https://drive.google.com/open?id=0B5qiEf3hIRkNUzl0TnN4S2x3Yk0">{" "} Google Drive Link</a>
            </div>
    </div>
  </div>)
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
      result.push(<Image image={this.props.image}/>);
    }
    if(this.props.title === undefined){
      return null
    }
    return result
  }
}

const Image = props => {
  return <div className={styles.imageBox}>
      {props.image ? (
        <div className={styles.images}>
          {props.image.map(image => (
            <img className={styles.image} src={image} key={image} />
          ))}
        </div>
      ) : null}
    </div>;
}

export default App