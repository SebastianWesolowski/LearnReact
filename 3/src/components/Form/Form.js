import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

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
    activeOption: types.twitter
  };

  handleRadioButtonChange = type => {
    this.setState({ activeOption: type });
  };
  render() {
    const { activeOption } = this.state;
    return (
      <div className={styles.wrapper}>
        <Title>Add new {descryptions[activeOption]} account</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.props.submitFn}
        >
          <div className={styles.radioContainer}>
            <input
              id={types.twitter}
              type="radio"
              checked={activeOption === types.twitter}
              onChange={() => this.handleRadioButtonChange(types.twitter)}
            />
            <label for={types.twitter}>Twitter</label>
            <input
              id={types.article}
              type="radio"
              checked={activeOption === types.article}
              onChange={() => this.handleRadioButtonChange(types.article)}
            />
            <label for={types.article}>Article</label>
            <input
              id={types.note}
              type="radio"
              checked={activeOption === types.note}
              onChange={() => this.handleRadioButtonChange(types.note)}
            />
            <label for={types.note}>Note</label>
          </div>

          <Input
            name="name"
            label={activeOption === types.twitter ? "Twitter Name" : "Name"}
            maxLength={30}
          />
          {activeOption !== types.note ? (
            <Input
              name="twitterLink"
              label={activeOption === types.twitter ? "Twitter Link" : "Link"}
            />
          ) : null}

          {activeOption === types.twitter ? (
            <Input name="image" label="Image" />
          ) : null}

          <Input tag="textarea" name="description" label="Description" />
          <Button>add new item</Button>
        </form>
      </div>
    );
  }
}

export default Form;
