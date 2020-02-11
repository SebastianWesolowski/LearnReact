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
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem]
    }));

    this.closeModal();
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
    const contextElement = {
      ...this.state,
      addItem: this.addItem
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElement}>
          <Header openModalFn={this.openModal} />
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
