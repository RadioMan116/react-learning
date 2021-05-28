import { useState } from "react";

export default function useAmount(initAmount){
    const [amount, setAmount] = useState(initAmount);

    const decrement = () => setAmount(amount > 0 ? amount - 1 : 0);
    const increment = () => setAmount(amount + 1);

    return {decrement, increment, amount};
}