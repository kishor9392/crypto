import './index.css'

const CryptocurrenciesList = props => {
  const {list} = props

  const {currencyLogo, currencyName, euroValue, usdValue} = list

  return (
    <list className="l2">
      <list className="m2">
        <img src={currencyLogo} alt={currencyName} className="img1" />

        <p className="p3">{currencyName}</p>
      </list>

      <list className="m2">
        <p className="p4">{usdValue}</p>
        <p className="p4">{euroValue}</p>
      </list>
    </list>
  )
}

export default CryptocurrenciesList
