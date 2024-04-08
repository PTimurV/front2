function task21(arr) {
    const opsCountByMonth = [];
    a=0
    
    arr.forEach(item => {
        if (a!=item.month)
        {
            opsCountByMonth.push({year: 2019, month: item.month, opsCount: 1})
            a=item.month
        }
        else{
            opsCountByMonth[a-1].opsCount++
        }
    });

    opsCountByMonth.sort(function(a, b) {
      return b.opsCount - a.opsCount;
    });
    
    return opsCountByMonth.slice(0, 3);

}

function task22(year, month, arr) {
    const lastDayOfMonth = new Date(year, month, 0);
    const date = `${year}-${month.toString().padStart(2, '0')}-${lastDayOfMonth.getDate()}`;
    
    const operationsOfMonth = arr.filter(item => item.year === year && item.month === month);
    
    let monthReplenishment = 0;
    let monthWithdrawal = 0;
    let monthPayment = 0;
    operationsOfMonth.forEach(operation => {
        if (operation.type === 'replenishment') {
            monthReplenishment += operation.amount;
        } else if (operation.type === 'withdrawal') {
            monthWithdrawal += operation.amount;
        } else if (operation.type === 'payment') {
            monthPayment += operation.amount;
        }
    });
    
    const monthBalance = monthReplenishment - monthWithdrawal - monthPayment;
    const withdrawalRate = monthWithdrawal / monthReplenishment;
    
    let rank;
    if (withdrawalRate < 0.15) {
        rank = 'Золотой';
    } else if (withdrawalRate < 0.3) {
        rank = 'Серебряный';
    } else {
        rank = 'Бронзовый';
    }
    
    const result = {
        date: date,
        monthBalance: monthBalance,
        monthWithdrawal: monthWithdrawal,
        withdrawalRate: withdrawalRate.toFixed(4), 
        rank: rank
    };
    
    return result;
}

function task23(arr) {
    result=[]
    const year = 2019
    let totalBalance = 0
   for (let i = 1; i <= 12; i++)
        {
            resultMonth = task22(year, i, arr)
            totalBalance+=resultMonth.monthBalance
            resultMonth.totalBalance = totalBalance
            result.push(resultMonth)
        }
    return result;
}