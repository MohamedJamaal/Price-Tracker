import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

// {transaction} as prop here , instead use props as parameter 
//then access it by props.transaction.text
function Transaction({ transaction }) {

    // call deleteTransaction action 
    const {deleteTransaction} = useContext(GlobalContext)

    // check for - or + sign
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div>
            <li className={transaction.amount < 0 ? "minus" : 'plus'}> 
                {/* math.abs makes number always positive */}
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    );
}

export default Transaction
