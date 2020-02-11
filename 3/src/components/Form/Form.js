import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import AppContext from "../../context";
const types = {
  twitter: "twitter",
  article: "article",
  note: "note"
};

const descryptions = {
  twitter: "Favorite Twitter account",
  article: "Article",
  note: "Note"
};

class Form extends React.Component {
  state = {
    type: types.twitter,
    title: "",
    link: "",
    image: "",
    description: ""
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add new {descryptions[type]} account</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={e => context.addItem(e, this.state)}
            >
              <div className={styles.radioContainer}>
                <input
                  id={types.twitter}
                  type="radio"
                  checked={type === types.twitter}
                  onChange={() => this.handleRadioButtonChange(types.twitter)}
                />
                <label for={types.twitter}>Twitter</label>
                <input
                  id={types.article}
                  type="radio"
                  checked={type === types.article}
                  onChange={() => this.handleRadioButtonChange(types.article)}
                />
                <label for={types.article}>Article</label>
                <input
                  id={types.note}
                  type="radio"
                  checked={type === types.note}
                  onChange={() => this.handleRadioButtonChange(types.note)}
                />
                <label for={types.note}>Note</label>
              </div>

              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type === types.twitter ? "Twitter Name" : "Name"}
                maxLength={30}
              />
              {type !== types.note ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={type === types.twitter ? "Twitter Link" : "Link"}
                />
              ) : null}

              {type === types.twitter ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                />
              ) : null}

              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
