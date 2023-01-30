const Item = (props) => {

  const currencies = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    ];

    // Если название предложения превышает 50 символов,
    // то необходимо выводить только первые 50 символов, и добавлять символ … в конце.
  const getTitle = (title) => {
        return title.length > 50 ? title.slice(0, 50) + '…' : title;
      }
      
      // При выводе стоимости предложения необходимо учитывать валюту. Если цена задана:
    // в долларах США, код USD, то цену вывести в формате $50.00;
    // в евро, код EUR, то цену вывести в формате €50.00;
    // в остальных случаях цену вывести в формате 50.00 GBP, где GBP — код валюты.
  const getPrice = (price, currency_code) => {
        const cur = currencies.find((item) => item.code === currency_code);
        return cur
          ? `${cur.symbol}${Number(price).toFixed(2)}`
          : `${Number(price).toFixed(2)} ${currency_code}`;
      }
      
    // Вывести остаток, подсветив его в зависимости от количества, используя класс level-*:
    // level-low — если остаток меньше 10 включительно;
    // level-medium — если остаток меньше 20 включительно;
    //level-high — если остаток больше 20.
  const getLevel = (quantity) => {
        return quantity > 20 ? 'level-high'
          : quantity > 10 ? 'level-medium'
          : 'level-low';
      }
      
  const {
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity,
  } = props.date;
  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage && MainImage.url_570xN} alt='фото товара'/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title && getTitle(title)}</p>
        <p className="item-price">{price && getPrice(price, currency_code)}</p>
        <p className={`item-quantity ${quantity && getLevel(quantity)}`}>{`${quantity} left`}</p>
      </div>
    </div>
  );
}


export default Item;