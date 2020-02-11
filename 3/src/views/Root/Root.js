import React from "react";
// import List from "../../components/List/List";
// import Form from "../../components/Form/Form";

import "./root.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import ArticleView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesViews";
import TwitterView from "../TwitterView/TwitterView";

// const initialStateItems = [
//   {
//     image: "https://picsum.photos/150/150?random=1",
//     name: "Dan Abramov",
//     twitterLink: "https://twitter.com/dan_abramov"
//   },
//   {
//     image: "https://picsum.photos/150/150?random=2",
//     name: "Ryan Florence",
//     description:
//       "Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",
//     twitterLink: "https://twitter.com/ryanflorence"
//   },
//   {
//     image: "https://picsum.photos/150/150?random=3",
//     name: "Michael Jackson",
//     description:
//       "Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.",
//     twitterLink: "https://twitter.com/mjackson"
//   },
//   {
//     image: "https://picsum.photos/150/150?random=4",
//     name: "Kent C. Dodds",
//     description:
//       "Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS",
//     twitterLink: "https://twitter.com/kentcdodds"
//   }
// ];
class Root extends React.Component {
  state = {
    // items: [...initialStateItems],
    isModalOpen: false
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <Header openModalFn={this.openModal} />
        <h1>Hello</h1>
        <Switch>
          <Route exact path="/" component={TwitterView} />
          <Route path="/article" component={ArticleView} />
          <Route path="/notes" component={NotesView} />
        </Switch>
        {isModalOpen && <Modal closeModalFn={this.closeModal} />}
      </BrowserRouter>
    );
  }
}

export default Root;
