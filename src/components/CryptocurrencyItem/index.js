import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyItem extends Component {
  state = {
    isLoading: true,
    data: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )

    const matter = await response.json()

    const updateData = matter.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      id: each.id,
    }))

    this.setState({data: updateData, isLoading: false})
  }

  render() {
    const {isLoading, data} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="bg1">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg1">
            <h1 className="h1">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img"
            />

            <div className="ul">
              <div className="l1">
                <div className="m1">
                  <p className="p">Coin</p>

                  <p className="p">Type</p>
                </div>

                <div className="m1">
                  <p className="p1">USD</p>
                  <p className="p1">EURO</p>
                </div>
              </div>

              {data.map(each => (
                <CryptocurrenciesList key={each.id} list={each} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrencyItem
