import React from 'react';
import './Card.scss';
import image24 from '../../images/image24.png';
import compare from '../../images/compare.png';
 
// import image25 from '../../images/image25.png';
// import image26 from '../../images/image26.png';


export class Card extends React.Component {
  state = {
    count: 1,
    color: null,
    selectedVolume: null,
  }

  handleColorChange(event) {
    this.setState({
      color: event.target.value
    });
  }

  handleVolumeChange(event) {
    this.setState({
      selectedVolume: event.target.value
    });
  }

  setCount = (event, addValue) => {
    this.setState((state) => {
      if(addValue !== undefined) { 
        return ({
          count:  +state.count + addValue
        })
      } else {
        return ({
          count: event.target.value
        })
      }
    })
  }

  render() {
    const { count, color } = this.state;

    return (
      <div className="card">
        <p className="card__is-new">new</p>
        <button className="card__compare">
          <img
            alt=""
            src={compare}
          ></img>
        </button>
        <img
          className="card__image"
          alt="product"
          src={image24}
        ></img>
        <p className="card__title">Шампунь</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div className="card__control">
          <div className="card__row">
            <select
              className="card__color"
              name="color"
              value={color}
              onChange={event => this.handleColorChange(event)}
            >
              <option disabled selected value={null}>Цвет</option>
              <option value="yellow">Желтый</option>
              <option value="red">Красный</option>
              <option value="green">Зеленый</option>
            </select>
            <p className="card__price">200 грн</p>
          </div>
          <div className="card__volumes">
            <div className="card__volume">
              <input
                type="radio"
                name="100ml"
                value="100"
                id="100ml"
                onChange={event => this.handleVolumeChange(event)}
              />
              <label htmlFor="100ml">100 мл</label>
            </div>
            <div className="card__volume">
              <input
                type="radio"
                name="200ml"
                value="200"
                id="200ml"
                onChange={event => this.handleVolumeChange(event)}
              />
              <label htmlFor="200ml">200 мл</label>
            </div>
            <div className="card__volume">
              <input
                type="radio"
                name="300ml"
                value="300"
                id="300ml"
                onChange={event => this.handleVolumeChange(event)}
              />
              <label htmlFor="300ml">300 мл</label>
            </div>
          </div>
          <div className="card__row">
            <div className="card__count">
              <button
                type="button"
                className="card__count-button"
                onClick={event => this.setCount(event, -1)}
              >
                -
              </button>
              <input
                className="card__count-input"
                type="number"
                min="1"
                value={count}
                onChange={event => this.setCount(event)}
              ></input>
              <button
                type="button"
                className="card__count-button"
                onClick={event => this.setCount(event, 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="card__buy"
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    )
  }
}
