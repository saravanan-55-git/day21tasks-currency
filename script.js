async function api(){
    var cur_api = 'https://api.currencyfreaks.com/latest?apikey=4d687f2afb184b8fbf52e56d8309deda';
    var url = fetch(cur_api);
    var prom = await(await url).json();
    console.log(prom);
    var parent = document.querySelector('.container');
    var price_data = document.createElement('p');
    price_data.innerHTML="Date: "+prom.date;
    parent.append(price_data);

    //Base
    var currency_base = document.createElement('p');
    currency_base.innerHTML = "Base: " + prom.base + " 1 Dollar";
    parent.append(currency_base);

    //Rates
    var out = "";
    var placeholder = document.querySelector('.output');
    Object.entries(prom.rates).forEach(([keys,value])=>{
        out+=`
        <tr>
            <td class="keys">${keys}</td>
            <td>${value}</td>
        </tr>
        `;
        return out;
    })
    placeholder.innerHTML = out;
}

api();