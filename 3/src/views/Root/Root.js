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
import AppContext from "../../context";
class Root extends React.Component {
  state = {
    // items: [...initialStateItems],
    isModalOpen: true,
    name: "Test"
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
        <AppContext.Provider value={this.state.name}>
          <Header openModalFn={this.openModal} />
          <h1>Hello</h1>
          <Switch>
            <Route exact path="/" component={TwitterView} />
            <Route path="/article" component={ArticleView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
