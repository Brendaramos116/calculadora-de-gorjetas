function calculateTips(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviquali = document.getElementById('serviquali').value;
    let numOfPeople = document.getElementById('people').value;
    console.log(bill, serviquali, numOfPeople)
    if (bill == '' | serviquali == 0) {
        alert('Por favor, preencha os valores');
        return;
    }

    if (numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else {
        document.getElementById('each').style.display = 'block';
    }

    let total = (bill * serviquali) / numOfPeople;
    total = total.toFixed(2);
    each = total / numOfPeople
    document.getElementById('tip').innerHTML = total;
    document.getElementById('each').innerHTML = each;
    document.getElementById('totaltips').style.display = 'block';
}

document.getElementById('totaltips').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('botao').addEventListener('click', calculateTips);
